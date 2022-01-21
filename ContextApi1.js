import React,{createContext} from "react";
import Display1 from "./Display1";
export const firstName=createContext();
export const lastName=createContext();
function ContextApi1()
{
    
    return (
        <div>
            <firstName.Provider value={"Indrajit"}>
            <lastName.Provider value={"kumar"}>
                <Display1/>
            </lastName.Provider>
               
            </firstName.Provider>
        </div>
    )

}
export default ContextApi1;
//export {firstName};