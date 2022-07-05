import "./App.css";
import Header from "./components/Header";

import Tesla from "./asset/Tesla.json";
import { useState } from "react";
const data = Tesla;

function App() {
  const container1 = 90700;
  const container2 = 106700;

  const [result, setResult] = useState(0);

  return (
    <div className="App">
      <Header title={"Tesla config"}></Header>
      <main>
        <section>
          <h2>{data[0].title}</h2>
          <div
            onClick={() => {
              setResult(container1);
            }}
            className={`container-1`}
          >
            <p>
              <span>{data[0].box[0].description}</span> -
              <span> {data[0].box[0].price}</span> €
            </p>
          </div>
          <div
            onClick={() => {
              setResult(container2);
            }}
            className={`container-2`}
          >
            <p>
              <span>{data[0].box[1].description}</span> -
              <span> {data[0].box[1].price}</span> €
            </p>
          </div>
          <h2>{data[1].title}</h2>
          <div
            onClick={() => {
              result === 90700 || result === 106700
                ? setResult(result + 0)
                : setResult(result - 1000);
            }}
            className={`container-3`}
          >
            <p>
              <span>{data[1].box[0].description}</span> -
              <span> {data[1].box[0].price}</span> €
            </p>
          </div>
          <div
            onClick={() => {
              result === 90700 || result === 106700
                ? setResult(result + 1000)
                : setResult(result + 0);
            }}
            className={`container-4`}
          >
            <p>
              <span>{data[1].box[1].description}</span> -
              <span> {data[1].box[1].price}</span> €
            </p>
          </div>
        </section>
        <div>
          <span className="result">{result} €</span>
          <button
            onClick={() => {
              return alert("Thanks for clicking !");
            }}
          >
            Buy !
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
