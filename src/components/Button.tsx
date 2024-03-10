
type ButtonProps = {
  
  children: string;
}

const Button = ({ children}: ButtonProps) => {
  return (
    <div className="btnc">
      {/* <a href="#" data-title={dataTitle}
      className="btn">
        {children}
      </a> */}
      <button
      className="border-[4px] border-[#2563EB] text-lg font-bold tracking-[3px] overflow-hidden px-5 py-2 text-[#2563eb] hover:bg-white hover:text-black  hover:-translate-y-1 ease 
      hover:transition
      hover:duration-300 rounded-lg"
      >{children}</button>
    </div>
  )
}

export default Button