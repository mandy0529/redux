function Product({id, title, category, image, price}) {
  return (
    <div key={id} className="">
      <div>
        <img width="200" height="200" src={image} alt={title} />
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
