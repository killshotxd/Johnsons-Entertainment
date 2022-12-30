import React from "react";
import { useEffect } from "react";
import Char from "../../assets/CharBG.png";
import arrow from "../../assets/icons8-chevron-right-30 (1).png";
import curtain from "../../assets/curt.jpg";
import styles from "./Home.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const navigate = useNavigate();

  const navAdult = () => {
    navigate("/AdultApprehension");
  };

  const navChild = () => {
    navigate("/ChildrenBook");
  };

  const navNovel = () => {
    navigate("/Novels");
  };

  const navSpook = () => {
    navigate("/SpookMook");
  };

  const navAbout = () => {
    navigate("/About");
  };

  return (
    <>
      <div className={`container p-0 m-0 ${styles.firstContainer}`}>
        <div className="row">
          {/* IMAGE CHARACTER */}
          <div className={`col-5 ${styles.charCol}`}>
            <img
              className={styles.charImg}
              style={{ height: "100vh", background: "rgb(255 164 255)" }}
              src={Char}
              alt="character Img"
            />
          </div>
          {/* WINDOW COL */}
          <div data-aos="fade-left" className="col-7 mt-5">
            <div className="container">
              <div style={{ gap: "4rem" }} className="row">
                <div className="col ">
                  <div className={styles.photo}>
                    <img
                      className={styles.image}
                      style={{
                        height: "10rem",
                        width: "auto",
                        borderRadius: "10px",
                      }}
                      src={curtain}
                      alt=""
                    />

                    <div className={styles.middle}>
                      <p onClick={navAdult} className={styles.text}>
                        VISIT
                      </p>
                    </div>

                    <h3 className="text-center mt-2">Adult's Apprehension</h3>
                  </div>
                </div>

                <div className="col">
                  <div className={styles.photo}>
                    <img
                      className={styles.image}
                      style={{
                        height: "10rem",
                        width: "auto",
                        borderRadius: "10px",
                      }}
                      src={curtain}
                      alt=""
                    />

                    <div className={styles.middle}>
                      <p onClick={navChild} className={styles.text}>
                        VISIT
                      </p>
                    </div>

                    <h3 className="text-center mt-2">Children's Books</h3>
                  </div>
                </div>
              </div>
              <div style={{ gap: "4rem" }} className="row mt-4">
                <div className="col">
                  <div className={styles.photo}>
                    <img
                      className={styles.image}
                      style={{
                        height: "10rem",
                        width: "auto",
                        borderRadius: "10px",
                      }}
                      src={curtain}
                      alt=""
                    />

                    <div className={styles.middle}>
                      <p onClick={navNovel} className={styles.text}>
                        VISIT
                      </p>
                    </div>

                    <h3 className="text-center mt-2">Novels</h3>
                  </div>
                </div>
                <div className="col">
                  <div className={styles.photo}>
                    <img
                      className={styles.image}
                      style={{
                        height: "10rem",
                        width: "auto",
                        borderRadius: "10px",
                      }}
                      src={curtain}
                      alt=""
                    />

                    <div className={styles.middle}>
                      <p onClick={navSpook} className={styles.text}>
                        VISIT
                      </p>
                    </div>

                    <h3 className="text-center mt-2">Spook-A-Mook</h3>
                  </div>
                </div>
              </div>
            </div>
            {/* ABOUT COL */}

            <div className="container mt-5 text-center">
              <h3>
                <span>JOHNSON'S ENTERTAINMENT FOR YOUR ENJOYMENT</span>
              </h3>
            </div>

            <div
              className="container mt-3 mb-3 text-white p-3"
              style={{
                background: "purple",
                borderRadius: "30px",
                width: "max-content",
              }}
            >
              <h5
                style={{ cursor: "pointer" }}
                onClick={navAbout}
                className="text-center m-0 p-0"
              >
                About Johnson Entertainment{" "}
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className={`container p-0 m-0 h-100 ${styles.secondContainer}`}>
        <div className="row mt-5 w-100">
          <div className={`col ${styles.mobChar}`}>
            <img
              style={{ height: "40vh", background: "rgb(255 164 255)" }}
              src={Char}
              alt="character Img"
            />
          </div>
          <div className="col">
            <h2>Hello I am Johnny 👋!</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
              ipsa eos corporis officiis fugiat dolor aliquid cupiditate et
              blanditiis dicta.
            </p>
          </div>
        </div>

        <div
          data-aos="fade-left"
          className="col-7 mt-5 d-flex flex-column justify-content-center align-items-center m-auto w-auto"
        >
          <div className="container">
            <div style={{ gap: "4rem" }} className="row">
              <div className="col ">
                <div className={styles.photo}>
                  <img
                    className={styles.image}
                    style={{
                      height: "10rem",
                      width: "auto",
                      borderRadius: "10px",
                    }}
                    src={curtain}
                    alt=""
                  />

                  <div className={styles.middle}>
                    <p onClick={navAdult} className={styles.text}>
                      VISIT
                    </p>
                  </div>

                  <h3 className="text-center mt-2">Adult's Apprehension</h3>
                </div>
              </div>

              <div className="col">
                <div className={styles.photo}>
                  <img
                    className={styles.image}
                    style={{
                      height: "10rem",
                      width: "auto",
                      borderRadius: "10px",
                    }}
                    src={curtain}
                    alt=""
                  />

                  <div className={styles.middle}>
                    <p onClick={navChild} className={styles.text}>
                      VISIT
                    </p>
                  </div>

                  <h3 className="text-center mt-2">Children's Books</h3>
                </div>
              </div>
            </div>
            <div style={{ gap: "4rem" }} className="row mt-4">
              <div className="col">
                <div className={styles.photo}>
                  <img
                    className={styles.image}
                    style={{
                      height: "10rem",
                      width: "auto",
                      borderRadius: "10px",
                    }}
                    src={curtain}
                    alt=""
                  />

                  <div className={styles.middle}>
                    <p onClick={navNovel} className={styles.text}>
                      VISIT
                    </p>
                  </div>

                  <h3 className="text-center mt-2">Novels</h3>
                </div>
              </div>
              <div className="col">
                <div className={styles.photo}>
                  <img
                    className={styles.image}
                    style={{
                      height: "10rem",
                      width: "auto",
                      borderRadius: "10px",
                    }}
                    src={curtain}
                    alt=""
                  />

                  <div className={styles.middle}>
                    <p onClick={navSpook} className={styles.text}>
                      VISIT
                    </p>
                  </div>

                  <h3 className="text-center mt-2">Spook-A-Mook</h3>
                </div>
              </div>
            </div>
          </div>
          {/* ABOUT COL */}

          <div className="container mt-5 text-center">
            <h3>JOHNSON'S ENTERTAINMENT FOR YOUR ENJOYMENT</h3>
          </div>

          <div
            className="container mt-3 mb-3 text-white p-3"
            style={{
              background: "purple",
              borderRadius: "30px",
              width: "max-content",
            }}
          >
            <h5
              style={{ cursor: "pointer" }}
              onClick={navAbout}
              className="text-center m-0 p-0"
            >
              About Johnson Entertainment{" "}
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
