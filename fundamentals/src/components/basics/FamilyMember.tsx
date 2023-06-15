interface IFamilyMemberProps {
    name: string
    lastname: string
}

const FamilyMember = ({name, lastname}: IFamilyMemberProps) => {
    return (
        <div>
            <span>{name} {lastname}</span>
        </div>
    )
}

export default FamilyMember