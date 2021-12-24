import './App.css'
import Header from './Components/Header/Header'
import Input from './Components/Input/Input'
import Output from './Components/Output/Output'

function App() {
  return (
    <>
      <Header />
    <div className='App'>
      <div></div>
      <div className='flex flex-col'>
          <Input/>
          <Output/>
      </div>
      <div></div>
    </div>
    </>
  )
}

export default App
