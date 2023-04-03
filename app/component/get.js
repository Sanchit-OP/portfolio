import Image from "next/image";
import Insta from '../images/insta.png';
import Linkd from './../images/Linkd.png';



export default function(){
    return(
        <main className="h-screen p-40 pt-[7.5rem] pb-20">
            <div className="text-8xl ml-10 text-white shadow1">
                Get in touch . . . .
            </div>
            <div className="flex flex-row justify-center  py-10 pl-40">
                <a href="https://instagram.com/sanchit0701?igshid=ZDdkNTZiNTM=" className=" w-2/5 p-10"><Image src={Insta} width={200} className="rounded-xl " /></a>
                <a href="https://www.linkedin.com/in/sanchit-ahlawat-5412931b5" className=" w-2/5 p-10"><Image src={Linkd} width={200} className="rounded-[3rem]"/></a>
            </div>
            <div className="text-8xl ml-10 text-white ">
                Download . . . . <a href="https://drive.google.com/file/d/1G2g7pfCPqVTdZzZO7ruvApbV6ONEqbC9/view?usp=share_link" className="inline-block shadow10 hover:cursor-pointer hover:shadow1 pb-20"> Resume</a>
            </div>
        </main>
    )
}
