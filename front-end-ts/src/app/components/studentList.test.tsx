import { render, screen } from '@testing-library/react'
import StudentList from '@/app/components/studentList'
import { Student } from '@/app/types/student'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

test('should render table with students', () => {
    const fakeName = 'fake name'
    const fakeStudents: Student[] = [{ id: 1, firstName: fakeName, email: '' }]
    render(
        <StudentList students={fakeStudents} onRepresentAddEdit={() => {}} />
    )

    const element = screen.getByText(fakeName)
    expect(element).toBeInTheDocument()
})

test('add button should trigger onRepresentAddEdit', async () => {
    const fakeName = 'fake name'
    const fakeOnRepresentAddEdit = jest.fn()
    const fakeStudents: Student[] = [{ id: 1, firstName: fakeName, email: '' }]
    render(
        <StudentList
            students={fakeStudents}
            onRepresentAddEdit={fakeOnRepresentAddEdit}
        />
    )

    const button = screen.getByText(/add/i)
    await userEvent.click(button)

    expect(fakeOnRepresentAddEdit).toHaveBeenCalled()
})
