import {useContext} from 'react'

import {CartContext} from '../../context/cart.context'

import {CartIconContainer, ShoppingIcon, ItemCount} from "./cart-icon.styles"

const CartIcon = (clicked) => {
    const {isOpen, setIsOpen, cartCount} = useContext(CartContext)

    const toggleIsCartOpen = () => setIsOpen(!isOpen)

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className="shopping-icon"/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;