import { useLocation } from "react-router-dom";
 
export const Stepper = () => {
  const location = useLocation();
 
  const getLinkClass = (path) => {
    return (
      "nav-link disabled " + (path === location.pathname ? "active" : undefined)
    );
  };
 
  return (
    <nav className="stepper navbar navbar-expand-lg">
        <div className="navbar-collapse collapse">
            <ol className="navbar-nav">
                <li className="step nav-item">
                    <span className={getLinkClass("/")}>Email</span>
                </li>
                <li className="step nav-item">
                    <span className={getLinkClass("/mobile")}>Mobile</span>
                </li>
                <li className="step nav-item">
                    <span className={getLinkClass("/whatsapp")}>WhatsApp</span>
                </li>
                <li className="step nav-item">
                    <span className={getLinkClass("/language")}>Language</span>
                </li>
                <li className="step nav-item">
                    <span className={getLinkClass("/confirm")}>Confirm</span>
                </li>
            </ol>
        </div>
    </nav>
  );
};