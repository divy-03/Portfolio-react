import React from "react";
import "./Landing.css";

function Landing(props) {
  return (
    <>
      <section className="main">
        <div id="home" className={`sec-main${props.mode} flex-row`}>
          <div className="front-main">
            <span className="wlc">Welcome I'm</span>
            <p className="name">Divy Pathak's</p>
            <p className="pro">Front-end Web Developer</p>
            <p className="desc">
              Lorem ip sum dolor sit amet consectetur adipisicing elit. Maiores
              culpa, beatae aspernatur reiciendis obcaecati veniam nihil omnis
              ea alias deleniti cupiditate, neque nobis quam qui tempora. Iure
              dolore hic saepe eius aliquid cumque vitae.
            </p>
          </div>
          <div className={`snap${props.mode}`}>
            <img src="/snap_full.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;
