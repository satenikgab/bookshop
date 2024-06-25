import { useContext } from "react"
import { UserContext } from "../../context"

export const BasketItem = ({title,price,count,subtotal,id}) => {
    const { dispatch } = useContext(UserContext)
   
    
    return <tr>
       
        <td>{title}</td>
        <td>{price}</td>
        <td>{count}</td>
        <td>{subtotal}</td>
        <td>
            <button onClick={() =>dispatch({type:"ADD", payload: {id}})}>+</button>
            <button onClick={() => dispatch({type:"DECREASE" , payload: {id}})}>-</button>
            <button onClick={() => dispatch({type:"DELETE" , payload: {id}})}>x</button>
            
        </td>
    </tr>
}