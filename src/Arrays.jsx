import React from "react";
const Arrays = () => {
  const arrayReact = ["Martin", "John", "Peter", "Quintus"];
  const remove = arrayReact.splice(2, 1, "Emmy", "Kanuma");
  const flating = [
    ["Paul", "Ntaki", "Gad"],
    ["Yuhi", "Claude"],
  ];
  const foreac = arrayReact.forEach((el, yu, ko) => el + "ok");
  const map = arrayReact.map((f) => <p>{f}</p>);
  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <p className="text-orange-400">
        Hello world, my name is {arrayReact[3]} and I have {arrayReact.length}{" "}
        children
      </p>
      <p>{foreac}</p>
      <h3>
        My name is {flating[1][1]} and my brothers are{" "}
        {flating.flat().join(",")}.
      </h3>
      <p>Lorem ipsum dolor sit amet {remove}.</p>
      <h1>How do you do my friends?</h1>
      <p className="text-xs w-[630px] text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta impedit
        cupiditate reiciendis repellendus dolores quibusdam recusandae. Officiis
        quisquam laboriosam repellat at eaque officia dignissimos? Quasi
        delectus vero eius.
      </p>
      <br />
      <p>
        <span className="text-blue-500">{map}</span>
      </p>
      <br />
      <p className="text-xs w-[650px]">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
        obcaecati laudantium aperiam. Eos expedita, dolore totam neque molestias
        et itaque? Iure sed laboriosam reiciendis necessitatibus eum architecto
        odio ipsa magnam consectetur nobis?
      </p>
      <br />
      <p className="text-blue-600 w-[700px]">
        Hello my boys, I love you all from youngest to oldest. My objective is
        to make my village a very biggest one in the country, but I need your
        advice's and I hope everything will be ok! That is why I need everyone
        to bring his/her idea.
      </p>
    </div>
  );
};

export default Arrays;
