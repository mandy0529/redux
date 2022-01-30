import axios from 'axios';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {
  removeSelectedProduct,
  selectedProduct,
} from '../redux/actions/productAction';

function ProductDetail() {
  const {id: productId} = useParams();
  const dispatch = useDispatch();
  const {singleItem} = useSelector((state) => state.singleProduct);

  const fetchSingleData = async () => {
    const {data} = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((error) => console.log(error));
    dispatch(selectedProduct(data));
  };

  useEffect(() => {
    if (productId && productId !== '') fetchSingleData();
    return () => dispatch(removeSelectedProduct());
  }, [productId]);

  if (Object.keys(singleItem).length === 0) {
    return <h1>...loading</h1>;
  }

  const {category, description, image, price, title} = singleItem;

  return (
    <div>
      <img width="200" height="200" src={image} alt={title} />
      <div>
        <h2>{title}</h2>
        <h3>{category}</h3>
        <p>{description.substr(0, 30)}...</p>
        <h4>${price}</h4>
      </div>
    </div>
  );
}

export default ProductDetail;
