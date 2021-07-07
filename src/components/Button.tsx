import { useState } from "react"

export function Button(){
    const [counter,setCounter] = useState(0);
    
    function handleCounter(){
        setCounter(counter + 1);
    }

    return(
        <div>
            <button onClick={handleCounter}>{counter}</button>
        </div>
    )
}