import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

export default function Model1() {
  //   const [image_path, setFile] = useState(null);

  const [data, setData] = useState({
    image_path: null,
    mask_path: null,
    INPUT_DEPTH: 32,
    LR: 0.01,
    TRAINING_STEPS: 1000,
    SHOW_STEP: 50,
    REG_NOISE: 0.03,
    MAX_DIM: 128,
  });

  const handleInput = (text) => (e) => {
    setData({ ...data, [text]: e.target.value });
    console.log(data);
  };

  const showPreview = (file) => (event) => {
    if (event.target.files.length > 0) {
      var src = URL.createObjectURL(event.target.files[0]);
      var preview = document.getElementById("preview");
      preview.src = src;
      preview.style.display = "block";
      //   setFile(event.target.files[0]);
      data.image_path = event.target.files[0];
    }
  };

  const showMask = (file) => (event) => {
    if (event.target.files.length > 0) {
      var src = URL.createObjectURL(event.target.files[0]);
      var preview = document.getElementById("preview-mask");
      preview.src = src;
      preview.style.display = "block";
      //   setFile(event.target.files[0]);

      data.mask_path = event.target.files[0];
    }
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const requestdata = async () => {
    
    
    // Base64
    data.image_path = await toBase64(data.image_path);
    data.mask_path = await toBase64(data.mask_path);
    data.image_path = String(data.image_path).replace(
      /^data:image\/[a-z]+;base64,/,
      ""
    );
    data.mask_path = String(data.mask_path).replace(
        /^data:image\/[a-z]+;base64,/,
        ""
      );


    // Post
    const res = await axios.post(`http://localhost:5000/Model1/`, {
      image_path: data.image_path,
      mask_path: data.mask_path,
      INPUT_DEPTH: data.INPUT_DEPTH,
      LR: data.LR,
      TRAINING_STEPS: data.TRAINING_STEPS,
      SHOW_STEP: data.SHOW_STEP,
      REG_NOISE: data.REG_NOISE,
      MAX_DIM: data.MAX_DIM,
    });

    console.log(res.data);
  };

  return (
    <div className="w-full h-screen pt-16 text-black dark:bg-black dark:text-slate-400">
      <div className="flex flex-col h-full w-full justify-center items-center">
        <div className="flex flex-col pt-16 items-center">
          <h1 className="text-xl font-bold">Model 1</h1>
          <h3 className="font-bold">
            Github :{" "}
            <a
              href="https://github.com/braindotai/Watermark-Removal-Pytorch"
              target={"_blank"}
            >
              Watermark Removal using Deep Image Priors with Pytorch
            </a>
          </h3>
        </div>
        {/* Section Pre Process! */}
        <div className="flex flex-row h-full w-full justify-center items-center gap-12 font-bold">
          {/* Input */}
          <div className="flex flex-col gap-4">
            <h1>INPUT VARIABLES.</h1>
            <div className="flex flex-row justify-between items-center">
              <span className="">INPUT_DEPTH</span>
              <input
                type={"number"}
                placeholder={data.INPUT_DEPTH}
                value={data.INPUT_DEPTH}
                onChange={handleInput("INPUT_DEPTH")}
                className="rounded p-2 bg-gray-200 dark:bg-slate-700"
              ></input>
            </div>

            <div className="flex flex-row justify-between items-center">
              <span>LR</span>
              <input
                type={"number"}
                placeholder={data.LR}
                value={data.LR}
                onChange={handleInput("LR")}
                className="rounded p-2 bg-gray-200 dark:bg-slate-700"
              ></input>
            </div>

            <div className="flex flex-row justify-between items-center gap-2">
              <span>TRAINING_STEPS</span>
              <input
                type={"number"}
                placeholder={data.TRAINING_STEPS}
                value={data.TRAINING_STEPS}
                onChange={handleInput("TRAINING_STEPS")}
                className="rounded p-2 bg-gray-200 dark:bg-slate-700"
              ></input>
            </div>

            <div className="flex flex-row justify-between items-center">
              <span>SHOW_STEP</span>
              <input
                type={"number"}
                placeholder={data.SHOW_STEP}
                value={data.SHOW_STEP}
                onChange={handleInput("SHOW_STEP")}
                className="rounded p-2 bg-gray-200 dark:bg-slate-700"
              ></input>
            </div>

            <div className="flex flex-row justify-between items-center">
              <span>REG_NOISE</span>
              <input
                type={"number"}
                placeholder={data.REG_NOISE}
                value={data.REG_NOISE}
                onChange={handleInput("REG_NOISE")}
                className="rounded p-2 bg-gray-200 dark:bg-slate-700"
              ></input>
            </div>

            <div className="flex flex-row justify-between items-center">
              <span>MAX_DIM</span>
              <input
                type={"number"}
                placeholder={data.MAX_DIM}
                value={data.MAX_DIM}
                onChange={handleInput("MAX_DIM")}
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
          {/* Mask */}
          <div className="flex">
            <label class="flex flex-col w-full h-64 pt-16">
              <div class="flex flex-col items-center justify-center pt-7">
                <img
                  id="preview-mask"
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
                  Select a mask to remove watermark.
                </p>
              </div>
              <input
                id="image-upload"
                type="file"
                class="opacity-0"
                accept="image/*"
                onChange={showMask(this)}
              />
            </label>
          </div>
        </div>
        <button
          className="flex p-4 mb-16 bg-purple-400 rounded-xl items-center dark:bg-slate-900"
          onClick={requestdata}
        >
          ดำเนินการ!
        </button>
      </div>
    </div>
  );
}
