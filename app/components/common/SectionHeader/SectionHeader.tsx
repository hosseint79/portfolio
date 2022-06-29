interface IProps {
    title:string;
    caption:string;
}

function SectionHeader({title,caption}:IProps) {
    return (  
        <div className="text-center pt-3 pb-6 text-white">
            <h2 className="my-3 text-3xl font-semibold"> {title} </h2>
            <span> {caption}</span>
        </div>
    );
}

export  {SectionHeader};