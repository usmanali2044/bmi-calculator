  import React, { useState } from "react";

  const Card = () => {
  const [weight,setWeight] = useState(null);
  const [height,setHeight] = useState(null);
  const [Bmi,setBmi] = useState(null);
  const [message,showMessage] = useState("Welcome")
  

  const bmiCalculator = ()=>{
    if(height<0 || weight< 0 || !height || !weight ){
      reloadPage();
      return;
    }
    if(height>0 && weight>0){
      const heightMeters = height * 0.0254;
      const bmi = weight /(heightMeters *heightMeters);
      const bmiDecimal = Number(bmi.toFixed(1));
      console.log(bmiDecimal)
      if(bmiDecimal<18.5){
        showMessage("Underweight");
      }else if(bmiDecimal>=18.5 && bmiDecimal<=24.9){
        showMessage("Normal/Healthy");
      }else if(bmiDecimal>=25.0 && bmiDecimal<=29.9){
        showMessage("Overweight");
      }else{
        showMessage("Obeese Class ");
      }
      

      setBmi(bmiDecimal)
    }
  }

  const reloadPage = ()=>{
      setWeight(0);
      setHeight(0);
      setBmi(null);
      showMessage("Page reloaded");
  }
  
    
    return <div className="w-96 max-h-9/12 min-h-7/12 bg-gray-300 rounded text-gray-800 p-4">
        <h1 className="text-center font-semibold text-2xl">BMI Calculator</h1>
        <div id="inputfields" className="mt-10">
          <h5 className="text-xl font-semibold">Weight KG</h5>
          <input className="mb-2 w-full text-lg border-2 " type="text" placeholder="Enter Weight in KG's "value={weight} onChange={(e)=>{
            setWeight(Number(e.target.value));
          }} />
          <h5 className="text-xl font-semibold">Height INCHES</h5>
          <input value={height} onChange={(e)=>{
            e.target.value
            setHeight(Number(e.target.value));
          }} className="mb-2 w-full text-lg border-2 " type="text" placeholder="Enter Height in Inches" />
        </div>
        <div id="btns" className="flex flex-col w-auto items-center ">
          <button onClick={bmiCalculator} className=" bg-sky-600 text-white text-xl font-semibold w-full py-3 rounded mb-3 cursor-pointer hover:bg-sky-900">Submit</button>
          <button onClick={reloadPage} className=" border-3 border-black text-gray-800 text-xl font-semibold w-full py-3 rounded mb-2 cursor-pointer hover:bg-sky-900 ">Reload</button>
        </div>
        <div className="text-center font-semibold text-xl" style={{color:"teal"}}>{Bmi} </div>
        <div className="text-center font-semibold text-xl " style={{color:"blue"}}>{message} </div>

    </div>;
  };

  export default Card;
