import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/").then((response) =>
      response.json().then((data) => setProducts(data))
    );
  }, []);

  return (
    <>
      <h1>Product List</h1>
      <ul>
        {products.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
