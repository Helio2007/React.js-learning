import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Card = ({ title }) => {
  return(
    <div className="card">
      <h2>{title}</h2>
    </div>
  )
}

function App() {
return(
  <div className="card-container">
  <Card title="Star Wars"></Card>
  <Card title="Avatar"></Card>
  <Card title="The Lion King"></Card>
  </div>
)  
}



export default App
