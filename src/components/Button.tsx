import { ButtonProps } from "../types"


const Button = ({onClick,children, className } : ButtonProps) => {
  return (
    <button
  onClick={onClick}
  className={`px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:-translate-y-1 hover:scale-105 duration-700 ease-in ${className}`}
  >{children}</button>
  )
}

export default Button