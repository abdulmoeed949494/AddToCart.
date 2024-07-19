import "../App.css"
const ProductList = ({ products, addToCart, cart }) => {
  return (
    <div className="flex">
      {products.map(product => (
        <div key={product.id} style={{ width: '50%' }}>
          <div className='product-item'>
            <img src={product.url} width="100%" className='image' alt={product.name} />
            <p className="name">{product.name} | {product.category}</p>
            <p className="seller">{product.seller}</p>
            <p className="price"> Rs. {product.price} /-</p>
            <button className="btn" onClick={() => addToCart(product)}>Add To Cart</button>
            <p>Quantity: {cart.find(item => item.id === product.id)?.quantity || 0}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList; 

