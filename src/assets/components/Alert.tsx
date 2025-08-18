import { ReactNode } from "react";

interface Promp {
  children: ReactNode;
  onClose:()=>void;
}
const Alert = ({children, onClose}: Promp) => {
  return (
    <div className="alert alert-primary alert-dismissible">
     {children} 
     <button type="button" className="btn-close" onClick={onClose} data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

export default Alert

//short cut rafce(this means React arow function component export).