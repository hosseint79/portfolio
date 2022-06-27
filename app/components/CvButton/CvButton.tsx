export function CvButton({text=""}) {
    return ( 
    <span className="py-3 px-5 border border-[#d2bdff] text-[#d2bdff] cursor-pointer relative cvBtn">
        {text}
        <div className=" absolute -top-2 -left-2 h-3 w-3 rounded-full cvBtnAnimation"></div>
    </span> 
    );
}

export default CvButton;