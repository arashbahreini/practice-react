import { Student } from '@/app/types/student'

export function getStudents() {
    return fetch('https://localhost:44397/student')
}

export function addStudent(student: Student) {
    return fetch('https://localhost:44397/student', {
        method: 'POST',
        body: JSON.stringify(student),
        headers: { 'Content-Type': 'application/json' },
    })
}
