import React from "react";
import memoriesCSS from "./../Memories/Memories.module.css";

import MemoriesImg1 from "./../../assets/travelport1.jpg";
import MemoriesImg2 from "./../../assets/travelport2.jpg";
import MemoriesImg3 from "./../../assets/travelport3.jpg";
import MemoriesImg4 from "./../../assets/travelport4.jpg";
import MemoriesImg5 from "./../../assets/travelport5.jpg";
import MemoriesImg6 from "./../../assets/travelport6.jpg";

function Memories() {
  return (
    <div className={`${memoriesCSS.Memories_wrapper} section`}>
      <div className={memoriesCSS.MemoriesCard}>
        <img src={MemoriesImg1} alt="Memories-img" />

        <div className={memoriesCSS.content}>
          <h3>Small Groups Departures</h3>
          <a href="#">View Tour</a>
        </div>
      </div>
      <div className={memoriesCSS.MemoriesCard}>
        <img src={MemoriesImg2} alt="Memories-img" />

        <div className={memoriesCSS.content}>
          <h3>Affordable Dreams</h3>
          <a href="#">View Tour</a>
        </div>
      </div>
      <div className={memoriesCSS.MemoriesCard}>
        <img src={MemoriesImg3} alt="Memories-img" />

        <div className={memoriesCSS.content}>
          <h3>Undiscover Tours</h3>
          <a href="#">View Tour</a>
        </div>
      </div>
      <div className={memoriesCSS.MemoriesCard}>
        <img src={MemoriesImg4} alt="Memories-img" />

        <div className={memoriesCSS.content}>
          <h3>Let us plan Your Journey</h3>
          <a href="#">View Tour</a>
        </div>
      </div>
      <div className={memoriesCSS.MemoriesCard}>
        <img src={MemoriesImg5} alt="Memories-img" />

        <div className={memoriesCSS.content}>
          <h3>Religious Tours</h3>
          <a href="#">View Tour</a>
        </div>
      </div>
      <div className={memoriesCSS.MemoriesCard}>
        <img src={MemoriesImg6} alt="Memories-img" />

        <div className={memoriesCSS.content}>
          <h3>Solo Travel</h3>
          <a href="#">View Tour</a>
        </div>
      </div>
    </div>
  );
}

export default Memories;
