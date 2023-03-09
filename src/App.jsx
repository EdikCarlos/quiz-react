import './App.css'
import Welcome from './components/Welcome'
import { useContext } from 'react'
import { QuizContext } from './context/quiz'

function App() {
  const quizTitle = useContext(QuizContext);

  return (
    <div className="App">
      <h1>{quizTitle.title}</h1>
      <Welcome />
    </div>
  )
}

export default App
