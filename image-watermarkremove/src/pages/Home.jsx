import React from "react";

export default function Home() {
  return (
    <section className="w-full h-screen flex flex-col">
      <div className="flex w-full h-12 justify-center mt-20">
        <h1>วิธีการใช้งาน</h1>
      </div>

      <div className="flex flex-row h-full w-full gap-16 p-4">
        <div className="flex  bg-black basis-1/3 rounded-xl"></div>
        <div className="flex  bg-yellow-200 basis-1/3 rounded-xl"></div>
        <div className="flex  bg-green-100 basis-1/3 rounded-xl"></div>
      </div>
      <div className="flex w-full h-12 justify-center">
        <button className="flex p-4 bg-purple-400 rounded-xl items-center">
          เริ่มกันเลย!
        </button>
      </div>
    </section>
  );
}
