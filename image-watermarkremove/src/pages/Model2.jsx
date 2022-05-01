import React, { useEffect, useRef, useState } from "react";

export default function Model2() {
  useEffect(() => {}, []);

  const showPreview = (file) => (event) => {
    if (event.target.files.length > 0) {
      var src = URL.createObjectURL(event.target.files[0]);
      var preview = document.getElementById("preview");
      preview.src = src;
      preview.style.display = "block";
      //   setFile(event.target.files[0]);
      
    }
  };

  return (
    <div className="w-full h-screen pt-16 text-black dark:bg-black dark:text-slate-400">
      <div className="flex flex-col h-full w-full justify-center items-center">
        <div className="flex flex-col pt-16 items-center">
          <h1 className="text-xl font-bold">Model 2</h1>
          <h3 className="font-bold">
            Github :{" "}
            <a
              href="https://github.com/marcbelmont/cnn-watermark-removal"
              target={"_blank"}
            >
              Cnn-watermark-removal
            </a>
          </h3>
        </div>
        {/* Section Pre Process! */}
        <div className="flex flex-row h-full w-full justify-center items-center gap-12 font-bold">
          {/* Input */}
          <div className="flex flex-col gap-4 h-full justify-items-start mt-16">
            <h1>INPUT VARIABLES.</h1>
            <div className="flex flex-row justify-between items-center">
              <span className="">BATCH_SIZE</span>
              <input
                type={"text"}
                placeholder="32"
                className="rounded p-2 bg-gray-200 dark:bg-slate-700"
              ></input>
            </div>

            <div className="flex flex-row justify-between items-center gap-2">
              <span>Learning_Rate</span>
              <input
                type={"text"}
                placeholder="0.005"
                className="rounded p-2 bg-gray-200 dark:bg-slate-700"
              ></input>
            </div>
          </div>

          {/* Image */}
          <div className="flex">
            <label class="flex flex-col w-full h-64 pt-16">
              <div class="flex flex-col items-center justify-center pt-7">
                <img
                  id="preview"
                  className="absolute object-cover rounded w-72 h-72 border-4  border-dashed dark:border-slate-400 "
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-12 h-12 text-gray-400 group-hover:text-gray-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                  Select a photo to remove watermark.
                </p>
              </div>
              <input
                id="image-upload"
                type="file"
                class="opacity-0"
                accept="image/*"
                onChange={showPreview(this)}
              />
            </label>
          </div>
        </div>
        <button className="flex p-4 mb-16 bg-purple-400 rounded-xl items-center dark:bg-slate-900">
          ดำเนินการ!
        </button>
      </div>
    </div>
  );
}
