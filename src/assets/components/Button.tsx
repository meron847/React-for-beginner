import React from "react";

interface Prop{
children:string;
color?: 'Primary' | 'Secondary' | 'info' | 'Warning';
onClick:()=>void;
}


const Button = ({children,color,onClick}:Prop) => {
  return (
    <div>
     <button className={'btn btn-' +color} onClick={onClick} >{children}</button>
    </div>
  )
}

export default Button; 


