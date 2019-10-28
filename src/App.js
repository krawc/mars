import React from 'react';
import './App.css';

let shoppingCartItems = [
  {
    item: 'War and Peace',
    image: 'https://images4.penguinrandomhouse.com/cover/9781400079988',
    description: 'War and Peace broadly focuses on Napoleon’s invasion of Russia in 1812 and follows three of the most well-known characters in literature',
    price: 29,
    link: "https://en.wikipedia.org/wiki/War_and_Peace"
  },
  {
    item: 'Space Jam soundtrack',
    image: 'https://upload.wikimedia.org/wikipedia/en/1/12/Space_Jam_Soundtrack_Album_Cover.jpg',
    description: 'Chill 90s beats to sleep / study / oxidize plants to',
    price: 100,
    link: "https://www.spacejam.com/"
  },
  {
    item: 'David Bowie - Ziggy Stardust',
    image: 'https://images-na.ssl-images-amazon.com/images/I/81eVnOh4UJL._SX522_.jpg',
    description: 'Take it to Mars, give David the answer.',
    price: 29,
    link: "https://en.wikipedia.org/wiki/The_Rise_and_Fall_of_Ziggy_Stardust_and_the_Spiders_from_Mars"
  },
  {
    item: 'A potato',
    image: 'https://assets.shop.loblaws.ca/products_jpeg/20127708001/en/20127708001_lrg_1_@1x.jpg',
    description: 'Excellent for cultivation on the Martian soil.',
    price: 3,
    link: "https://en.wikipedia.org/wiki/Potato"
  }
]

function App() {

  return (
    <div className="App">
      <h1>Your Shopping Cart</h1>
     <SearchForm />
     <ShoppingCart />
    </div>
  );

}

function ShoppingCart() {

  const displayProducts = shoppingCartItems.map(function(item) {
    return(
      <Product image={item.image} title={item.item} description={item.description} price={item.price} link={item.link} />
    )
  });

  return(
    <div className="cart">
      {displayProducts}
    </div>
  );
}

function Product(props) {
  return(
    <div className="product">
      <a href={props.link}>
        <img src={props.image} width="100"/>
        <p className="product-title">{props.title}</p>
        <p className="product-description">{props.description}</p>
        <p className="product-price">${props.price}</p>
      </a>
    </div>
  )
}

function SearchForm() {
  return(
    <form>
      <label>
        Search:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default App;