import React from "react";
import me from '../assets/about_me.jpg';

function About() {
  console.log(me);
  return <div align="center">
  <img width="600" height="400" src={me} />
  <h1>Hi, I am Shailesh</h1>
  <br/>
  <h2>
    <p>I have worked in the data engineering</p>
    <p> space for roughly two years.</p>
  </h2>
  <br/>
  <h3>
    <p>I am a student at SMU pursuing the graduate course MCDA</p>
    <p>as I wanted to have more knowledge in this field.</p>
    <p>I am excited to learn a lot of new things.</p>
  </h3>
  </div>;
}

export default About;
