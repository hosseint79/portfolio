import { ShortInfoItem } from "./ShortInfoItem/ShortInfoItem";

function ShortInfo() {
    return (  
        <div className="flex justify-center items-center text-white">
                    
            <ShortInfoItem count={"03"} firstTitle="Years" secondTitle="experience"/>
            <ShortInfoItem count={"06"} firstTitle="Completed" secondTitle="projects"/>

            <ShortInfoItem count={"03"} firstTitle="Companies" secondTitle="worked"/>

                   
        </div>
    );
}

export  {ShortInfo};