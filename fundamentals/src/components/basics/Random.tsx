interface IRandomProps {
    min: number
    max: number
}

const Random = ({min, max}: IRandomProps) => {
    const result = Math.floor(Math.random() * (max-min) + min)
    return(
        <p>Random number between {min} and {max}: {result}</p>
    )
}


export default Random