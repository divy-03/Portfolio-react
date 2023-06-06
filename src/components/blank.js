import React from 'react'

function blank() {
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

  fadeRight.forEach((element) => {
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
    
    <div className='blank flex-col-s' style={{
      // margin: "20px",
      // backgroundImage: "linear-gradient(to right top, #ae95ff, rgb(210, 103, 117), rgb(36, 31, 62))" 
    }}
      >
      <a className='fade-up hello' href="/">Hello World!</a> 
    </div>
  )
}

export default blank
