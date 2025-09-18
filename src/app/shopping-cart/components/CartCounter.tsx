"use client";

import { useState } from "react";

interface Props {
 count?: number;
}

export const CartCounter = ({ count = 0 }: Props) => {
 const [counter, setCounter] = useState<number>(count);

 const incrementOrDecrement = (n: number) => {
  setCounter((prev) => (prev += n));
 };

 return (
  <>
   <span className="text-9xl">{counter}</span>

   <div className="flex">
    <button
     onClick={() => incrementOrDecrement(-1)}
     className="flex justify-center items-center text-amber-50 bg-gray-900 rounded-md hover:bg-gray-600 p-2 mr-2 transition-all w-[100px] cursor-pointer"
    >
     -1
    </button>
    <button
     onClick={() => incrementOrDecrement(1)}
     className="flex justify-center items-center text-amber-50 bg-gray-900 rounded-md hover:bg-gray-600 p-2 mr-2 transition-all w-[100px] cursor-pointer"
    >
     +1
    </button>
   </div>
  </>
 );
};
