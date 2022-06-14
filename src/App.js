import { Container, Nav, Navbar } from "react-bootstrap";
import Questions from "./components/Questions";
import Summary from "./components/Summary/Summary";
import Header from "./layout/Header";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Summary></Summary>
      <Questions></Questions>
    </div>
  );
}

export default App;
