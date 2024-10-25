// . means current folder
import { Button } from "bootstrap";
import { ListGroup } from "./components/ListGroup";

// always close react components to avoid compilation error
function App() {
  return (
    <div>
      <ListGroup />
      <Button />
    </div>
  );
}

export default App;
