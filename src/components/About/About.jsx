import React from "react";
import styles from "./About.module.css";

const About = () => {
  return <div>
    <div  className="">
    <h1 className={`text-center text-white mt-3 ${styles.about}`}>ABOUT US</h1>
    </div>
    <div className="container mt-5 pt-5 d-flex justify-content-around">
      <div>
        <div className={styles.migDiv}>
        <img className={styles.image} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Johnny_Depp_Jim_Jarmusch_Cannes_1995.jpg/170px-Johnny_Depp_Jim_Jarmusch_Cannes_1995.jpg" alt="" />
        </div>
      </div>
      <div className="col container">
          <h1 className={`mb-4 text-white ${styles.mainHeading}`}>JOHNSON'S ENTERTAINMENT</h1>
          <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non hic animi modi recusandae distinctio omnis sint, itaque, consectetur molestias laboriosam corporis debitis, eligendi porro eum veritatis magni doloribus cupiditate architecto!</p>
          <p className="text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At reprehenderit nulla ducimus earum error odio asperiores, eaque quae sunt blanditiis debitis libero distinctio esse porro dignissimos quisquam voluptatum ut similique recusandae quo ad atque est consequuntur qui. Et nemo aperiam laboriosam consectetur hic, cupiditate, corrupti magni, reiciendis explicabo culpa tempora?
          </p>
      </div>
    </div>
  </div>;
};

export default About;
