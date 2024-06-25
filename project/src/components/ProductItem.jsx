import { useContext } from "react"
import { UserContext } from "../../context"

export const ProductItem = ({title,id,price,photo}) => {
    const { dispatch } = useContext(UserContext)
    
    return <div>
        <h3>Product item</h3>
        <img src={photo} />
        <p>{title}</p>
        <p><strong>{price}USD</strong></p>
       
        <button onClick={ () => dispatch({type:"MOVE" , payload: { id}})}>Add to basket</button>
    </div>
}