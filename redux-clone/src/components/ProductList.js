import axios from 'axios';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setProduct} from '../redux/actions/productAction';
import Product from './Product';

function ProductList() {
  const {allProducts} = useSelector((state) => state);
  const {items} = allProducts;

  const dispatch = useDispatch();

  const fetchData = async () => {
    const {data} = await axios
      .get('https://fakestoreapi.com/products')
      .catch((error) => console.log(error));
    dispatch(setProduct(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(items, 'products');
  return (
    <div className="ui grid container">
      <h1>product list</h1>
      {items &&
        items.map((item) => {
          console.log(item);
          return <Product key={item.id} {...item} />;
        })}
    </div>
  );
}

export default ProductList;
