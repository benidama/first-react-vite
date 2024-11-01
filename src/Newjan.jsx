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
      <P>
        now, {obje.age} and name {Object.values(obje)}
      </P>
      <p>
        I have {charg} and my favorite letter is {char}.
      </p>
    </div>
  );
};

export default Newjan;
