'use client'
import StudentList from '@/app/components/studentList'
import { Student } from '@/app/types/student'
import { useEffect, useState } from 'react'
import { getStudents } from '@/app/services/student'
import AddEditStudent from '@/app/components/addEditStudent'

export default function Students() {
    const [students, setStudents] = useState<Student[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [representAddEdit, setRepresentAddEdit] = useState<boolean>(false)

    useEffect(() => {
        getAll()
    }, [])

    const getAll = () => {
        getStudents().then(async (res) => {
            setIsLoading(false)
            setStudents(await res.json())
        })
    }
    return (
        <>
            {representAddEdit && (
                <AddEditStudent
                    changeFormVisibility={() => {
                        setRepresentAddEdit(false)
                        getAll()
                    }}
                ></AddEditStudent>
            )}
            {isLoading ? (
                <h1>Loading ...</h1>
            ) : (
                <StudentList
                    students={students}
                    onRepresentAddEdit={() => {
                        setRepresentAddEdit(true)
                    }}
                ></StudentList>
            )}
        </>
    )
}
