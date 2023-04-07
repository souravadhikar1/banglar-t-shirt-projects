import React from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import "./Grandps.css";

const Grandpa = () => {
  const ring = "diamond";
  return (
    <div className="grandpa">
      <h2>Grand pa</h2>
      <section className="flex">
        <Father ring={ring}></Father>
        <Uncle></Uncle>
        <Aunty ring={ring}></Aunty>
      </section>
    </div>
  );
};

export default Grandpa;
<h2>Grand pa</h2>;
