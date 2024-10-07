import React from 'react'

function Button({
    children,
    type = 'button',
    className = '',
    ...props
}) {
  return (
    <button type={type} 
      className={`px-10 py-4 rounded-3xl heading-font text-lg tracking-wide cursor-pointer outline-0 transition-colors duration-600 ease-in-out ${className}`}
      style={{background: "var(--bg-gradient-dark)", color: "#fff"}}
      {...props}
      onMouseEnter={(e) => e.target.style.background = 'var(--bg-gradient-invert)'} //hover effect
      onMouseLeave={(e) => e.target.style.background = 'var(--bg-gradient-dark)'}
    >
        {children}
    </button>
  )
}

export default Button