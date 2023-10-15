import { Fragment, useEffect, useState } from "react";

import Card from "../UI/Card";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDataHandler();
  }, []);

  async function fetchDataHandler() {
    try {
      setIsLoading(true);
      const response = await fetch("https://dummyjson.com/products?limit=4");

      if (!response.ok) {
        throw new Error("Custom Error Message");
      }

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
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }

  const productItem = products.map((item) => (
    <Card key={item.id}>
      <ProductItem
        key={item.id}
        id={item.id}
        name={item.name}
        description={item.description}
        price={item.price}
      />
    </Card>
  ));

  let content = <p>Fount No Products</p>;

  if (products.length > 0) {
    content = productItem;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <Fragment>
      <section className={classes.items}>{content}</section>
    </Fragment>
  );
}

export default Products;
