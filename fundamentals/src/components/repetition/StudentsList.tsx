import students from "../../data/students"

const StudentsList = () => {

    const studentsListFormated = students.map((student) => {
       return(
        <li key={student.id}>{student.id}{')'} {student.name} {'->'} {student.score} </li>
       )
    })
    return(
        <div>
            <ul style={{listStyle:"none"}}>
                {studentsListFormated}
            </ul>
        </div>
    )
}


export default StudentsList