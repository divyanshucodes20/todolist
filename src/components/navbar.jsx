import React from 'react'

const navbar = () => {
    return (
        <nav className='flex justify-between bg-violet-900 text-white'>
            <div className="logo">
                <span className='font-bold text-xl mx-9'>iTask</span>
            </div>
            <ul className="flex gap-4 mx-9">
                <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
                <li className='cursor-pointer hover:font-bold transition-all'>Your Tasks</li>
            </ul>
        </nav>
    )
}

export default navbar
