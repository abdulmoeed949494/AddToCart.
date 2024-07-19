import { useState } from 'react';
import ProductList from './components/ProductList';
import Header from './components/Header';
import CartList from './components/CartList';

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      url: "https://5.imimg.com/data5/SELLER/Default/2023/2/RD/LE/FP/184929171/bruton-shoes-for-exclusive-trendy-casual-sports-shoes-for-men-running-shoes-for-men-black-red--500x500.jpg",
      name: "TRQ Shoes",
      category: "Shoes",
      seller: "AMZ",
      price: 1999,
    },
    {
      id: 2,
      url: "https://importedgear.pk/cdn/shop/files/1686858773689.png?v=1686858725&width=600",
      name: "TRQ Watch",
      category: "Watch",
      seller: "AMZ",
      price: 2599,
    },
    {
      id: 3,
      url: "https://www.hp.com/us-en/shop/app/assets/images/uploads/prod/HP%20Pavilion%20Laptop%20151680104202881838.jpg?impolicy=prdimg&imdensity=1&imwidth=600",
      name: "TRQ Laptop",
      category: "Laptop",
      seller: "AMZ",
      price: "69999",
    },
    {
      id: 4,
      url: "https://www.agri-linc.com/media/catalog/product/h/a/ha501951_1.png?optimize=low&bg-color=255,255,255&fit=bounds&height=470&width=600&canvas=600:470&format=jpeg",
      name: "TRQ Security Camera",
      category: "Security Camera",
      seller: "AMZ",
      price: "7999",
    },
    {
      id: 5,
      url: "https://doxawatches.com/cdn/shop/files/aquamarine-833412.jpg?v=1717526653&width=1881",
      name: "TRQ Watch",
      category: "Watch",
      seller: "AMZ",
      price: "13999",
    },
    {
      id: 6,
      url: "https://nestasia.in/cdn/shop/files/Greencoffeemugs_1.jpg?v=1699363178&width=600",
      name: "TRQ Mug",
      category: "Mug",
      seller: "AMZ",
      price: "3599",
    },
  ]);

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  //   const addToCart = (data) => {
  //   setCart([...cart, {...data, quantity: 1}])
  // }

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      const updatedCart = cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (id) => {
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  // const decreaseQuantity = (id) => {
  //   const updatedCart = cart.filter((item) =>
  //     item.id === id ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : cart.filter((item) => item.id >= 0 ? item.id : cart )} : item
  //   // item.id === id ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
  //   );
  //   setCart(updatedCart);
  // };

  // const decreaseQuantity = (id) => {
  //   const updatedCart = cart.filter((item) => 
  //     item.id === id ? {...item, quantity: item.quantity > 0 ? item.quantity - 1 : item.id >= 1 ? item.id : cart} : item);
  //   setCart(updatedCart);
  // };


    // jab quanity kam hogi tb tb check krna he k
    // kia is product ki quanity 1 ya 1 se choti he
    // to yahan pr cart ko filter krna he 
    // us product ko cart se remove krna he
    // warna us product ki quantity me se ak quantity ko decrease kr do

    const decreaseQuantity = (id) => {
      const p = cart.find(i => i.id === id);
      if (p.quantity === 1) {
        
        const updatedCart = cart.filter((item) => item.id != id);
        setCart(updatedCart);
      } else {

        const updatedCart = cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
        setCart(updatedCart);
      }
      //   const updatedCart = cart.map((item) => 
      // item.id === id ? {...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item)
      //   setCart(updatedCart);
    }

  const handleShow = (value) => {
    setShowCart(value);
  };


  return (
    <div>
      <Header count={cart.length} handleShow={handleShow} />
      {showCart ? (
        <CartList cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />
        // <CartList cart={cart} increaseQuantity={increaseQuantity} removeFromCart={removeFromCart}/>
      ) : (
        <ProductList products={products} addToCart={addToCart} cart={cart} />
      )}
    </div>
  );
};

export default App;































// import { useState } from 'react';
// import ProductList from './components/ProductList';
// import Header from './components/Header';
// import CartList from './components/CartList';

// const App = () => {
//   const [products, setProducts] = useState([
//     {
//       id: 1,
//       url: "https://5.imimg.com/data5/SELLER/Default/2023/2/RD/LE/FP/184929171/bruton-shoes-for-exclusive-trendy-casual-sports-shoes-for-men-running-shoes-for-men-black-red--500x500.jpg",
//       name: "TRQ Shoes",
//       category: "Shoes",
//       seller: "AMZ",
//       price: 1999,
//     },
//     {
//       id: 2,
//       url: "https://importedgear.pk/cdn/shop/files/1686858773689.png?v=1686858725&width=600",
//       name: "TRQ Watch",
//       category: "Watch",
//       seller: "AMZ",
//       price: 2599,
//     },
//     {
//       id: 3,
//       url: "https://www.hp.com/us-en/shop/app/assets/images/uploads/prod/HP%20Pavilion%20Laptop%20151680104202881838.jpg?impolicy=prdimg&imdensity=1&imwidth=600",
//       name: "TRQ Laptop",
//       category: "Laptop",
//       seller: "AMZ",
//       price: "69999",
//     },
//     {
//       id: 4,
//       url: "https://www.agri-linc.com/media/catalog/product/h/a/ha501951_1.png?optimize=low&bg-color=255,255,255&fit=bounds&height=470&width=600&canvas=600:470&format=jpeg",
//       name: "TRQ Security Camera",
//       category: "Security Camera",
//       seller: "AMZ",
//       price: "7999",
//     },
//     {
//       id: 5,
//       url: "https://doxawatches.com/cdn/shop/files/aquamarine-833412.jpg?v=1717526653&width=1881",
//       name: "TRQ Watch",
//       category: "Watch",
//       seller: "AMZ",
//       price: "13999",
//     },
//     {
//       id: 6,
//       url: "https://nestasia.in/cdn/shop/files/Greencoffeemugs_1.jpg?v=1699363178&width=600",
//       name: "TRQ Mug",
//       category: "Mug",
//       seller: "AMZ",
//       price: "3599",
//     },
//   ]);

//   const [cart, setCart] = useState([]);
//   const [showCart, setShowCart] = useState(false);

//   //   const addToCart = (data) => {
//   //   setCart([...cart, {...data, quantity: 1}])
//   // }

//   const addToCart = (product) => {
//     const existingItem = cart.find(item => item.id === product.id);

//     if (existingItem) {
//       const updatedCart = cart.map(item =>
//         item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//       );
//       setCart(updatedCart);
//     } else {
//       setCart([...cart, { ...product, quantity: 1 }]);
//     }
//   };

//   const increaseQuantity = (id) => {
//     const updatedCart = cart.map(item =>
//       item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//     );
//     setCart(updatedCart);
//   };

//   // const decreaseQuantity = (id) => {
//   //   const updatedCart = cart.filter((item) =>
//   //     item.id === id ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : cart.filter((item) => item.id >= 0 ? item.id : cart )} : item
//   //   // item.id === id ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
//   //   );
//   //   setCart(updatedCart);
//   // };

//   // const decreaseQuantity = (id) => {
//   //   const updatedCart = cart.filter((item) => 
//   //     item.id === id ? {...item, quantity: item.quantity > 0 ? item.quantity - 1 : item.id >= 1 ? item.id : cart} : item);
//   //   setCart(updatedCart);
//   // };

//   const decreaseQuantity = (id) => {
//     const updatedCart = cart.map(item =>
//       item.id === id ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
//     );
//     if(updatedCart) {
//       setCart(updatedCart);
//     } else {
//       const updatedCart = cart.filter((item) =>
//           item.id >= 1 ? item.id : cart 
//         )
//       setCart(updatedCart)
//     }
//   } 

//   const handleShow = (value) => {
//     setShowCart(value);
//   };


//   return (
//     <div>
//       <Header count={cart.length} handleShow={handleShow} />
//       {showCart ? (
//         <CartList cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />
//         // <CartList cart={cart} increaseQuantity={increaseQuantity} removeFromCart={removeFromCart}/>
//       ) : (
//         <ProductList products={products} addToCart={addToCart} cart={cart} />
//       )}
//     </div>
//   );
// };

// export default App;

