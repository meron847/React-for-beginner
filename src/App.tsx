
import { useState } from "react";
import Alert from "./assets/components/Alert";
import Button from "./assets/components/Button/Button"; 

function App() {
const [alertVisible, setAlertVisiblity]=useState(false);
  return (
         <div>
          {alertVisible && <Alert onClose={() => setAlertVisiblity(false)}> My alert</Alert>}
            <Button color="secondary" onClick={()=>setAlertVisiblity(true)}>
              clicked
            </Button>
          </div>
          );
}

export default App;

