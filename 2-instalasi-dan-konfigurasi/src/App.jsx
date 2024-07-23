/** @format */

import { useState } from "react";
import Header from "./components/Header";

function App() {
  // Component & Props
  const students = ["Sandhika Galih", "Doddy", "Erik"];
  const [likes, setLikes] = useState(0);

  // State
  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <>
      <Header author="Naufal Harits" />
      <Header author="Sandhika Galih" />
      <Header />
      <ul>
        {students.map((student) => (
          <li key={student}>{student}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Like({likes})</button>
    </>
  );
}

export default App;
