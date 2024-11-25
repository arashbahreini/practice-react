import { Student } from '@/app/types/student'

export default function StudentList({
    students,
    onRepresentAddEdit,
}: {
    students: Student[]
    onRepresentAddEdit: () => void
}) {
    return (
        <>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>First name</td>
                        <td>Email</td>
                        <td>
                            <button
                                className="btn btn-success"
                                onClick={onRepresentAddEdit}
                            >
                                Add
                            </button>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student: Student) => {
                        return (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.firstName}</td>
                                <td>{student.email}</td>
                                <td>
                                    <button className="btn btn-info mx-1">
                                        Edit
                                    </button>
                                    <button className="btn btn-danger mx-1">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}
