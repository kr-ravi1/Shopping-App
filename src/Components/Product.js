import React, { Fragment } from 'react';
import Styles from "../Modules/Product.module.css";
import { NavLink } from "react-router-dom";
import Star from "./Star";

const Product = ({ product }) => {
 
  return (
    <Fragment>
      <div className={Styles.card}>
          <div className={Styles.cardImage}>
            <img src={product.image} alt="cardPhoto"/>
          </div>
          <div className={Styles.content}>
              <h3>{product.title}</h3>
            <p>{product.price} $</p>
          </div>
          <div className={Styles.rating}>
          <Star rate={product.rating.rate} />
        </div>
        <div className={Styles.link}>
          <NavLink to={`/details/${product.id}`}>Details</NavLink>
        </div>
      </div>
    </Fragment>
  )
}
export default Product;
