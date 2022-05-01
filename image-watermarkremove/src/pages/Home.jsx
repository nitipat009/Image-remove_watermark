import React from "react";

export default function Home() {
  return (
    <section className="w-full h-screen flex flex-col gap-4 dark:text-slate-400 dark:bg-black">
      <div className="flex w-full h-12 justify-center mt-20">
        <h1 className="text-xl font-bold">วิธีการใช้งาน</h1>
      </div>

      <div className="flex flex-row h-full w-full gap-16 p-4">
        <div className="flex  bg-black basis-1/3 rounded-xl"></div>
        <div className="flex  bg-yellow-200 basis-1/3 rounded-xl"></div>
        <div className="flex  bg-green-100 basis-1/3 rounded-xl"></div>
      </div>
      <h3 className="flex justify-center text-xl">เว็ปไซต์นี้เป็นงานสำหรับรายวิชา Image Processing</h3>
      <div className="flex w-full h-12 justify-center mb-4">
        <button className="flex p-4 bg-purple-400 rounded-xl items-center dark:bg-slate-900">
          เริ่มกันเลย!
        </button>
      </div>
    </section>
  );
}
