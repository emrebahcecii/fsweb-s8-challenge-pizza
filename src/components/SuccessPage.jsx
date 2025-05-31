import React from "react";
import Headertop from "./headertop/headertop";
import "./SuccessPage.css";
import Footer from "./footer/footer";

function SuccessPage() {
  return (
    <div className="fullContent">
      <div className="contentPage">
        <Headertop />
        <div className="contentdr">
          <p className="write">fırsatı kaçırma</p>
          <h1>SİPARİŞ ALINDI</h1>
          <p>Position Absolute Acı Pizza</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default SuccessPage;
