import React from "react";

function Navbar() {
  return (
    <div className="absolute flex flex-row w-full h-16 items-center font-bold bg-purple-400 pr-4 pl-4">
      <div className="flex flex-row w-full">
        <h1 className="w-full text-3xl">ชิงช้าจ้า...Remove watermark image</h1>
        <div className="flex flex-row w-full text-xl justify-end m-auto gap-24">
          <h3 className="hover:bg-white hover:rounded-xl p-2">Model 1</h3>
          <h3 className="hover:bg-white hover:rounded-xl p-2">Model 2</h3>
          <h3 className="hover:bg-white hover:rounded-xl p-2">About Us!</h3>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
