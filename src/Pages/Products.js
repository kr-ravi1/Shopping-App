import React,{useEffect,Fragment} from 'react';
import axios from "axios";
import { useState } from 'react';
import FilterTool from '../Components/FilterTool';
import Styles from "../Modules/ProductsList.module.css";
import Product from '../Components/Product';
import Skeleton from 'react-loading-skeleton';
import Footer from "../Components/Footer";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        fitchData();
    }, [])
    
    const fitchData =  () => {
        axios.get("https://fakestoreapi.com/products")
            .then(resp => {
                setProducts(resp.data)
                setFilter(resp.data)
                console.log(resp)
            })
            .catch(erro => console.log(erro))
            .finally(()=>setLoading(true))
            
    }
    const showProducts = filter.map((product) => (
            
            <Product key={product.id} product={product}/>
    ))

    const filterProducts = (keyWord) => {
        if (keyWord === "All")
            {
            setFilter(products);
            }
        else
            {
            const newProducts = products.filter((item) =>
            item.category === keyWord
        );
        setFilter(newProducts);
            }
    }

    const emptyList = () => {
        return (
            <div className={Styles.skeleton}>
                <Skeleton width={200} height={200} />
                <Skeleton width={200} height={200} />
                <Skeleton width={200} height={200} />
            </div>
        )
    }
    return (
        <Fragment>
            <div className='container'>
                <div className={Styles.header}>
                    <h2>Latest Products</h2>
                </div>
                <FilterTool filterHandller={filterProducts} />
                    {!loading && emptyList()  }
                <div className={Styles.content}>
                    {loading && showProducts  } 
                </div>
            </div>
            <Footer/>
        </Fragment>
    )
}
export default Products
