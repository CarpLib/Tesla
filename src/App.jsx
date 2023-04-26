import { useState } from "react";
import Header from "./componants/Header";
import Main from "./componants/Main";
import Footer from "./componants/Footer";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
