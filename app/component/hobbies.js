import Image from 'next/image'
import H1 from '../images/h1.jpg'
import H2 from '../images/h2.jpg'
import H3 from '../images/h3.jpg'
import H4 from '../images/h4.jpg'


export default function Hobbies(){
    return(
        <div className="text-white font-bold h-full p-10 text-7xl ">
            <div className="pt-40 underline underline-offset-8">
            Hobbies</div>
            <div className="mt-10 p-20 flex flex-row justify-around">
                <div>
                <Image src={H1} width={400} height={700}
                    className='z-10 box2'
                />   
                <Image src={H2} width={400} height={700}
                    className="relative z-[-10] top-[-30rem] left-20 box2 "
                />
                </div>
                <div className='text-white text-5xl font-semibold mt-60 h-1/2'> 
                    ~ Love to travel
                </div>
            </div>
            <div className="mt-[-30rem] p-20 pt-0 flex flex-row justify-around">
                <div className='text-white text-5xl font-semibold mt-60 h-1/2'> 
                    Sports ~
                </div>
                <div>
                <Image src={H3} width={400} height={700}
                    className='z-10 box1'
                />   
                <Image src={H4} width={400} height={700}
                    className="relative z-[-10] top-[-30rem] left-[-5rem] box1 "
                />
                </div>
            </div>
        </div>
    )
}