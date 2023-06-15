interface IEvenOrOddProps{
    number: number
}

const EvenOrOdd = ({number}: IEvenOrOddProps) => {
    const isEven = number % 2 === 0
    return(
        <div>
          The number {number} is {isEven ? 'even' : 'odd'}
        </div>
    )
}


export default EvenOrOdd