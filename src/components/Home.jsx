import React from "react";
import toast from 'react-hot-toast'
import { useDispatch } from "react-redux";
const Home = () => {
  const img1 =
    "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
  const img2 =
    "https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260";

  const products = [
    {
      id: 787493274,
      name: "Mac Book",
      price: "1200",
      imgSrc: img1,
    },
    {
      id: 23490840,
      name: "Black Shoes",
      price: "400",
      imgSrc: img2,
    },
  ];
  const dispatch = useDispatch();
  function cartHandler(options) {
    dispatch({type:"addToCart",payload:options});
    toast.success("Added To Cart");
    dispatch({type:"calcPrice",payload:null})
  }
  return (
    <div className="home">
      {products.map((objitem) => {
        return (
          <ProductCard
            name={objitem.name}
            price={objitem.price}
            id={objitem.id}
            imgSrc={objitem.imgSrc}
            handler={cartHandler}
          />
        );
      })}
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productcard">
    <img src={imgSrc} alt="product " />
    <p>{name}</p>
    <h4>${price}</h4>
    <button
      onClick={() =>
        handler({
          name,
          id,
          price,
          quantity: 1,
          imgSrc,
        })
      }
    >
      Add to Cart
    </button>
  </div>
);

export default Home;
