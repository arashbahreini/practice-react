'use client'
import { useEffect, useState } from 'react'

export default function AboutUsPage() {
    const [foo, setFoo] = useState<string>('')

    useEffect(() => {
        console.log('after foo changed', foo)
    }, [foo])

    useEffect(() => {
        console.log('initial load')
        setFoo('')
        setFoo('1')
        setFoo('2')
    }, [])

    return (
        <>
            <h1>aaa</h1>
            <button
                onClick={() => {
                    setFoo(Date.now().toString())
                }}
            >
                change foo
            </button>
        </>
    )
}
