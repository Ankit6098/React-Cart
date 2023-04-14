import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    id: 1,
                    discountPrice: "₹ 52,000",
                    price: "₹ 59,000",
                    title: "iPhone 12",
                    discountPrecentage: "13% off",
                    qty: 1,
                    spec1: "64GB Storage",
                    spec2: "15.40 cm or 13.76 cm Super Retina XDR display footnote¹",
                    spec3: "A14 Bionic chip",
                    spec4: "IP68 water resistance",
                    spec5: "Ceramic Shield with 4x better drop performance",
                    img: "",
                },
                {
                    id: 2,
                    discountPrice: "₹ 62,000",
                    price: "₹ 69,000",
                    title: "iPhone 13",
                    discountPrecentage: "13% off",
                    qty: 1,
                    spec1: "128GB Storage",
                    spec2: "15.40 cm or 13.76 cm Super Retina XDR display footnote¹",
                    spec3: "A15 Bionic chip",
                    spec4: "IP68 water resistance and dust resistance",
                    spec5: "Ceramic Shield with 4x better drop performance",
                    img: "",
                },
                {
                    id: 3,
                    discountPrice: "₹ 1,29,900",
                    price: "₹ 1,49,900",
                    title: "iPhone 14",
                    discountPrecentage: "13% off",
                    qty: 1,
                    spec1: "256GB Storage",
                    spec2: "15.40 cm or 13.76 cm Super Retina XDR display footnote¹",
                    spec3: "A15 Bionic chip",
                    spec4: "IP68 water resistance and dust resistance",
                    spec5: "Ceramic Shield with 4x better drop performance",
                    img: "",
                },
            ],
        };
    }

    render() {
        const { products } = this.state;
        return (
            <div className="card-container">
                {products.map((product) => {
                    return <CartItem 
                        product={product} 
                        key={product.id} 
                    />;
                })}
            </div>
        );
    }
}

export default Cart;