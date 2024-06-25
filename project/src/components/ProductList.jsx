import { useContext } from "react"
import { ProductItem } from "./ProductItem"
import { UserContext } from "../../context"

export const ProductList = () => {
    const { state: {items} } = useContext(UserContext)
    return <div>
        <h3>Product list</h3>
        <div className = "list">
            {
                items.map(elm => <ProductItem key ={elm.id} {...elm} />)
            }
        </div>
    </div>
}