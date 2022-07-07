import { Link } from "@remix-run/react";

export function CvButton({text=""}) {
    return ( 
        <a download href="/resume/resume.pdf" >
            <span className="py-3 px-5 border border-[#BBB9C2] text-[#BBB9C2]cursor-pointer relative cvBtn cursor-pointer">
                {text}
                <div className=" absolute -top-2 -left-2 h-3 w-3 rounded-full cvBtnAnimation"></div>
            </span> 
        </a>
    );
}

export default CvButton;