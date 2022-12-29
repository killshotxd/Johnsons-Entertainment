import React from "react";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
const Header = () => {

  const navigate = useNavigate();

  const navHome = () => {
    navigate("/")
  }

  return (
    <div className={` shadow  ${styles.head}`}>
      <div>
        <h5 style={{ cursor: "pointer" }}
            onClick={navHome}
           className="text-white">
          JOHNSON'S ENTERTAINMENT
        </h5>
      </div>
      {/* <div className={` d-flex align-items-center ${styles.navTag}  `}>
        <p className="m-0 p-0 ">Contact</p>
        <p className="m-0 p-0 ">About Us</p>
      </div> */}
    </div>
  );
};

export default Header;
