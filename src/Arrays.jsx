import React from "react";

const Arrays = () => {
  const arrayReact = ["Martin", "John", "Peter", "Quintus"];
  const flating = [
    ["Paul", "Ntaki", "Gad"],
    ["Yuhi", "Claude"],
  ];
  arrayReact[4] = "Justine";
  return (
    <div>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <p className="text-orange-400">
        Hello world, my name is {arrayReact[3]} and I have {arrayReact.length}{" "}
        children
      </p>
      <h3>
        My name is {flating[1][1]} and my brothers are{" "}
        {flating.flat().join(",")}.
      </h3>
    </div>
  );
};

export default Arrays;
