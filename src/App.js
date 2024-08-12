import "./App.css";
import Timer from "./components/Timer";

function App() {
  return (
    <div className="App flex">
      <div className="title py-4 text-center align-content-center">title</div>
      <div className="Banner py-5 text-center flex align-content-center  ">
        Banner
      </div>
      <div className="detalis py-3  ">
        <div className="contents">
          <div>Banner Toggle</div>
          <div>Discription</div>
          <div>Url</div>
        </div>

        <Timer></Timer>
      </div>
    </div>
  );
}

export default App;
