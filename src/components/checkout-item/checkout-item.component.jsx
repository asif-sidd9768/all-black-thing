import { useContext } from "react"
import { CartContext } from "../../context/cart.context"
import {CheckoutItemContainer, ImageContainer, Image, Name, Price, Quantity, Arrow, Value, RemoveButton} from "./checkout-item.styles"

const CheckoutItem = ({cartItem}) => {
    const {name,imageUrl, quantity, price} = cartItem
    const {removeItemOnClick, addItemToCart, removeItemToCart} = useContext(CartContext)

    const removeItemOnClickHandler = () => removeItemOnClick(cartItem)
    const addItemHandler = () => addItemToCart(cartItem)
    const removeItemHandler = () => removeItemToCart(cartItem)

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <Image src={imageUrl} alt={`${name}`}/>
            </ImageContainer>
            <Name>{name}</Name>
            <Quantity>
                <Arrow onClick={removeItemHandler}>
                    &#10094;
                </Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addItemHandler}>
                    &#10095;
                </Arrow>
            </Quantity>
            <Price>{price}</Price>
            <RemoveButton onClick={removeItemOnClickHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem;