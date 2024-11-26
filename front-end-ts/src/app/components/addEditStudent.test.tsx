import AddEditStudent from '@/app/components/addEditStudent'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { addStudent } from '@/app/services/student'
import Helper from '@/app/services/helper'

test('First name Input should be appears', () => {
    render(<AddEditStudent changeFormVisibility={() => {}} />)

    const element = screen.queryByPlaceholderText(/Student Name/i)
    expect(element).toBeInTheDocument()
})

test('Email Input should be appears', () => {
    render(<AddEditStudent changeFormVisibility={() => {}} />)

    const element = screen.queryByPlaceholderText(/Email/i)
    expect(element).toBeInTheDocument()
})

xtest('Submit should call addStudent method', async () => {
    const fakeService = { addStudent }

    const spy = jest
        .spyOn(fakeService, 'addStudent')
        .mockReturnValue(new Promise<Response>(() => {}))

    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve({ test: 100 }),
        })
    ) as jest.Mock

    render(<AddEditStudent changeFormVisibility={() => {}} />)
    const [fakeFirstName, fakeEmail] = ['Alex', 'Alex@email']
    const firstNameInput = screen.queryByPlaceholderText(/Student Name/i)
    const emailInput = screen.queryByPlaceholderText(/Student Name/i)
    const submitButton = screen.queryByText(/Submit/i)
    await userEvent.type(firstNameInput!, fakeFirstName)
    await userEvent.type(emailInput!, fakeEmail)

    await userEvent.click(submitButton!)

    expect(spy).toHaveBeenCalled()
    spy.mockRestore()
})

xdescribe('helper', () => {
    test('should call helper', () => {
        const spy = jest.mocked(Helper).mock

        render(<AddEditStudent changeFormVisibility={() => {}} />)

        const element = screen.getByText(/helper/i)
        userEvent.click(element)

        console.log(spy, 'aaaaaaaaaaaa')
        expect(spy).toHaveBeenCalled()
    })
})
