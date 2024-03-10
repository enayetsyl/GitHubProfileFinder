import { HeadingProps } from "../types"


const Heading = ({className, children}: HeadingProps) => {
  return (
    <h1 className={`text-center font-bold text-5xl ${className}`}>{children}</h1>
  )
}

export default Heading