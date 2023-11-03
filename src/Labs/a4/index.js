import React from "react";
import Add from "./Add";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from  "./BooleanStateVariables";




const Assignment4 = () => {  
    return(
    <>
<h1>Assignment 4</h1>
<Add a={1} b={2} />
<ClickEvent/>
<PassingDataOnEvent/>
<PassingFunctions/>
<EventObject/>
<Counter/>
<BooleanStateVariables/>


</> );
};
export default Assignment4;