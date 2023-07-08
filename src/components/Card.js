import React from "react";
import { toast } from "react-toastify";
import { useState } from "react";
import {FcLike} from "react-icons/fc";


const Card=({course,LikedCourses,setLikedCourses})=>{

    const [isLiked ,setlike]=useState(false);

    function clickHandler(event){
      

        if(LikedCourses.includes(course.id)){
            setLikedCourses((prev)=> prev.filter((cid)=>(cid!==course.id)));   
            toast.warning("Like removed ");
            setlike(false);
        }
        else{
            //pehle se liked nahi haii
            LikedCourses.push(course.id);
            setlike(true);
            toast.success("Liked Successfully");
        }
    }

    return (
        <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
            <div className="relative">
                <img src={course.image.url}></img>
            <div>
                <button className={`w-[40px] h-[40px] bg-white rounded-full absolute right-1 bottom-1 flex justify-center items-center `}  onClick={clickHandler}>
                    <FcLike className={`${isLiked?"":"opacity-40"}`}

                 fontSize="2rem"></FcLike>
                </button>
            </div>
            </div>

            
            <div class="p-4">
              <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
              <p className="mt-2 text-white">
                {
                course.description.length>100?
                (course.description.substr(0,100)) +"...":
                (course.description)
                }
                </p>
            </div>
        </div>
    )
}


export default Card;