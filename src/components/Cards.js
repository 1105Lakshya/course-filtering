import { useState } from "react";
import Card from "./Card";


const Cards=({courses,category})=>{
    console.log(courses);


    const [LikedCourses,setLikedCourses]=useState([]);



    let allCourses=[];

    const getCourses =()=>{
        if(category==='All'){
        Object.values(courses).forEach((courseCategory)=> {
            courseCategory.forEach((course)=>{
                allCourses.push(course);
            })
        })  
        }
        else{
            allCourses=courses[category];
        }
        
    }

    
        getCourses();
    

    

    return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
        
       { allCourses.map((course)=>{
            return (
                <Card key={course.id} course={course} LikedCourses={LikedCourses} setLikedCourses={setLikedCourses}></Card>
                )

        })}

    </div>    
    )
    
}


export default Cards