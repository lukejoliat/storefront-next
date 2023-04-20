'use client'

import { useSearchParams } from "next/navigation"
import React, { ReactNode, useState } from "react"

type Mood = 'happy' | 'sad'

export const ClientComponent = ({ children }: { children: ReactNode }) => {
    const searchParams = useSearchParams();
    console.log({ searchParams });

    const [mood, setMood] = useState<Mood>('sad');

    const handleClickMood = () => {
        setMood(state => state === 'sad' ? 'happy' : 'sad')
    }

    return (
        <div>
            <span>This is the client component</span>
            <br />
            <button onClick={handleClickMood}>Change Mood</button>
            <br />
            <span>It is {mood}</span>
            {children}
        </div>
    )
}