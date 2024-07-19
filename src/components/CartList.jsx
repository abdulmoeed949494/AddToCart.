import "../App.css"

const CartList = ({ cart, increaseQuantity, decreaseQuantity }) => {
// const CartList = ({ cart, increaseQuantity, removeFromCart }) => {

  function handleOrderPlacement() {
      alert("Order Placed " + "Total Quantity: " + cart.map((item) => item.quantity).reduce((a, b) => a + b));
      alert("Total Price: " + cart.reduce((total, item) => total + (item.price * item.quantity), 0));
      window.location.reload();
  }

  function handleOrderCancel() {
    alert("Order quantity cannot be zero");
    window.location.reload();
  }

  function handleOrder() {
    if(cart.length == 0) {
      handleOrderCancel()
    } if(cart.length > 0) { 
      handleOrderPlacement();
    }
  }

  return (
    <div>
      {cart.map((item, index) => (
        <div key={index}>
          <img className='border-2 border-gray-400' src={item.url} width={40} alt={item.name} />
          <span className='text-green-600'> {item.name} | {item.category} </span>
          {/* <button className='text-red-600' onClick={() => removeFromCart(item.id)}>-</button> */}
          <button className='text-red-600' onClick={() => decreaseQuantity(item.id)}>-</button>
          <span> {item.quantity} </span>
          <button className='text-green-700' onClick={() => increaseQuantity(item.id)}>+</button>
          <span className='text-red-600'>Rs. {item.price * item.quantity}</span>
        </div>
      ))}
      <p className='text-blue-400 '>Total: <span>{cart.reduce((total, item) => total + (item.price * item.quantity), 0 )}</span></p>
      <button className='flex justify-center items-center bg-green-600 ml-2 text-white rounded-md w-28 h-10' onClick={handleOrder}>Order Placed</button>
    </div>
  );
};

export default CartList;

