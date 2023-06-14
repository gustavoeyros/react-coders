import './Card.css'

interface ICardProps {
    title: string
    children: React.ReactNode
    color?: string
}

const Card = ({title, children, color}: ICardProps) => {
    const colorDefault = color ? color : '#A98743'
    return(
        <div className="card" style={{backgroundColor: colorDefault, borderColor: colorDefault}}>
            <p className='title'>{title}</p>
            <div className='content'>{children}</div>
        </div>
    )
}


export default Card