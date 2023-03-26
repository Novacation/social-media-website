import "./App.css";

function App() {
  const someData = "some data value";
  return (
    <div className="App">
      <User />
      <User />
      <User />
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      
      <h1>{props.name}</h1>
      <span>{props.age}</span>
      <span>{props.email}</span>
    </div>
  );
};

export default App;
