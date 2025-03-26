import Header from "./components/Header.tsx";
import goalsImg from "./assets/goals.jpg";
import CourseGoals from "./components/CourseGoals.tsx";
import { useState } from "react";

function App() {

  const [goals, setGoals] = useState([
    {
      id: 1,
      title: "Learn TS",
      description: "Learn TS from the ground up",
    },
    {
      id: 2,
      title: "Learn React",
      description: "Learn React from the ground up",
    },
  ]);

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter(g => g.id !== id));
  }
  
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <CourseGoals
        goals={goals} onDelete={handleDeleteGoal}
      />
    </main>
  );
}

export default App;
