import './Mega.css'
import {useState} from 'react'
const Mega = () => {
    const generateDifferentNumber = (min: number, max: number, array: Array<number>): number => {
        const random = Math.floor(Math.random() * (max + 1 -min) + min)
        return array.includes(random) ? generateDifferentNumber(min, max, array) : random
    }

    const generateNumbers = (quantity: number): Array<number> => {
        const numbers = Array(quantity).fill(0).reduce((nums) => {
            const newNumber = generateDifferentNumber(1, 60, nums)
            return [...nums, newNumber]
        }, []).sort((n1: number, n2: number) => n1-n2)

        return numbers
    }

    const [quantity, setQuantity] = useState(0)
    const initialNumber = generateNumbers(quantity)
    const [numbers, setNumbers] = useState(initialNumber)

   

    return(
        <div className="container__lottery">
            <input type="number" value={quantity} onChange={(e) => setQuantity(+e.target.value)}/>
            <h3>{numbers.join(' ')}</h3>
            <button onClick={() => {setNumbers(generateNumbers(quantity))}}>Generate numbers</button>
        </div>
    )
}


export default Mega