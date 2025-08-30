import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Service from "./pages/Service";
import Msme from "./pages/service/Msme";

import Contact from "./pages/Contact";
import Incometax from "./pages/calculator/Incometax";
import Gst from "./pages/calculator/Gst";
import Tds from "./pages/calculator/Tds";
import Netprofit from "./pages/calculator/Netprofit";
import Bookeeping from "./pages/service/Bookeeping";
import Audit from "./pages/service/Audit";
import TaxReturn from "./pages/service/TaxReturn";
import Payroll from "./pages/service/Payroll";
import Foreign from "./pages/service/Foreign";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/service" element={<Service />} />
        <Route path="/service/msme" element={<Msme />} />
        <Route path="/service/bookeeping" element={<Bookeeping />} />
        <Route path="/service/audit" element={<Audit />} />
        <Route path="/service/taxreturn" element={<TaxReturn />} />
        <Route path="/service/payroll" element={<Payroll />} />
        <Route path="/service/foreign" element={<Foreign />} />
        <Route path="/calculator/incometax" element={<Incometax />} />
        <Route path="/calculator/gst" element={<Gst />} />
        <Route path="/calculator/tds" element={<Tds />} />
        <Route path="/calculator/netprofit" element={<Netprofit />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
