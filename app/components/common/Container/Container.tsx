import React from "react";

interface IProps{
    children:React.ReactNode
}

function Container({children}:IProps) {
    return (  
         <div className="container m-auto px-16">
            {children}
         </div>
    );
}

export  {Container};