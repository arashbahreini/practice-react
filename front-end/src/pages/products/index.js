import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Products(props) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    setIsLoading(true);
    fetch('https://localhost:44397/products')
      .then(async (res) => {
        setProducts(await res.json());
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <>
      <h3>Hello from products page</h3>
      <hr />

      {isLoading ? (
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only"></span>
        </div>
      ) : (
        <div className="row">
          {products.map((product) => (
            <div className="col-sm-3 border" key={product.id}>
              <h1>Name: {product.name}</h1>
              <h5>Price: {product.price}</h5>
              <Link href={`/product/${product.id}`}>Edit</Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
