import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Weather from "./Weather";

const gzb = window.location.origin + "/assets/gzb.jpg"
function MyTown() {
  let navigate = useNavigate();
  return (
    <div align="center">
      <img width="360" height="270" src={gzb} />
      <h2>
      My Town is Ghaziabad, UP, India
      </h2>
      <br/>
      <h3>
        <p> Ghaziabad is a city in the Indian state of Uttar Pradesh and a part of the NCR. </p>
        <p> It is the administrative headquarters of Ghaziabad district </p>
        <p>and is the largest city in western Uttar Pradesh, with a population of 1,729,000.</p>
      </h3>
      <br/>
      <Weather />
    </div>
   
  );
}


export default MyTown;
