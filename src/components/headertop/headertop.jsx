import React from "react";
import "./headertop.css";
import logo from "../../assets/logos/logo.svg";

function Headertop() {
  return (
    <header className="order-header">
      <img src={logo} alt="Logo" />
      <p>
        Anasayfa-<strong>Sipariş Oluştur</strong>
      </p>
    </header>
  );
}

export default Headertop;
