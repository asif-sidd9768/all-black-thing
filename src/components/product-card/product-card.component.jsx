import { useContext } from "react"
import Button, {BUTTON_TYPES_CLASSES} from "../button/button.component";

import { CartContext } from "../../context/cart.context";

import {ProductCardContainer, Image, Footer, Name, Price} from "./product-card.styles.jsx"

const ProductCard = ({product}) => { 
    const {name, price, imageUrl} = product;
    const {addItemToCart} = useContext(CartContext);

    const addProductToCart = () => {
        addItemToCart(product);
    }

    return (
        <ProductCardContainer>
            <Image alt={`${name}`} src={imageUrl}/>
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <Button buttonType={BUTTON_TYPES_CLASSES.inverted} onClick={addProductToCart}>Add to cart</Button>
        </ProductCardContainer>
    )
}

export default ProductCard;