import React from "react";
import {apiUrl,filterData} from "./data"
import Navbar from "./components/Navbar"
import Filter from "./components/Filter"
import Cards from "./components/Cards"
import Spinner from "./components/Spinner";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";



//api call will be made using useEffect

const App = () => {

  // const mydata;
  var output;

  const [courses,setCourses]=useState(null);
  const [loading,setLoading]=useState(true);
  

  const fetchdata =async() =>{
    //jab tak data ni ayya tab tak lodading true;
    setLoading(true);
    try{
      const res=await fetch(apiUrl);
      output =await res.json();
      //save data in a variable 
      setCourses(output.data);
      // mydata=output.data;

      
    }
    catch(error){
      toast.error("Something went wrong");
    }
    setLoading(false);
  }




useEffect(() => {
  fetchdata();
},[]);




  const[category,setCategory]=useState("All");



  return (
    
      <div className="min-h-screen flex flex-col bg-bgDark2">
      <Navbar></Navbar>


      
      <Filter filterData={filterData} category={category} setCategory={setCategory}></Filter>

      <div className="w-11/12 max-w-[1200px] flex-wrap mx-auto flex justify-center items-center min-h-[50vh]">
        {
          loading ? (<Spinner/>) : (<Cards courses={courses} category={category} ></Cards>)
        }
      </div>         
      </div>
 
           


    
  );
};

export default App;
