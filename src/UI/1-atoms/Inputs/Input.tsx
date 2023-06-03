export type typeInput = {
    className?: string;
  text?: string;
    type?: string;
};

const Input = ({ className, text, type }: typeInput): JSX.Element => {
    
    return (
        <>
        <input type={type}
          className={`text-2xl text-dark-blue w-249 border-b-[2px] focus:outline-none border-b-rounded border-dark-blue-transparency bg-transparent placeholder:text-dark-blue-transparency font-medium ${className}`}
          placeholder={text} />
        </>
    )
}
export { Input };