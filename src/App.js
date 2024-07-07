// import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Grocery from "./components/Grocery";
import Nevegation from "./components/Nevegation";
import Notes from "./components/Notes";
function App() {
  const [showTitle, setShowTitle] = useState('Notes')
  const handleChange = (newValue) => {
    setShowTitle(newValue);
  };
  return <div class="bg-gray-200 h-full">
    <Nevegation showTitle={showTitle} handleChange={handleChange} />
    {showTitle === 'Notes' ?
      <Notes /> :
      <Grocery />}
  </div>;
}

export default App;
