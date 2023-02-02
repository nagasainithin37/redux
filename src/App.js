import Entry from "./components/Entry";
import List from "./components/List";
function App() {
  return (
    <div>
      <div className="container row">
        <div className="col"><Entry/></div>
        <div className="col"><List/></div>
      </div>
    </div>
  );
}

export default App;
