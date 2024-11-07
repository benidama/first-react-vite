import React from "react";
const Arrays = () => {
  const arrayReact = ["Martin", "John", "Peter", "Quintus"];
  const remove = arrayReact.splice(2, 1, "Emmy", "Kanuma");
  const flating = [
    ["Paul", "Ntaki", "Gad"],
    ["Yuhi", "Claude"],
  ];
  const foreac = arrayReact.forEach((el) => el + "ok");
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
        quisquam laboriosam consequatur voluptas, placeat architecto in, quos
        repellat at eaque officia dignissimos? Quasi delectus vero eius.
      </p>
      <br />
      <p>
        This is the list of my friends:
        <span className="text-blue-500">{map}</span>
      </p>
      <br />
      <p className="text-xs w-[650px]">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
        obcaecati laudantium aperiam. Eos expedita, dolore totam neque molestias
        et itaque? Iure sed laboriosam reiciendis necessitatibus eum architecto
        odio ipsa magnam consectetur nobis?
      </p>
    </div>
  );
};

export default Arrays;
