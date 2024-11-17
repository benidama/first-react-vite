import React from "react";

function List() {
  return <li>I have {prp.age} ages</li>;
}

const Desonee = () => {
  const destru = [23, 3, 56, 13];

  return (
    <div>
      <h1>I have 67yrs old and 6 children.</h1>

      <p>
        This is why we are here to tell you all about us & to know how you like
        our products on the market especially this modern market.
      </p>
      <button onClick={() => alert("Welcome")}>Click me</button>
      <ul>
        {destru.map((ag) => (
          <List age={ag} />
        ))}
      </ul>
    </div>
  );
};

export default Desonee;
