
import { useReducer, useState } from 'react'
import './App.css'
import { ProductList } from './components/ProductList'
import { Basket } from './components/Basket'
import { initialState ,reducer, UserContext} from '../context'


function App() {
  const [state, dispatch] = useReducer(reducer , initialState )
 
  
   

  return (
    <>
     <div className='row'> 

      <UserContext.Provider value={{state,dispatch}}>
        <ProductList
         />
         <Basket
         />
        
        </UserContext.Provider>
        
     
     </div>
    </>
  )
}

export default App
