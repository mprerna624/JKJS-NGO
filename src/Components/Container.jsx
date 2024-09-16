import React from 'react'

function Container({children, className= ''}) {
  return (
    <div className={`max-w-[1200px] w-4/5 mx-auto ${className}`}>{children}</div>
  )
}

export default Container