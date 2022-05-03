import React from "react";
import picture from "../assets/picture.png";
import work_process from "../assets/work-process.png";
import output from "../assets/output.png";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <section className="w-full h-screen flex flex-col gap-4 dark:text-slate-400 dark:bg-black">
      <div className="flex w-full h-12 justify-center mt-20">
        <h1 className="text-xl font-bold">วิธีการใช้งาน</h1>
      </div>

      <div className="flex flex-row h-full w-full gap-16 p-4">
        <div className="flex flex-col basis-1/3 rounded-xl justify-center items-center">
          <img src={picture} className="object-cover w-64 h-64" />
          <h1 className="text-xl font-bold">Prepare Information!</h1>
        </div>
        <div className="flex flex-col basis-1/3 rounded-xl justify-center items-center">
          <img src={work_process} className="object-cover w-64 h-64" />
          <h1 className="text-xl font-bold">Processing!</h1>
        </div>
        <div className="flex flex-col basis-1/3 rounded-xl justify-center items-center">
          <img src={output} className="object-cover w-64 h-64" />
          <h1 className="text-xl font-bold">
            Get your removal watermark image!
          </h1>
        </div>
      </div>
      <h3 className="flex justify-center text-xl">
        เว็ปไซต์นี้เป็นงานสำหรับรายวิชา Image Processing
      </h3>
      <div className="flex w-full h-12 justify-center mb-4">
        <NavLink to={"/Model1"}>
          <button className="flex p-4 bg-purple-400 rounded-xl items-center dark:bg-slate-900">
            เริ่มกันเลย!
          </button>
        </NavLink>
      </div>
    </section>
  );
}
