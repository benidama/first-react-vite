import React from "react";

const Newjan = () => {
  const obje = {
    name: "John",
    age: 34,
    hope: "playing",
    multiple: function () {
      this.age + " " + this.hope;
    },
  };

  let text = "HELLO WORLD";
  let char = text.charAt(0);
  let charg = text.charCodeAt(0);
  return (
    <div>
      <h1 className="text-blue-700">
        My name is {obje.name} and I am age is {obje.age}. My name now was
        deleted {delete obje.name}.
      </h1>
      <p>
        now, {obje.age} and name {Object.values(obje)}
      </p>
      <p>
        I have {charg} and my favorite letter is {char}.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
        iste! Atque ut odit eos corrupti repudiandae id, mollitia beatae culpa!
        Deleniti, ullam? Consequatur!
      </p>
    </div>
  );
};

export default Newjan;
