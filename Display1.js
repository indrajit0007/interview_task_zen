import React, { useContext } from "react";
import {firstName, lastName} from "./ContextApi1";
function Display1()
{
    const fname=useContext(firstName);
    const lname=useContext(lastName);
    return (
        <div>
 my name {fname} {lname}
        </div>
    )
}
export default Display1;