import React, { useEffect, useState } from 'react'

function ProgressBar({progressPercentage, title, isVisible}) {

    const [percent, setPercent] = useState(0);

    useEffect(() => {
        if(isVisible) {
            const interval = setInterval(() => {
                setPercent( (prev) => {
                    if(prev >= progressPercentage) {
                        clearInterval(interval);
                        return prev;
                    }

                    return prev + 1;
                } )
            }, 50);

            return () => clearInterval(interval);
        }
    }, [progressPercentage, isVisible])

  return (
    <div className='text-center'>
        <div className="circle relative flex justify-center items-center w-40 h-40 rounded-full 
            after:absolute after:inset-1 after:bg-[var(--bg-dark)] after:rounded-full"
            style={{background: `conic-gradient(#ea580c ${percent}%, #000 0%)`}}
        >
            <h1 className='font-bold text-4xl z-10'>{percent}%</h1>
        </div>

        <div className="font-bold text-xl mt-3">
            {title}
        </div>
    </div>
  )
}

export default ProgressBar