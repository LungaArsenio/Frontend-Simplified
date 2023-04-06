import React, { useState } from "react";
//if we set "useState" has 0 counter will be treated like a number when called

            //handling objects
// 1.Use a callback to get the previous value
// 2.Spread ot all the properties of the previous state
// 3. Only change the property that you need to change


function Counter() {
    const [arr, setArr] = useState([])

    function addPlus() {
        setArr(prevArr => [...prevArr, "+"])
    }

    function addMinus() {
        setArr((prevArr) => [...prevArr, "-"])
    }
    return(
        <div>
            <button onClick= {addPlus} >+</button>
            <button onClick = {addMinus} >-</button>
            {arr}
        </div>
    )
}
    // function incrementCounter () {
    //     // here "counter" just means 0, the value that he stores from useState
    //     // setCounter(counter + 1)
    //     setCounter((previous) => previous + 1)
    //     setCounter((previous) => previous + 1)
    // }

    // function decrementCounter () {
    //     setCounter((prevCounter) => prevCounter - 1)
    //     setCounter((prevCounter) => prevCounter - 1)
    // }

export default Counter
