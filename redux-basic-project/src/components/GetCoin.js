import React from 'react';

function GetCoin({id, image, name, symbol, current_price}) {
  return (
    <div id={id}>
      <img width="100" height="100" src={image} alt={name} />
      <h2>{name}</h2>
      <h3>{symbol}</h3>
      <p>${current_price}</p>
      <hr />
    </div>
  );
}

export default GetCoin;
