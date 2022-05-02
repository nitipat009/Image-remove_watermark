import React, { useEffect, useState } from "react";
import Membercard from "../components/Membercard";
export default function Aboutus() {
  const data = [
    {
      studentid: 62010494,
      name: "Nitipat Boongate",
      img: "https://media.discordapp.net/attachments/706113661986406480/967929783503704144/Artboard_5.png?width=503&height=670",
      facebook: "https://www.facebook.com/belivepooh/",
    },
    {
      studentid: 62010496,
      name: "Nitipoom Klaynium",
      img: "https://media.discordapp.net/attachments/706113661986406480/967930295024246854/unknown.png?width=475&height=670",
      facebook: "https://www.facebook.com/KuyPure",
    },
  ];

  return (
  <div className="flex flex-row justify-center items-center w-full h-screen gap-12 dark:bg-black">
    {data.map((e) => {
        return <Membercard {...e}/>
    })}    
  </div>
  );
}
