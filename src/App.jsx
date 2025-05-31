import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PizzaOrderPage from "./components/PizzaOrderPage";
import SuccessPage from "./components/SuccessPage";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [orderData, setOrderData] = useState(null);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Main />
              <Footer />
            </>
          }
        />
        <Route
          path="/order"
          element={<PizzaOrderPage setOrderData={setOrderData} />}
        />
        <Route
          path="/success"
          element={<SuccessPage orderData={orderData} />}
        />
      </Routes>
    </Router>
  );
}
export default App;
