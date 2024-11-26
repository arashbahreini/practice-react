import { render, screen, fireEvent } from '@testing-library/react'
import { addStudent } from '@/app/services/student'
import AddEditStudent from '@/app/components/addEditStudent'
import Helper from '@/app/services/helper'
import '@testing-library/jest-dom'

// Mock the services
jest.mock('../services/student', () => ({
    addStudent: jest.fn(),
}))

jest.mock('../services/helper', () => ({
    Helper: jest.fn(),
}))

describe('AddEditStudent Component', () => {
    const mockChangeFormVisibility = jest.fn()

    beforeEach(() => {
        jest.clearAllMocks()
    })

    test('renders input fields and buttons', () => {
        render(
            <AddEditStudent changeFormVisibility={mockChangeFormVisibility} />
        )

        expect(screen.getByPlaceholderText('Student Name')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
        expect(screen.getByText('Submit')).toBeInTheDocument()
        expect(screen.getByText('helper')).toBeInTheDocument()
    })

    test('updates student state on input change', () => {
        render(
            <AddEditStudent changeFormVisibility={mockChangeFormVisibility} />
        )

        const nameInput = screen.getByPlaceholderText('Student Name')
        const emailInput = screen.getByPlaceholderText('Email')

        fireEvent.change(nameInput, {
            target: { value: 'John Doe', name: 'firstName' },
        })
        fireEvent.change(emailInput, {
            target: { value: 'john@example.com', name: 'email' },
        })

        expect((nameInput as HTMLInputElement).value).toBe('John Doe')
        expect((emailInput as HTMLInputElement).value).toBe('john@example.com')
    })

    test('calls addStudent and changeFormVisibility on submit', async () => {
        ;(addStudent as jest.Mock).mockResolvedValueOnce({}) // Mock the API call

        render(
            <AddEditStudent changeFormVisibility={mockChangeFormVisibility} />
        )

        const nameInput = screen.getByPlaceholderText('Student Name')
        const emailInput = screen.getByPlaceholderText('Email')
        const submitButton = screen.getByText('Submit')

        fireEvent.change(nameInput, {
            target: { value: 'John Doe', name: 'firstName' },
        })
        fireEvent.change(emailInput, {
            target: { value: 'john@example.com', name: 'email' },
        })

        fireEvent.click(submitButton)

        expect(submitButton).toBeDisabled() // Button should be disabled during loading
        expect(addStudent).toHaveBeenCalledWith({
            firstName: 'John Doe',
            email: 'john@example.com',
        })

        // Simulate the API call resolving
        await screen.findByText('Submit') // Wait for button to re-enable
        expect(mockChangeFormVisibility).toHaveBeenCalled()
    })

    test('calls Helper when "helper" button is clicked', () => {
        render(
            <AddEditStudent changeFormVisibility={mockChangeFormVisibility} />
        )

        const helperButton = screen.getByText('helper')
        fireEvent.click(helperButton)

        expect(Helper).toHaveBeenCalled()
    })
})
