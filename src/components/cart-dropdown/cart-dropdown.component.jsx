import { useContext } from "react";
import Button from "../button/button.component";
import {useNavigate} from 'react-router-dom';
import CartItem from "../cart-item/cart-item.component";

import { CartContext } from "../../context/cart.context";

import {CartDropdownContainer, CartItems, EmptyMessage} from "./cart-dropdown.styles"

const CartDropdown = () => {
    const {cartItems, isOpen, setIsOpen} = useContext(CartContext);
    const navigate = useNavigate()

    const goToCheckout = () => {
        navigate('./checkout')
        setIsOpen(false)
    }

    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ? (cartItems.map((item) => (
                        <CartItem key={item.id} cartItem={item} />
                    ))): (
                        <EmptyMessage>Your cart is empty</EmptyMessage>
                    )
                }

            </CartItems>
            <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown;