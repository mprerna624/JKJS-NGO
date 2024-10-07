import React from 'react'

function HeadingUnderline({className=''}) {
  return (
    <div className={`w-1/5 h-1 rounded-full mt-4 ${className}`} style={{background : "var(--bg-gradient-dark)"}}></div>
  )
}

export default HeadingUnderline