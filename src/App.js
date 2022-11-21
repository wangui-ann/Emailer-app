import React from "react";
import { Routes, Route} from "react-router-dom";
//import Form from "./components/Form";
import Form2 from "./components/Form2";



function App() {
  return (
    <div>
      <Routes>
        
        <Route path="" element={<Form2 />} />
      </Routes>
    </div>
  );
}

export default App;
