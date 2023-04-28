import "./App.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Swap from "./pages/Swap";
import Rewards from "./pages/Rewards";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Launchpad from "./pages/Launchpad";
import Leaderboard from "./pages/Leaderboard";
import Support from "./pages/Support";
import Language from "./pages/Language";
import Mobilemenu from "./components/Mobilemenu";
import { useEffect, useState } from "react";
import mobilerwd from "./assets/icon/mobileicon.svg";
import footermobile from "./assets/icon/footermobile.svg";
import { useMediaQuery } from "react-responsive";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";

function App() {
  // Mediaquery_________________________
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 768px)",
  });

  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = (e) => {
    console.log(e);
    setMenuOpen(!menuOpen);
  };

  // If menuopen is true and its face is height, automatically menuopen is false
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="overflow_div">
      {!menuOpen && <Header />}

      <Routes>
        {isDesktopOrLaptop ? (
          <Route path="/" element={!menuOpen && <Swap />} />
        ) : (
          <Route path="/" element={!menuOpen && <Homepage />} />
        )}
        <Route path="/swap" element={!menuOpen && <Swap />}></Route>
        <Route path="/rewards" element={!menuOpen && <Rewards />}></Route>
        <Route path="/products" element={!menuOpen && <Products />}></Route>
        <Route path="/launchpad" element={!menuOpen && <Launchpad />}></Route>
        <Route
          path="/leaderboard"
          element={!menuOpen && <Leaderboard />}
        ></Route>
        <Route path="/support" element={!menuOpen && <Support />}></Route>
        <Route path="/language" element={!menuOpen && <Language />}></Route>
        <Route path="/about" element={!menuOpen && <AboutUs />}></Route>
      </Routes>
      {menuOpen && <Mobilemenu setMenuOpen={setMenuOpen} />}
      {/* {!menuOpen && <Footer />} */}
      {<Footer />}

      <div className="mobile_rwd_white">
        <img src={footermobile} />
      </div>
      <div className="mobile_rwd" onClick={(e) => handleMenu(e)}>
        <img src={mobilerwd} />
      </div>
    </section>
  );
}

export default App;
