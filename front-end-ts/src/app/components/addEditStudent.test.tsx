import AddEditStudent from '@/app/components/addEditStudent'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

test('Input should be appears', () => {
    render(<AddEditStudent changeFormVisibility={() => {}} />)

    const element = screen.queryByPlaceholderText(/Student Name/i)
    expect(element).toBeInTheDocument()
})
