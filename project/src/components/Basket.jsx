import { useContext } from "react"
import { UserContext } from "../../context"
import { BasketItem } from "./BasketItem"

export const Basket = () => {
    const { state: {basket} ,state:{total}} = useContext(UserContext)
  
   
   return <div>
        <h3>Basket</h3>
       
        <table>
            <thead>
                <tr>
                    <th>product</th>
                    <th>price</th>
                    <th>count</th>
                    <th>subtotal</th>
                    <th>actions</th>

                </tr>
            </thead>
            <tbody>
                {
                    basket.map(elm =><BasketItem key ={elm.id} {...elm} />)
                }

            </tbody>
        </table>
        <h3>Total {total}AMD</h3>
    </div>
}