import AddEditStudent from '@/app/components/addEditStudent'
import { render, screen } from '@testing-library/react'
import { expect, test } from '@jest/globals'

test('first test', () => {
    render(<AddEditStudent changeFormVisibility={() => {}} />)

    const element = screen.getByPlaceholderText(/aaa/)
    console.log(element)
    expect(true).toBe(true)
})
