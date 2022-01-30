import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import axios from 'axios';

function Product() {
  const products = useSelector((state) => state);
  console.log(products, 'products');

  const fetchData = async () => {
    const {data} = await axios('https://fakestoreapi.com/products');
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="four column wide">
      <div className="ui link cards">
        <div className="card">
          <div className="image">
            <div className="content">
              <div className="header"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
