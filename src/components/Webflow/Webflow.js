import React from "react";
import "./webflow.css";

function Webflow() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // console.log(entry);
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
  const fadeRightFast = document.querySelectorAll(".fade-right-fast");
  const fadeLeftSimple = document.querySelectorAll(".fade-left-simple");

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
  fadeLeftSimple.forEach((element) => {
    observer.observe(element);
  });
  return (
    <>
      <div className="sec-main flex-row">
        <div className="cont-rel">
          <div className="head flex-row">
            <span className="fade-up">This is my Website!</span>
          </div>
          <div className="box1 flex-row">
            <div className="text flex-col">
              <div className="fade-left">
                <span>This is a box</span>
              </div>
            <div className="line fade-left"></div>
              <div className="fade-right-fast">
                <span>This is also a box</span>
              </div>
            </div>
            <div className="cont-img fade-left-simple">
              <div className="img">
                <img src="./art1.jpeg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Webflow;
