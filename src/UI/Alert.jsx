import React, { useContext } from "react";
import AlertContext from "../store/AlertContext";
import { FiAlertCircle } from "react-icons/fi";
import "./Alert.css";

const Alert = () => {
  const { alert } = useContext(AlertContext);

  return (
    <section>
      {alert !== null && (
        <div className="error-alert">
          <div>
            <FiAlertCircle size={"15px"} className="error-icon" />
          </div>

          <p>{alert.msg}</p>
        </div>
      )}
    </section>
  );
};

export default Alert;
