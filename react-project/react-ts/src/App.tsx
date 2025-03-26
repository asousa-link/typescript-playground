import Header from './components/Header.tsx';
import goalsImg from './assets/goals.jpg'

function App() {

  return (
    <main>
      <Header image={{src: goalsImg, alt: "A list of goals"}}/>
    </main>
  );
}

export default App
