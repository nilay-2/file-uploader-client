import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Upload from "./components/Upload";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/uploadFile" exact element={<Upload />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
