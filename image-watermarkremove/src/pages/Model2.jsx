import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { toBase64 } from "../helpers/tobase64";

export default function Model2() {
  useEffect(() => {}, []);


  const [image_result, setImage_result] = useState(false);

  const [data, setData] = useState({
    image_path: null,
    mask_path: null,
    result : ""
  });

  const handleInput = (text) => (e) => {
    setData({ ...data, [text]: e.target.value });
  };

  const showPreview = (file) => (event) => {
    if (event.target.files.length > 0) {
      var src = URL.createObjectURL(event.target.files[0]);
      var preview = document.getElementById("preview");
      preview.src = src;
      preview.style.display = "block";
      data.image_path = event.target.files[0];
    }
  };

  const showMask = (file) => (event) => {
    if (event.target.files.length > 0) {
      var src = URL.createObjectURL(event.target.files[0]);
      var preview = document.getElementById("preview-mask");
      preview.src = src;
      preview.style.display = "block";
      data.mask_path = event.target.files[0];
    }
  };

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

    const req = async () => {
      const res = await axios.post(`http://localhost:5000/Model2/`, {
        image_path: data.image_path,
        mask_path: data.mask_path,
      });
      
      data.result = res.data.image;
      setImage_result(true);
      return res
    };

    toast.promise(req, {
      pending: "Pending...",
      error: "Error",
      success: "Success",
    });
    
  };



  const handleback = () => {
    setImage_result(false);
    data.result = ""
  };


  return (
    <div className="w-full h-screen pt-16 text-black dark:bg-black dark:text-slate-400">
      <div className="flex flex-col h-full w-full justify-center items-center">
        <div className="flex flex-col pt-16 items-center">
          <h1 className="text-xl font-bold">Model 2</h1>
          <h3 className="font-bold">
            Github :{" "}
            <a
              href="https://github.com/ayulockin/deepimageinpainting"
              target={"_blank"}
            >
              Deep Image Inpainting using UNET
            </a>
          </h3>
        </div>
        {/* Section Pre Process! */}
        <div className="flex flex-row h-full w-full justify-center items-center gap-12 font-bold">
          {/* Input
          <div className="flex flex-col gap-4 h-full justify-center">
            <h1>INPUT VARIABLES.</h1>
            <div className="flex flex-row justify-between items-center">
              <span className="">BATCH_SIZE</span>
              <input
                type={"number"}
                placeholder={data.BATCH_SIZE}
                value={data.BATCH_SIZE}
                onChange={handleInput("BATCH_SIZE")}
                className="rounded p-2 bg-gray-200 dark:bg-slate-700"
              ></input>
            </div>

            <div className="flex flex-row justify-between items-center gap-2">
              <span>LEARNING_RATE</span>
              <input
                type={"number"}
                placeholder={data.LEARNING_RATE}
                value={data.LEARNING_RATE}
                onChange={handleInput("LEARNING_RATE")}
                className="rounded p-2 bg-gray-200 dark:bg-slate-700"
              ></input>
            </div>
          </div> */}
          {!image_result && (<>
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
          </>)}
            

          {image_result && (
            <>
              <div className="flex w-full h-1/2 justify-center">
                <img className="object-cover" src={data.result}></img>
              </div>
            </>
          )}
        </div>
        <button
          className="flex p-4 mb-16 bg-purple-400 rounded-xl items-center dark:bg-slate-900"
          onClick={!image_result ? requestdata : handleback}
        >
          {!image_result ? "ดำเนินการ!" : "ย้อนกลับ"}
        </button>
      </div>
    </div>
  );
}
