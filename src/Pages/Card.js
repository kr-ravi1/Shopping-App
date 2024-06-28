import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Styles from "../Modules/Card.module.css";
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { addItem,deleteItem } from '../redux';

const Card = () => {
    const cardItems = useSelector((state) => state.card);
    const dispatch = useDispatch()
    const ShowCardItems = (item) => {
        return (
            <div key={item.id} className={Styles.content}>
                <div className={Styles.image}>
                    <img src={item.image } alt="itemImage"/>
                </div>
                <div className={Styles.info}>
                    <h3 className={Styles.title}>
                        {item.title}
                    </h3>
                    <div className={Styles.price}>
                        {item.quantity} * {item.price} = {item.quantity * item.price} $
                    </div>
                    <div className={Styles.incDec}>
                        <div onClick={()=>dispatch(deleteItem(item))}>
                            <IndeterminateCheckBoxIcon className={Styles.incDecBtn} ></IndeterminateCheckBoxIcon>
                        </div>
                        
                        <AddBoxIcon className={Styles.incDecBtn} onClick={()=>dispatch(addItem(item))}></AddBoxIcon>
                    </div>
                </div>
                
            </div>
        )
    }
    const emptyCard = () => {
        return (
            <div className={Styles.content}>
                <h2>Your Card is empty</h2>
            </div>
        )
    }

    return (
        <section className={Styles.cardSection}>
            {cardItems.length > 0 ? cardItems.map(ShowCardItems):emptyCard()}
        </section>
    )
}
export default Card;
