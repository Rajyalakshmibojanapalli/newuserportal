import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

import digiLocker from "../../src/assets/digilockermodel.svg";
import Loader from "./Loader";

/**
 * DigiLocker Modal Component
 * @param {*} { show, onHide, onClickDigiLocker }
 * @return {*}
 */
function DigiLockerModal({ show, onHide, onClickDigiLocker }) {
  const [staticLoading, setStaticLoading] = useState(false);

  /**
   * This method is used to navigate to digiLocker when clicked on the image
   */
  const onClickDigiLockerImage = () => {
    setStaticLoading(true);
    onClickDigiLocker();
    setStaticLoading(false);
  };

  return (
    <Modal
      show={show}
      centered
      backdrop="static"
      keyboard={false}
      onHide={onHide}
      className="paymentModal"
    >
      <Modal.Header className="d-flex justify-content-between title">
        <Modal.Title>
          <h5 className="m-0">KYC Verification</h5>
        </Modal.Title>
        <Link
          to="/home"
          style={{
            textDecoration: "none",
            fontSize: "18px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={{ fill: "#fff" }}
          >
            <path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path>
          </svg>
        </Link>
      </Modal.Header>
      <Modal.Body style={{ fontSize: "14px", textWrap: "wrap" }}>
        <div className="container text-center">
          <h6>
            Verify your KYC with DigiLocker{" "}
            <span className="text-danger"> *</span>
          </h6>
          <button
            className="bg-transparent border-0"
            onClick={onClickDigiLockerImage}
          >
            <img
              src={digiLocker}
              alt="digiLockerIcon"
              className="img-fluid py-2"
              style={{ width: "120px", height: "120px" }}
            />
          </button>
        </div>
      </Modal.Body>
      {staticLoading && <Loader />}
    </Modal>
  );
}

/**
 */
DigiLockerModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  onClickDigiLocker: PropTypes.func.isRequired,
};

export default DigiLockerModal;
