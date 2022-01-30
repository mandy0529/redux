import {Link} from 'react-router-dom';

function Product({id, title, category, image, price}) {
  return (
    <div key={id} className="">
      <div>
        <Link to={`/product/${id}`}>
          <img width="200" height="200" src={image} alt={title} />
        </Link>

        <div>
          <div>{title.substr(0, 10)}</div>
          <div>${price}</div>
          <div>{category}</div>
        </div>
      </div>
    </div>
  );
}

export default Product;
