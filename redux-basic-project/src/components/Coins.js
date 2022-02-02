import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getData} from '../redux/actions/CoinAction';
import {API_ENDPOINT} from '../utils/helper';
import GetCoin from './GetCoin';

function Coins() {
  const dispatch = useDispatch();
  const {
    data: {coin},
  } = useSelector((state) => state);

  const fetchData = async () => {
    const response = await fetch(API_ENDPOINT);
    const data = await response.json();
    dispatch(getData(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>coins</h1>
      {coin.map((item) => (
        <GetCoin key={item.id} {...item} />
      ))}
    </div>
  );
}

export default Coins;
