import Header from './Components/Header'
import './App.css'
import ItemContextProvider from './Context/ItemContextProvider'
import Main from './Components/Main'

function App() {
  

  return (
    <ItemContextProvider>
   
   <Header/>
   <Main/>
    </ItemContextProvider>
  )
}

export default App
