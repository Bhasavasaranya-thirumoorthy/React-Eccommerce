import React from "react"
import {Link} from "react-router-dom"


function Notfound() {
    return (
        <div style={{textAlign:"center",marginTop:"50px"}}>
            <h1>404 - Page not Found</h1>
            <p>Sorry, the page you are looking for does not exists</p>

            <Link to="/">Go to Home Page</Link>
        </div>

    )
}

export default Notfound