import Image from "next/image";
import Lol from '../images/lol.jpg';
import VAL from '../images/valo.jpeg';
import Rust from '../images/rust.jpeg';

export default function Gaming() {
  return (
    <div className="h-screen mt-[-30rem] p-10">
      <div className="inline-block text-white text-6xl font-bold shadow10 p-10 ml-20">Dark Side   &nbsp;   </div>
      <span className="inline-block text-white text-6xl font-bold shadow1 p-10"> Gaming</span>
      <div className="w-1/4 p-5 py-10 border ml-[38%] box1 mt-20 flex flex-row justify-between">
        <div className="basis-1/4">
            <Image src={Lol} width={70} className=" rounded-full mr-2" />
        </div>
        <div className="basis-3/4">
        <div class="mb-5 text-2xl font-medium dark:text-white ">League</div>
        <div class=" bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700 w-full">
            <div
            class="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500 w-5/6"
            ></div>
        </div>
        </div>
      </div>
      <div classname="flex flex-row justify-between">
        
             <div className="w-1/4 p-5 py-10 border box2 mt-20 inline-block mx-[11rem]">
                <div className="flex flex-row">
                <div className="basis-1/4">
                    <Image src={VAL} width={70} className=" rounded-full mr-2" />
                </div>
                <div className="basis-3/4">
                <div class="mb-5 text-2xl font-medium dark:text-white ">Valorant</div>
                <div class=" bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700 w-full">
                    <div
                    class="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500 w-4/5"
                    ></div>
                </div></div></div>
            </div>
        
        
            <div className="w-1/4 p-5 py-10 border box2 mt-20 inline-block mx-[11rem] ">
                <div className="flex flex-row">
                <div className="basis-1/4">
                    <Image src={Rust} width={70} className=" rounded-full mr-2" />
                </div>
                <div className="basis-3/4">
                <div class="mb-5 text-2xl font-medium dark:text-white ">Rust</div>
                <div class=" bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700 w-full">
                    <div
                    class="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500 w-3/5"
                    ></div>
                </div></div></div>
            </div>
        </div>
      
    </div>
  );
}
