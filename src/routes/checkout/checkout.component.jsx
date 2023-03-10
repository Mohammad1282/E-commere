import './checkout.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CartItem from '../../components/cart-item/cart-item.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { useSelector } from 'react-redux';
import { selectCartTotal, selectCartItems } from '../../store/cart/cart.selector';

const Checkout = () => {

    // const { cartItems, cartTotal } = useContext(CartContext);
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

    return(
        <div className='checkout-container'>
            <div className='checkout-header'>

                <div className='header-block'>
                    <span>Product</span>
                </div>

                <div className='header-block'>
                    <span>Desc</span>
                </div>

                <div className='header-block'>
                    <span>Qty</span>
                </div>

                <div className='header-block'>
                    <span>Price</span>
                </div>

                <div className='header-block'>
                    <span>Remove</span>
                </div>

            </div>
                {
                    cartItems.map((cartItem) => {
                        return (
                            <CheckoutItem key={ cartItem.id } cartItem={ cartItem }/>
                        );
                    })
                }
                <span className='total'>Total : ${ cartTotal }</span>
        </div>
    )
};

export default Checkout;