import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import About from './component/about'
import Skill from './component/skill'
import Hobbies from './component/hobbies'
import Gaming from './component/gaming'
import Get from './component/get'
import Final from './images/final1.png';


const inter = Inter({ subsets: ['latin'] })
function change(){
    
}
export default function Home() {
  return (
    <main className="text-white ">
      <div className=" h-screen">
        <div className=" absolute bottom-0">
        <div className="m-10 mt-0 pt-10">
          <span className=" pink text-[6rem] shadow1 font-bold  hover:shadow10" >
            Hi ;
          </span>
        </div>
      <Image src={Final} className="absolute top-[-20rem] left-[45rem]  " />
      <div className=" m-10 mb-16 text-[7rem] font-bold">
        <span className=" shadow1 hover:shadow10">I</span>
        <span className='mr-12 shadow1 hover:shadow10'>'M</span>
        <span className="shadow1 hover:shadow10 hover:cursor-pointer">S</span>
        <span className=" shadow1 hover:shadow10">A</span>
        <span className=" shadow1 hover:shadow10">N</span>
        <span className=" shadow1 hover:shadow10">C</span>
        <span className=" shadow1 hover:shadow10">H</span>
        <span className=" shadow1 hover:shadow10">I</span>
        <span className=" shadow1 hover:shadow10">T</span>
      </div>
      </div>
      <div className="text-md m-5  text-white absolute bottom-0 right-0">Scroll down to know more..</div>
      </div>


      <About />
      <Skill />
      <Hobbies />
      <Gaming />
      <Get />
    </main>
  )
}
