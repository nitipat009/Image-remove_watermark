import React from "react";
import facebook from '../assets/facebook.png'
export default function Membercard(props){


    return(
        <div class="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg dark:bg-slate-800 dark:text-white">
				<div class="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40 dark:border-gray-900 ">
					<img src={props.img}
						 alt=""
						 class="h-full w-full object-cover"/>
				</div>

				<h2 class="mt-4 font-bold text-xl">{props.name}</h2>
				<h6 class="mt-2 text-sm font-medium">Founder</h6>

				<p class="text-xs text-gray-500 text-center mt-3">
					{props.studentid}
				</p>

				<ul class="flex flex-row mt-4 space-x-2">
					<li>
						<a href={props.facebook} target="_blank" class="flex items-center justify-center h-8 w-8 rounded-full text-gray-800">
							<img src={facebook} className="object-cover"></img>
						</a>
					</li>
				</ul>
		</div>
    )
}