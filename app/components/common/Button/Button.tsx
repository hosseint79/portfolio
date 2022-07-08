
interface IPropsType {
    text:string
}
function Button({text}:IPropsType) {
    return (  
        <button className="px-7 py-3 rounded-md bg-[#211D35] duration-300 hover:bg-[#201d2b] text-white">
            {text}
        </button>
    );
}

export default Button;