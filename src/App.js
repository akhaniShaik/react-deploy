import natureimage from "./img/images.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <h2>Author : AKhani</h2>
      <img src={natureimage} alt="porfile-image" />
    </div>
  );
}

export default App;
