import Card from "../UI/Card";
import ItemList from "./ProductsList";
import classes from "./Products.module.css";

const DUMMY_ITEMS = [
  { id: "tem1", name: "item 1", price: 12.99, description: "this is item 1" },
  { id: "tem2", name: "item 2", price: 4.44, description: "this is item 2" },
  { id: "tem3", name: "item 3", price: 32.99, description: "this is item 3" },
];

const itemList = DUMMY_ITEMS.map((item) => (
  <Card id={item.id}>
    <ItemList
      key={item.id}
      id={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
    />
  </Card>
));

function Products() {
  return <section className={classes.items}>{itemList}</section>;
}

export default Products;
