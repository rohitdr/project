import React from "react";
import { useState } from "react";
import First from "./Signuppages/First";
import Second from "./Signuppages/Second";
import Third from "./Signuppages/Third";
import "./SignUp.css";
import { useContext } from "react";
import RecipeContext from "../Context/RecipeContext";


export default function SignUp() {
const context = useContext(RecipeContext)
const {signuppage}= context
 
  const pages = () => {
    switch (signuppage) {
      case 0:
        return <First></First>;
      case 1:
        return <Second></Second>;
      case 2:
        return <Third></Third>;
      default:
        return <First />;
    }
  };
  return (
    <>
   {pages()}
    </>
  );
}
