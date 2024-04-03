import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./state";
import { BasicDetails } from "./Steps/BasicDetails";
import { Education } from "./Steps/Education";
import { About } from "./Steps/About";
import { Confirm } from "./Steps/Confirm";
import { Stepper } from "./Steps/Stepper";

export const App = () => {
  return (
    <div className="App">
      <AppProvider>
        <Router>
          <Stepper />
          <Routes>
            <Route path="/" element={<BasicDetails />} />
            <Route path="/education" element={<Education />} />
            <Route path="/about" element={<About />} />
            <Route path="/confirm" element={<Confirm />} />
          </Routes>
        </Router>
      </AppProvider>
    </div>
  );
}

export default App;
