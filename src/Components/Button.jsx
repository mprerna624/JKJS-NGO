import React from 'react'

function Button({
    children,
    type = 'button',
    textColor = 'text-white',
    bgColor = 'bg-orange-600',
    className = '',
    ...props
}) {
  return (
    <button type={type} className={`px-10 py-4 rounded-3xl font-bold cursor-pointer outline-0 ${textColor} ${bgColor} ${className}`} {...props}>{children}</button>
  )
}

export default Button