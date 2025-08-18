
import Button from "./assets/components/Button"; 

function App() {

  return (
          <div>
            <Button color="secondary" onClick={()=>console.log('clicked')}>
              clicked
            </Button>
          </div>
          );
}

export default App;

