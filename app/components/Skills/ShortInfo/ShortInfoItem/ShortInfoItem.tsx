interface IProps {
    count:string;
    firstTitle:string;
    secondTitle:string;
}
function ShortInfoItem({count,firstTitle,secondTitle}:IProps) {
    return ( 
            <div className="text-center mx-5 md:mx-16">
                <h5 className="font-semibold text-2xl">{count}+</h5>
                <h6 className="text-[#BBB9C2]">
                    {firstTitle}
                </h6>
                <h6 className="text-[#BBB9C2]">
                    {secondTitle}
                </h6>
            </div> 
        );
}

export {ShortInfoItem} ;