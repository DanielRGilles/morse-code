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
      <div><Input className='flex flex-col items-center justify-center'/>
            <Output className='flex flex-col items-center justify-center'/>
      </div>
      <div></div>
    </div>
    </>
  )
}

export default App
