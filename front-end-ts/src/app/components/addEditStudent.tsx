import { ChangeEvent, useState } from 'react'
import { Student } from '@/app/types/student'
import { addStudent } from '@/app/services/student'

export default function AddEditStudent({
    changeFormVisibility,
}: {
    changeFormVisibility: () => void
}) {
    const [student, setStudent] = useState<Student>({} as Student)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setStudent({
            ...student,
            [event.target.name]: event.target.value || '',
        })
    }

    const submit = () => {
        setIsLoading(true)
        addStudent(student).then(() => {
            setIsLoading(false)
            changeFormVisibility()
        })
    }

    return (
        <>
            <div className="row">
                <div className="col-sm-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Student Name"
                        value={student.firstName || ''}
                        name="firstName"
                        onChange={onChange}
                    />
                </div>
                <div className="col-sm-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        value={student.email || ''}
                        name="email"
                        onChange={onChange}
                    />
                </div>
                <div className="col-sm-3">
                    <button
                        className="btn btn-success"
                        onClick={submit}
                        disabled={isLoading}
                    >
                        Submit
                    </button>
                </div>
            </div>
            <hr className="my-5" />
        </>
    )
}
