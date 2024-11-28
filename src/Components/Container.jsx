import React from 'react'

function Container({children, className= ''}) {
  return (
    <div className={`max-w-[1200px] w-[87%] mx-auto ${className}`}>{children}</div>
  )
}

export default Container