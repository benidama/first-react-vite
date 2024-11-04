import React from "react";

const Arrays = () => {
  const arrayReact = ["Martin", "John", "Peter", "Quintus"];
  const remove = arrayReact.splice(2, 1, "Emmy", "Kanuma");
  const flating = [
    ["Paul", "Ntaki", "Gad"],
    ["Yuhi", "Claude"],
  ];

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
      <p>Lorem ipsum dolor sit amet {remove}.</p>
    </div>
  );
};

export default Arrays;
