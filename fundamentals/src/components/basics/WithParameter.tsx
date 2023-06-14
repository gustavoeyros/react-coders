interface IWParameterProps {
    title: string
    subtitle: string
    score: number
}

const WithParameter = ({title, subtitle, score}: IWParameterProps) =>{
     const result = score >= 6 ? 'approved' : 'reproved'
    return(
        <>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <p>The student was {result}</p>
        </>
    )
}

export default WithParameter