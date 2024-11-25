import './globals.css'
import { Header } from '@/app/components/header'
import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body>
                <Header />
                <hr className="my-3" />
                <div className="p-2">{children}</div>
            </body>
        </html>
    )
}
