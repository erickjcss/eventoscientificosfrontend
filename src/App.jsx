
import Formulario from './components/Formulario'
import Header from './components/Header'
function App() {
 /*  const [count, setCount] = useState(0)
 */
  return (
    <div className="container grid ">
      <Header/>
      
      <div className="formulario container h-screen mt-6  bg-black mt-10vh  min-[633px]:mx-auto  flex  justify-center ">
  
    <Formulario/>
    
    </div>
    </div>
   
  )
}

export default App