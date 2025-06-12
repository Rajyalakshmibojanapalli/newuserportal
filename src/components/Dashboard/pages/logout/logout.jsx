import React from "react";
import { LogOut } from "lucide-react";

const LogoutModal = ({ onCancel, onConfirm }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-sm rounded-xl shadow-xl px-6 py-8 text-center">
        <div className="flex flex-col items-center">
          <div className="bg-red-100 p-4 rounded-full mb-4">
            <LogOut size={36} className="text-red-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">
            Confirm Logout
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Are you sure you want to logout from your account?
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={onCancel}
              className="px-4 py-2 text-sm rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="px-4 py-2 text-sm rounded-md bg-red-600 text-white hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
