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
        <Route path="/order" element={<PizzaOrderPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
}

export default App;
