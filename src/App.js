import "./App.scss";
import "../src/assets/styles/_index.scss";
import Quiz from "./components/Quiz/quiz";
import Reports from "./components/Reports/reports";
import Home from "./components/Home";
import { Wrapper } from "./context";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
      <div className="App">
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/reports" element={<Reports />} />
          
        </Routes>
        </div>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
