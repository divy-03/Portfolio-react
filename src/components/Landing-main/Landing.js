import React from "react";
import "./Landing.css";

function Landing(props) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  const fadeRight = document.querySelectorAll(".fade-right");
  const fadeLeft = document.querySelectorAll(".fade-left");
  const fadeUp = document.querySelectorAll(".fade-up");
  const fadeDown = document.querySelectorAll(".fade-down");
  const fadeRightFast = document.querySelectorAll('.fade-right-fast');

  fadeRight.forEach((element) => {
    observer.observe(element);
  });
  fadeRightFast.forEach((element) => {
    observer.observe(element);
  });
  fadeLeft.forEach((element) => {
    observer.observe(element);
  });
  fadeUp.forEach((element) => {
    observer.observe(element);
  });
  fadeDown.forEach((element) => {
    observer.observe(element);
  });

  return (
    <>
      <section className="main">
        <div id="home" className={`sec-main${props.mode} flex-row`}>
          <div className="front-main">
            <div className="wlc"><p className="fade-right">Welcome I'm</p></div>
            <div className="name"><p className="fade-right">Divy Pathak's</p></div>
            <div className="pro">Front-end Web Developer</div>
            <div className="desc">
              Lorem ip sum dolor sit amet consectetur adipisicing elit. Maiores
              culpa, beatae aspernatur reiciendis obcaecati veniam nihil omnis
              ea alias deleniti cupiditate, neque nobis quam qui tempora. Iure
              dolore hic saepe eius aliquid cumque vitae.
            </div>
          </div>
          <div className={`snap${props.mode} fade-left`}>
            <img src="/snap_full.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;
