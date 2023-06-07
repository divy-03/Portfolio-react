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
  }, {threshold: 0.9} 
  );

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
    
    <div className='blank flex-row' style={{
      // margin: "20px",
      // backgroundImage: "linear-gradient(to right top, #ae95ff, rgb(210, 103, 117), rgb(36, 31, 62))" 
    }}
      >
      <span className='fade-right-fast hello' href="/">Hello </span> 
      <span className='fade-right-fast hello' href="/">World! </span><br/> 
      <span className='fade-right-fast hello' href="/">This </span> 
      <span className='fade-right-fast hello' href="/">Is </span> 
      <span className='fade-right-fast hello' href="/">My </span> 
      <span className='fade-right-fast hello' href="/">First </span> 
      <span className='fade-right-fast hello' href="/">Website </span> 
    </div>
  )
}

export default blank
