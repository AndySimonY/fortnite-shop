import { BasketItem } from './BasketItem';
import {useContext} from 'react'
import { ShopContext } from '../context';
function BasketList() {
    const {
        order = [],
        handleBasketShow = Function.prototype,
        sendOrder = Function.prototype
    } = useContext(ShopContext)



    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0);

    const handleSendOrder = () =>{
        if (totalPrice>0){
        alert(`Заказ отправлен по вашему IP, оплата при получении(${totalPrice} руб)`);
        sendOrder()
        }else{
        sendOrder()  
        }
    }

    return (
        <ul className='collection basket-list'>
            <li className='collection-item active'>Корзина</li>
            {order.length ? (
                order.map((item) => (
                    <BasketItem
                        key={item.id}
                        {...item}
                    />
                ))
            ) : (
                <li className='collection-item'>Корзина пуста</li>
            )}
            <li className='collection-item active'>
                Общая стоимость: {totalPrice} руб.
            </li>
            <li className='collection-item'>
                
                <button onClick={
                    handleSendOrder
                    } className='btn btn-small'>Оформить</button>
            </li>
            <i
                className='material-icons basket-close'
                onClick={handleBasketShow}
            >
                close
            </i>
        </ul>
    );
}

export { BasketList };
