export type typeInput = {
    className?: string;
  text?: string;
    type?: string;
};

const Input = ({ className, text, type }: typeInput): JSX.Element => {
    
    return (
        <>
        <input type={type}
          className={`text-2xl w-249 bg-transparent placeholder:text-dark-blue-transparency font-bold ${className}`}
          placeholder={text} />
        </>
    )
}
export { Input };