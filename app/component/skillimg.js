import Image from "next/image";
import Ae from '../images/skill/ae.png'
import C from '../images/skill/c.png'
import Figma from '../images/skill/figma.png'
import Java from '../images/skill/java.png'
import Mongo from '../images/skill/mongo.png'
import Node from '../images/skill/node.png'
import Office from '../images/skill/office.png'
import React1 from '../images/skill/react.png';



export default function Skillimg(){
    return(
        <div className="mt-20 h-[70%]">
                <div className=" text-center font-bold text-2xl shadow10 ani1 inline-block w-[180px]">
                    <Image src={React1}  width={180} className="rounded-full box2 p-5 mb-5"/>
                    React js
                </div>

             
                <div className=" text-center font-bold text-2xl ani2 shadow10  inline-block w-[180px]">
                    <Image src={C}width={180} className="rounded-full box2 p-5 mb-5"/>
                    C programming
                </div>
            
            
                <div className=" text-center font-bold text-2xl ani3 shadow10  inline-block w-[180px]">
                    <Image src={Figma} width={180} className="rounded-full box2 p-5 mb-5"/>
                    Figma
                </div>
            
             
                <div className=" text-center font-bold text-2xl ani4 shadow10  inline-block w-[180px]">
                    <Image src={Java}  width={180} className="rounded-full box2 p-5 mb-5"/>
                    Java
                </div>
            
            
                <div className=" text-center font-bold text-2xl  ani5 shadow10  inline-block w-[180px]">
                    <Image src={Mongo}  width={180} className="rounded-full box2 p-5 mb-5"/>
                    Mongo
                </div>
            
             
                <div className=" text-center font-bold text-2xl ani6 shadow10  inline-block w-[180px]">
                    <Image src={Node}  width={180} className="rounded-full box2 p-5 mb-5"/>
                    Node Js
                </div>
                
                <div className=" text-center font-bold text-2xl ani7 shadow10  inline-block w-[180px]">
                    <Image src={Ae}  width={180} className="rounded-full box2 p-5 mb-5"/>
                    After effect
                </div>
             
                <div className=" text-center font-bold text-2xl ani8  shadow10  inline-block w-[180px]">
                    <Image src={Office}  width={180} className="rounded-full box2 p-5 mb-5"/>
                    Microsoft Office
                </div>
            </div>


    )
}