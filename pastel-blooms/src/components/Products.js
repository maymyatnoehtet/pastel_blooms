// eslint-disable
import Product from "./Product";

const Products = ({ products, onAddToCart }) => {
  return (
    <section className="products-section">
      <h1> Fresh Blooms </h1>
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
