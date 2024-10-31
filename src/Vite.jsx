import React from "react";
import Newjan from "./Newjan";

const Vite = () => {
  return (
    <div className="flex-col flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-3">
        <h2 className="text-cyan-500 text-3xl">
          This is my first react vite with tailwind
        </h2>
        <p className="w-[350px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio,
          itaque. Aut autem magnam molestias quis!
        </p>

        <p className="text-xs text-center text-orange-700 w-[430px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          expedita fugiat illum excepturi asperiores quia dicta amet, suscipit
          iusto consectetur inventore velit optio rerum mollitia dolorum
          pariatur ipsum repellat aliquam libero quos commodi? Possimus.
        </p>
      </div>
      <h3>This is my first practice about react vite with tailwind</h3>
      <br />
      <Newjan />
      <br />
      <p className="w-[500px] text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus,
        enim! Aut ut ratione dignissimos, animi mollitia nam reiciendis et enim
        harum tempore asperiores, necessitatibus modi nobis quae sit perferendis
        unde temporibus aliquam, corporis consectetur obcaecati. Ipsa at
        necessitatibus hic dicta voluptatem aspernatur ipsam quam sed?
      </p>
    </div>
  );
};

export default Vite;
