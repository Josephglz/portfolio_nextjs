import React from 'react'

interface DividerProps {
    title: string;
} 

export const Divider = ({title}: DividerProps) => {
  return (
    <section
        id={`${title.toLowerCase()}`}
        className="flex flex-row items-center space-x-4 w-full select-none">
        <h2 className="font-black text-base">{title.toUpperCase()}</h2>
        <hr className="h-px w-2/5"/>
    </section>
  )
}
