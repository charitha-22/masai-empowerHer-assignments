import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import VideoPlayer from './VideoPlayer'
import MultiVideoPlayer from './MultiVideoPlayer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <VideoPlayer />
      <MultiVideoPlayer />
    </>
  )
}

export default App
