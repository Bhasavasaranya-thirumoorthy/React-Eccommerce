import React from "react"
// import { UserContext } from "./App";
import { Link } from "react-router-dom";

function About() {
   // const userInfo = useContext(UserContext)
   // const {name, age, email} = props.userInfo;
   return (
      <div>
         <h1 style={{background:"white"}}>This is the About Page</h1>
         <Link to="/">Go to Home page </Link>
         <p>About page</p>
         <p>User Information</p>
         {/* <p>Name:{userInfo.name}</p> */}
         {/* <p>Age:{userInfo.age}</p>
         <p>Email:{userInfo.email}</p> */}
      </div>

   )
}
export default About;