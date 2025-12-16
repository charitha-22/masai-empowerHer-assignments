import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MessageCard from './MessageCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <MessageCard
        title="Welcome"
        message="Welcome to the React application."
      />

      <MessageCard
        title="Success"
        message="Your data has been saved successfully."
      />

      <MessageCard
        title="Warning"
        message="Please fill all required fields."
      />

      <MessageCard
        title="Error"
        message="Something went wrong. Try again later."
        />
    </>
  )
}

export default App
