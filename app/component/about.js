import Image from 'next/image'
import Img from '../images/about.jpg'

export default function About(){
    return(
        <section className=" h-screen">
            <div className="mt-8 flex flex-row justify-between p-20">
                <div className="ml-10">
                    <Image 
                        src={Img}
                        height={450}
                        width={400}
                        alt='Picture of me'
                        className='p-1 m-10 box1 '
                    ></Image>
                </div>
                <div className="p-12  w-3/5">
                    <h1 className="font-bold text-6xl text-center  underline hover:underline underline-offset-8">About me </h1>
                    <div className=" font-normal text-2xl text-justify m-10 mr-10 p-16">
                        Lorem ipsum dolor sit amet, consectetur adip
                        Lorem ipsum dolor sit amet, consectetur adip
                        Lorem ipsum dolor sit amet, consectetur adip
                        Lorem ipsum dolor sit amet, consectetur adip
                        Lorem ipsum dolor sit amet, consectetur adip
                        Lorem ipsum dolor sit amet, consectetur adip

                    </div>
                </div>
            </div>
        </section>
    )
}