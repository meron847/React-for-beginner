//import React from "react";
import styles from './Button.module.css';

interface Prop{
children:string;
color?: 'Primary' | 'Secondary' | 'info' | 'Warning';
onClick:()=>void;
}


const Button = ({children,color,onClick}:Prop) => {
  return (
    <div>
     <button className={[styles.btn, styles['btn-' + color]].join('')} onClick={onClick} >{children}</button>
    </div>
  )
}

export default Button; 


