import React from "react";
import Headertop from "./headertop/headertop";
import "./SuccessPage.css";
import Footer from "./footer/footer";

function SuccessPage({ orderData }) {
  const { size, dough, malzemeler, ingredientCost, totalCost } =
    orderData || {};

  return (
    <div className="fullContent">
      <div className="contentPage">
        <Headertop />
        <div className="contentdr">
          <p className="write">fırsatı kaçırma</p>
          <h1>SİPARİŞ ALINDI</h1>
          <p>Position Absolute Acı Pizza</p>
          <p>Seçilen Boyut: {size}</p>
          <p>Hamur Kalınlığı: {dough}</p>

          <p>
            <strong>Seçilen Malzemeler:</strong>{" "}
            {malzemeler && malzemeler.length > 0
              ? malzemeler.join(", ")
              : "Malzeme seçilmedi"}
          </p>
          <div className="bordertp">
            <h1>Sipariş Toplamı</h1>
            <p>
              Seçimler: <span>{ingredientCost?.toFixed(2)}₺</span>
            </p>
            <p>
              Toplam: <span>{totalCost?.toFixed(2)}₺</span>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default SuccessPage;
