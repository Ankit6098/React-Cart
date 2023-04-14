import React from "react";

class CartItem extends React.Component {
  
  // constructor() {
  //   super();
  //   this.state = {
  //     discountPrice: "₹ 1,29,900",
  //     price: "₹ 1,49,900",
  //     title: "iPhone 13",
  //     discountPrecentage: "13% off",
  //     qty: 1,
  //     spec1: "128GB Storage",
  //     spec2: "15.40 cm or 13.76 cm Super Retina XDR display footnote¹",
  //     spec3: "A15 Bionic chip",
  //     spec4: "IP68 water resistance",
  //     spec5: "Ceramic Shield with 4x better drop performance",
  //     img: "",
  //   };
  //   // this.increaseQuantity = this.increaseQuantity.bind(this);
  // }

  increaseQuantity = () => {
    this.setState({
      qty: this.state.qty + 1,
    });
  };

  decreaseQuantity = () => {
    const { qty } = this.state;
    if (qty === 1) {
      return;
    }

    this.setState({
      qty: this.state.qty - 1,
    });
  };

  render() {
    console.log(this.props);
    const { discountPrice, price, title, discountPrecentage,  qty, spec1, spec2, spec3, spec4, spec5 } = this.props.product;
    return (
      <div className="card">
        <div className="product-image-container">
          <img className="product-image" src="https://m.media-amazon.com/images/I/71X6mnUDSzL._SX679_.jpg"></img>
        </div>
        <div className="product-details">
          <div className="product-title">{title}</div>
          <ul type="dot">
            <li>
              <div className="specification">{spec1}</div>
            </li>
            <li>
              <div className="specification">{spec2}</div>
            </li>
            <li>
              <div className="specification">{spec3}</div>
            </li>
            <li>
              <div className="specification">{spec4}</div>
            </li>
            <li>
              <div className="specification">{spec5}</div>
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
            <div className="product-price">{discountPrice}</div>
            <div className="product-discount">{price}</div>
          </div>
          <div className="product-discount-percentage">{discountPrecentage}</div>
        </div>
        <div className="product-quantity-container">
          <div className="product-quantity-price">{discountPrice}</div>
          <img className="product-quantity-increase" src="https://cdn-icons-png.flaticon.com/512/3032/3032276.png" onClick={this.increaseQuantity}></img>
          <div className="product-quantity">{qty}</div>
          <img className="product-quantity-decrease" src="https://cdn-icons-png.flaticon.com/512/3032/3032280.png" onClick={this.decreaseQuantity}></img>
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