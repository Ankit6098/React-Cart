import React from "react";

class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      price: 999,
      title: "Mobile Phone",
      qty: 1,
      img: "",
    };
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  }

  render() {
    const { price, title, qty } = this.state;
    return (
      <div className="card">
        <div className="product-image-container">
          <img className="product-image" src="https://m.media-amazon.com/images/I/71X6mnUDSzL._SX679_.jpg"></img>
        </div>
        <div className="product-details">
          <div className="product-title">iPhone 13</div>
          <ul type="dot">
            <li>
              <div className="specification">128GB Storage</div>
            </li>
            <li>
              <div className="specification">15.40 cm or 13.76 cm Super Retina XDR display footnote¹</div>
            </li>
            <li>
              <div className="specification">A15 Bionic chip</div>
            </li>
            <li>
              <div className="specification">IP68 water resistance</div>
            </li>
            <li>
              <div className="specification">Ceramic Shield with 4x better drop performance</div>
            </li>
          </ul>
          <div className="product-colors">
            <div className="color1"></div>
            <div className="color2"></div>
            <div className="color3"></div>
          </div>
        </div>
        <div className="product-price-container">
          <div className="price-title">
            <div className="product-price">₹ 1,29,900</div>
            <div className="product-discount">₹ 1,49,900</div>
          </div>
          <div className="product-discount-percentage">13% off</div>
        </div>
        <div className="product-quantity-container">
          <div className="product-quantity-price">₹ 1,29,900</div>
          <img className="product-quantity-increase" src="https://cdn-icons-png.flaticon.com/512/399/399271.png"></img>
          <div className="product-quantity">1</div>
          <img className="product-quantity-decrease" src="https://cdn-icons-png.flaticon.com/512/929/929430.png"></img>
        </div>
        <div className="product-remove-container">
          <div>
            <img className="product-remove" src="https://cdn-icons-png.flaticon.com/512/6460/6460112.png"></img>
          </div>
        </div>
      </div>
    );
  }
}

// const styles = {
//     image: {
//         height: 110,
//         width: 110,
//         borderRadius: 4,
//         background: '#ccc'
//     }
// }

export default CartItem;