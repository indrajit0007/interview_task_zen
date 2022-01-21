import React from "react";
import {firstName, lastName} from "./ContextApi1";
function Display()
{
    
    return (
        <div>
            <firstName.Consumer>
                {(fname)=>{
                    return (
                        <lastName.Consumer>
                            {(lname)=>{
                                return (
                                    <div>
                                        My name is {fname} {lname}
                                    </div>
                                )
                            }}
                        </lastName.Consumer>
                    )
                }
            }
                </firstName.Consumer> 
        </div>
    )

}
export default Display;