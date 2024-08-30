import { toppings } from "./data.js"
import { useState } from "react"
export default function SelectToppings() {

    const [input, setInput] = useState(0)
    const [showData, setShowdata] = useState([])
    const [showDisplay, setShowDisplay] = useState(false)

    console.log(showData)

    const hdlChange = (e) => {
        if (e.target.checked === true) {
            setInput((input + +e.target.value))
            const newShowData = [...showData]
            newShowData.push({
                name: e.target.name,
                price: +e.target.value
            })

            setShowdata(newShowData)

        } else {

            setInput((input - +e.target.value))

            setShowdata(showData.filter((el) => el.name !== e.target.name))

        }



        // console.log(e.target.value)

        // console.log(e)

    }
    // console.log(input)

    const hdlClick = (e) => {

        e.preventDefault()
        setShowDisplay(!showDisplay)

        // if (showDisplay == false) {
        //     setShowDisplay(true)

        // } else {
        //     setShowDisplay(false)
        // }


    }

    return (
        <div>
            <form > Toppings:

                {toppings.map((el, index) => (
                    <div className="border-2 flex flex-grow">
                        <input key={index} onChange={hdlChange} type="checkbox" name={el.name} value={el.price} />
                        <div className="flex gap-10">

                            <label > {el.name}</label>
                            <label> ${el.price}</label>
                        </div>
                    </div>

                )

                )}
                <h1>Total : ${(input.toFixed(2))}</h1>
            </form>


            <button onClick={hdlClick}>CheckOut</button>

            {showDisplay && showData.map(el => (
                <div className="flex justify-between">
                    <p>{el.name}</p>
                    <p>{el.price}</p>
                </div>

            ))}


        </div >
    )


}