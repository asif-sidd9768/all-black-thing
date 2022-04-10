import { Fragment,useContext } from 'react';
import {Outlet, Link} from 'react-router-dom';

import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import { UserContext } from '../../context/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import { CartContext } from '../../context/cart.context';

import {NavigationContainer, NavLinks, NavLink, LogoContainer} from "./navigation.styles"

const Navigation = () => {
    const { currentUser } = useContext(UserContext)
    const { isOpen } = useContext(CartContext)

    const signOutHandler = async () => {
        await signOutUser()
    }

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <CrwnLogo className="logo" />
                </LogoContainer>                
                <NavLinks>
                    <NavLink to="/shop">
                        SHOP
                    </NavLink>
                    {
                        currentUser ? (
                            <NavLink as='span' onClick={signOutHandler}>SIGN OUT</NavLink>
                        ): (
                            <NavLink to="/auth">
                                SIGN IN
                            </NavLink>
                        )
                    }
                    <CartIcon onClick={() => {
                        
                    }} />
                </NavLinks>
                {isOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;