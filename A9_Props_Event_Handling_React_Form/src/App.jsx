import { useState } from 'react'
import './App.css'
// import Card from './components/Card'
import List from './components/List'
import TypeMe from './components/TypeMe'
import MyForm from './components/MyForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Card/> */}
      <List/>
      <TypeMe/>
      <MyForm/>
    </div>
  )
}

export default App