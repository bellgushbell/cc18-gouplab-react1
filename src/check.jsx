import { toppings } from "./data.js"
import { useState } from "react"
export default function SelectToppings() {

    const [input, setInput] = useState(0)
    const [showData, setShowdata] = useState("")



    const hdlChange = (e) => {
        if (e.target.checked === true) {
            setInput((input + +e.target.value))

        } else {

            setInput((input - +e.target.value))

        }



        // console.log(e.target.value)

        // console.log(e)

    }
    // console.log(input)

    const hdlClick = (e) => {
        // console.log(e)

        const ShowAllData = setShowdata(toppings.filter((e) => e.target.checked === true))
        console.log(ShowAllData)

    }

    return (
        <div>
            <form > Toppings:

                {toppings.map((el, index) => (
                    <div className="border-2 flex flex-grow">
                        <input key={index} onChange={hdlChange} type="checkbox" name="price" value={el.price} />
                        <div className="flex gap-10">

                            <label > {el.name}</label>
                            <label> ${el.price}</label>
                        </div>
                    </div>

                )

                )}
                <h1>Total : ${(input.toFixed(2))}</h1>
            </form>


            {/* <button onClick={hdlClick}>CheckOut</button> */}

            {/* 
            <h1>{showData}</h1> */}


        </div >
    )


}