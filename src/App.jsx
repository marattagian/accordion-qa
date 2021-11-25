import { useState } from "react"
import Question from "./components/question"
import data from "./data"

function App() {
  const [questions, setQuestions] = useState(data)

  return (
    <div className="container">
      <h3>Questions and answers about login</h3>
      <section className="info">
        {
          questions.map((question) => (
          <Question key={question.id} {...question} />))
        }
      </section>
    </div>
  )
}

export default App
