import {useContext} from 'react'

import "./cart-icon.styles.scss"
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg"

import {CartContext} from '../../context/cart.context'

const CartIcon = (clicked) => {
    const {isOpen, setIsOpen} = useContext(CartContext)

    const toggleIsCartOpen = () => setIsOpen(!isOpen)

    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <span className="item-count">0</span>
        </div>
    )
}

export default CartIcon;