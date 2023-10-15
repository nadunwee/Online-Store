import { Fragment, useState } from "react";

import Card from "../UI/Card";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

function Products() {
  const [products, setProducts] = useState([]);

  async function fetchDataHandler() {
    const response = await fetch("https://dummyjson.com/products?limit=4");
    const data = await response.json();
    const transformedData = data.products.map((productData) => {
      return {
        id: productData.id,
        description: productData.description,
        name: productData.title,
        price: productData.price,
      };
    });
    setProducts(transformedData);
  }

  return (
    <Fragment>
      <section className={classes.items}>
        {products.map((item) => (
          <Card key={item.id}>
            <ProductItem
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          </Card>
        ))}
      </section>
      <button onClick={fetchDataHandler}>Fetch Data</button>
    </Fragment>
  );
}

export default Products;
