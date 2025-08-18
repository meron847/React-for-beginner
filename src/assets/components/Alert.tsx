import { ReactNode } from "react";

interface Promp {
  children: ReactNode;
}
const Alert = ({children}: Promp) => {
  return (
    <div className="alert alert-primary">
     {children} 
    </div>
  )
}

export default Alert

//short cut rafce(this means React arow function component export).