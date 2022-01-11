import "./App.css";
import MenuBar from "./components/MenuBar";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [cartNum, setCartNum] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Nike Blazer Mid '77 Jumbo",
      url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/336b31a9-12a2-49a1-b303-8d2947963d08/blazer-mid-77-jumbo-shoes-g1NlvJ.png",
      description:
        "Praised by many for its enduring look and feel, the wardrobe staple hits refresh with the Nike Blazer Mid '77 Jumbo.Harnessing the old-school look you love, it now has an elastic heel with corduroy-like texture and large pull tabs for easy on and off.The oversized Swoosh design and jumbo laces add a fun twist.",
      price: "€ 109.95",
      amount: 0,
    },
    {
      id: 2,
      title: "Nike Air Huarache LE",
      url: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6cde991a-a3b7-4c61-8872-44ea8d5f8774/air-huarache-le-shoes-QlwJ8N.png",
      description:
        "Built to fit your foot and designed for comfort, the Nike Air Huarache LE brings back a street-level favourite.Crisp leather on the upper is mixed with super-breathable, perfectly shined neoprene-like fabric for easy styling.The iconic heel clip and stripped away branding keep the early '90s look you love.",
      price: "€ 129.99",
      amount: 0,
    },
    {
      id: 3,
      title: "Nike Air Force 1 Low '07",
      url: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/69a820fe-9ac4-417f-a0b9-b4f44a408281/air-force-1-low-07-shoes-kGqrWx.png",
      description:
        "The radiance lives on in the Nike Air Force 1 Low '07, the b-ball icon that puts a fresh spin on what you know best: crisp leather, bold colours and the perfect amount of flash to make you shine. Water-repellent Cordura fabric makes these kicks your favourites on rainy days.",
      price: "€ 119.15",
      amount: 0,
    },
    {
      id: 4,
      title: "Nike Air Force 1 '07",
      url: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a5fbfbd7-ca76-4703-83a3-fcc9f82f7255/air-force-1-07-shoes-TjhXcv.png",
      description:
        "The radiance lives on in the Nike Air Force 1 '07, the b-ball original that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine. Multiple Swoosh logos on the side let you show your love for the brand.",
      price: "€ 122.14",
      amount: 0,
    },
    {
      id: 5,
      title: "Nike Air Max 90",
      url: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/65d02ab6-19ed-4635-81f2-569be3333ae4/air-max-90-shoes-S8L0TL.png",
      description:
        "Nothing as fly, nothing as comfortable, nothing as proven—the Nike Air Max 90 stays true to its roots with the iconic Waffle sole, stitched overlays and classic TPU accents.Fresh materials update the design while Max Air cushioning adds comfort to your journey.",
      price: "€ 136.75",
      amount: 0,
    },
    {
      id: 6,
      title: "Nike Blazer Mid '77 EMB",
      url: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ef7dcf5f-d1b6-49ed-9a45-658b4ed2fd32/blazer-mid-77-emb-shoe-NHbPq7.png",
      description:
        "From the class of '77, the quintessential wardrobe staple returns to honour the 75th anniversary of the league.Put your hands together for the Nike Blazer Mid '77.",
      price: "€ 99.54",
      amount: 0,
    },
  ]);

  function refreshCart() {
    let newProducts = products.filter((prod) => prod.amount > 0);
    setCartProducts(newProducts);
  }
  function addProduct(title, id) {
    setCartNum(cartNum + 1);
    console.log("Br proizvoda u korpi: " + cartNum);
    products.forEach((prod) => {
      if (prod.id === id) {
        prod.amount++;
      }
    });
    refreshCart();
  }

  return (
    <BrowserRouter className="App">
      <Routes>
        <Route
          path="/shop"
          element={
            <>
              <MenuBar cartNum={cartNum} isHome={0} isShop={1} />,
              <Shop products={products} onAdd={addProduct} />
            </>
          }
        />
        <Route path="/" element={<MenuBar cartNum={cartNum} isHome={1} />} />
        <Route
          path="/cart"
          element={
            <>
              <MenuBar cartNum={cartNum} isHome={0} />,
              <Cart products={cartProducts} />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
