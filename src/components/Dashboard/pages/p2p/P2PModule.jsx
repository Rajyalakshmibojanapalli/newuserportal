import React, { useState } from "react";
import {
  CheckCircle,
  Clock,
  Pickaxe,
  Plus,
  PlusCircle,
  XCircle,
} from "lucide-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import {
  useBuyP2PMutation,
  useGetP2PHistoryBuyerQuery,
  useLazyGetP2PQuoteQuery,
  useLazySellToCompanyQuery,
} from "./p2pApiSlice";
import { toast } from "../../../../ReusableComponents/Toasts/Toasts";
import CreateStakeModal from "./CreateStakeModal";
import StakingHistory from "./StakingHistory";
import SellToCompanyModal from "./SellToCompanyModal";

export const stakeSchema = Yup.object({
  sellerUsername: Yup.string().required("Seller username is required"),
  buyInr: Yup.number()
    .typeError("Amount must be a number")
    .positive("Amount must be greater than 0")
    .required("Amount is required"),
});
const P2PModule = () => {
  const [activeTab, setActiveTab] = useState("staking");
  const [showStakeModal, setShowStakeModal] = useState(false);
  const [page, setPage] = useState(1);
  const [wpPage, setWpPage] = useState(1);

  // ✅ Add state for sell input modal
  const [showSellInput, setShowSellInput] = useState(false);
  const [sellCoinsInput, setSellCoinsInput] = useState("");

  const [sellModal, setSellModal] = useState({
    show: false,
    type: "",
    tokensTosell: 0,
    message: "",
    onConfirm: null,
  });

  const [buyP2P, { isLoading }] = useBuyP2PMutation();

  const [
    getQuote,
    { data: quoteData, isFetching: quoteLoading, error: quoteError },
  ] = useLazyGetP2PQuoteQuery();

  const tradeType =
    activeTab === "wp-staking"
      ? "wpStaking"
      : activeTab === "mining"
        ? "mining"
        : activeTab === "Layer-Benefits-Staking"
          ? "leaderwpStaking"
          : "regular";
  const { data: getHistory, isLoading: loading } = useGetP2PHistoryBuyerQuery({
    page,
    limit: 10,
    tradeType,
  });

  const { data: getWpHistory, isLoading: wpLoading } = useGetP2PHistoryBuyerQuery({
    page: wpPage,
    limit: 10,
    tradeType,
  });

  const [triggerSellToCompany, { isFetching: sellLoading }] =
    useLazySellToCompanyQuery();

  const handleStakeSubmit = async (values, { resetForm }) => {
    try {
      const payload = {
        sellerUsername: values.sellerUsername,
        buyInr: Number(values.buyInr),
        tradeType,
      };

      const res = await buyP2P(payload).unwrap();

      toast.success(res?.message || "Stake request submitted");
      resetForm();
      setShowStakeModal(false);
    } catch (err) {
      toast.error(err?.data?.message || "Something went wrong");
    }
  };

  // ✅ Actually closes the modal
  const closeSellModal = () => {
    setSellModal((prev) => ({ ...prev, show: false }));
  };

  // ✅ Open sell input modal
  const openSellInput = () => {
    setSellCoinsInput("");
    setShowSellInput(true);
  };
const openSellModal = () => {
  const sellType =
    activeTab === "wp-staking"
      ? "wpStaking"
      : activeTab === "Layer-Benefits-Staking"
        ? "leaderwpStaking"
        : "regular";

  setSellModal({
    show: true,
    type: sellType,
  });
};
  // ✅ Handle sell with input validation
  const handleSellToCompany = async () => {
    const sellType = activeTab === "wp-staking" ? "wp-staking" : "staking";
    const tokensToSell = Number(sellCoinsInput);

    // ✅ Validation
    if (!tokensToSell || tokensToSell <= 0) {
      toast.error("Please enter a valid number of coins");
      return;
    }

    try {
      setShowSellInput(false); // ✅ Close input modal

      const res = await triggerSellToCompany({
        type: sellType,
        tokensTosell: tokensToSell
      }).unwrap();

      setSellModal({
        show: true,
        type: sellType,
        tokensTosell: tokensToSell,
        message: res?.message || "Sell order processed successfully",
        onConfirm: (previewData) => {
          console.log("Confirmed with preview:", previewData);
          closeSellModal();
        },
      });
    } catch (err) {
      setSellModal({
        show: true,
        type: sellType,
        tokensTosell: tokensToSell,
        message: err?.data?.message || "Failed to process sell order",
        onConfirm: null,
      });
    }
  };

  return (
    <div className="h-full overflow-y-auto  p-4 sm:p-6">
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-xl sm:text-2xl lg:text-2xl font-bold text-gray-800 mb-2">
            P2P Dashboard
          </h1>
        </div>

        {/* Toggle */}
        <div className="bg-white rounded-lg p-2 shadow-md mb-8 w-full">
          <div className="grid sm:grid-cols-1 lg:grid-cols-4  gap-1 w-full">
            {["staking", "mining", "wp-staking", "Layer-Benefits-Staking"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-full py-2 rounded-lg font-semibold text-sm sm:text-base transition-all capitalize ${activeTab === tab
                  ? "bg-teal-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-teal-50"
                  }`}
              >
                {tab === "wp-staking"
                  ? "WP Staking"
                  : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Mining */}
        {activeTab === "mining" && (
          <div className="flex items-center justify-center min-h-[420px]">
            <div className="w-full bg-white rounded-lg border border-teal-100 shadow-sm p-6 sm:p-12 text-center">
              <div className="mx-auto w-16 h-16 sm:w-24 sm:h-24 rounded-lg bg-teal-50 flex items-center justify-center mb-6">
                <Pickaxe className="text-teal-600" size={32} />
              </div>
              <span className="inline-flex px-4 py-1.5 rounded-lg text-xs sm:text-sm font-semibold bg-amber-50 text-amber-700 border border-amber-100 mb-5">
                Coming Soon
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-teal-900">
                Jaimax Mining P2P
              </h2>
              <p className="mt-8 text-xs sm:text-sm text-slate-400">
                This feature will be available in an upcoming platform update.
                Insights are currently under development.
              </p>
            </div>
          </div>
        )}

        {/* Staking */}
        {activeTab === "staking" && (
          <div className="space-y-8">
            <div className="flex justify-end gap-2 sm:gap-4">
              <button
                onClick={openSellModal} // ✅ Changed to open input modal
                disabled={sellLoading}
                className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 text-sm sm:text-base rounded-lg font-semibold flex items-center gap-2 transition-all disabled:cursor-not-allowed disabled:bg-teal-400"
              >
                {sellLoading ? "Processing..." : "Sell to company"}
              </button>
              <button
                onClick={() => setShowStakeModal(true)}
                className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 text-sm sm:text-base rounded-lg font-semibold flex items-center gap-2 transition-all"
              >
                <PlusCircle size={18} />
                Purchase
              </button>
            </div>
            <StakingHistory
              history={getHistory}
              onPageChange={(p) => setPage(p)}
              isLoading={isLoading || loading}
              onOpenStakeModal={() => setShowStakeModal(true)}
            />
          </div>
        )}

        {/* WP Staking */}
        {activeTab === "wp-staking" && (
          <div className="space-y-8">
            <div className="flex justify-end gap-2 sm:gap-4">
              <button
                onClick={openSellModal} // ✅ Changed to open input modal
                disabled={sellLoading}
                className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 text-sm sm:text-base rounded-lg font-semibold flex items-center gap-2 transition-all disabled:cursor-not-allowed disabled:bg-teal-400"
              >
                {sellLoading ? "Processing..." : "Sell to company"}
              </button>
              <button
                onClick={() => setShowStakeModal(true)}
                className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 text-sm sm:text-base rounded-lg font-semibold flex items-center gap-2 transition-all"
              >
                <PlusCircle size={18} />
                Purchase
              </button>
            </div>
            <StakingHistory
              history={getWpHistory}
              onPageChange={(p) => setWpPage(p)}
              isLoading={isLoading || wpLoading}
              onOpenStakeModal={() => setShowStakeModal(true)}
            />
          </div>
        )}
        {activeTab === "Layer-Benefits-Staking" && (
          <div className="space-y-8">
            <div className="flex justify-end gap-2 sm:gap-4">
              <button
                onClick={openSellModal} // ✅ Changed to open input modal
                disabled={sellLoading}
                className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 text-sm sm:text-base rounded-lg font-semibold flex items-center gap-2 transition-all disabled:cursor-not-allowed disabled:bg-teal-400"
              >
                {sellLoading ? "Processing..." : "Sell to company"}
              </button>
              <button
                onClick={() => setShowStakeModal(true)}
                className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 text-sm sm:text-base rounded-lg font-semibold flex items-center gap-2 transition-all"
              >
                <PlusCircle size={18} />
                Purchase
              </button>
            </div>
            <StakingHistory
              history={getHistory}
              onPageChange={(p) => setPage(p)}
              isLoading={isLoading || loading}
              onOpenStakeModal={() => setShowStakeModal(true)}
            />
          </div>
        )}

        <CreateStakeModal
          show={showStakeModal}
          onClose={() => setShowStakeModal(false)}
          stakeSchema={stakeSchema}
          handleStakeSubmit={handleStakeSubmit}
          getQuote={getQuote}
          quoteData={quoteData}
          quoteError={quoteError}
          quoteLoading={quoteLoading}
          isLoading={isLoading}
          tradeType={tradeType}
        />


        {/* ✅ Sell Modal */}
        {/* <SellToCompanyModal sellModal={openSellModal} onClose={closeSellModal} />
         */}
         <SellToCompanyModal
  sellModal={sellModal}
  setSellModal={setSellModal}
  onClose={closeSellModal}
/>
      </div>
    </div>
  );
};
export default P2PModule;