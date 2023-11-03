
import Assignment3 from "./a3";
import Assignment4 from "./a4";
import Nav from "../Nav";
import {Routes, Route, Navigate} from "react-router";

function Labs() { return(
    <div>
         <Nav/>
        <Assignment3/>
        <Assignment4 />
    </div> 

    );
}
export default Labs;