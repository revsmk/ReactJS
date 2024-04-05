import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./state";
import { Email } from "./Steps/Email";
import { Mobile } from "./Steps/Mobile";
import { WhatsApp } from "./Steps/WhatsApp";
import { Language } from "./Steps/Language";
import { Confirm } from "./Steps/Confirm";
import { Stepper } from "./Steps/Stepper";

export const App = () => {
  return (
    <div className="App">
      <AppProvider>
        <Router>
          <Stepper />
          <Routes>
            <Route path="/" element={<Email />} />
            <Route path="/mobile" element={<Mobile />} />
            <Route path="/whatsapp" element={<WhatsApp />} />
            <Route path="/language" element={<Language />} />
            <Route path="/confirm" element={<Confirm />} />
          </Routes>
        </Router>
      </AppProvider>
    </div>
  );
}

export default App;
