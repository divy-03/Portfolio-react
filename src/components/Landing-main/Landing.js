import React from 'react'
import './Landing.css'

function Landing(props) {
  return (
    <>
      <sec class="main">
        <div id="home" class={`sec-main${props.mode} flex-row`}>
            <div class="front-main">
                <p class="wlc">Welcome I'm</p>
                <p class="name">Divy Pathak's</p>
                <p class="pro">Front-end Web Developer</p>
                <p class="desc">Lorem ip    sum dolor sit amet consectetur adipisicing elit. Maiores culpa, beatae
                    aspernatur reiciendis obcaecati veniam nihil omnis ea alias deleniti cupiditate, neque nobis quam
                    qui tempora. Iure dolore hic saepe eius aliquid cumque vitae.</p>
            </div>
            <div class="snap">
                <img src="/snap_full.png" alt="" />
            </div>
        </div>
    </sec>
    </>
  )
}

export default Landing
