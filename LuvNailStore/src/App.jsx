import { useState } from 'react'
import './App.css'

import Product from './componentes/product/product'

function App() {

   const [count, setCount] = useState(0)



  return (
    <>

    <Product />
      
      
    
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       
      </div>
     
     
    </>
  )
}

export default App
