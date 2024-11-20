import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Product() {
  const router = useRouter();
  const { productId } = router.query;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (productId) {
      getProduct();
    }
  }, [productId, router.isReady, router.query]);

  const getProduct = () => {
    fetch(`https://localhost:44397/products/${productId}`)
      .then(async (product) => {
        setProduct(await product.json());
        console.log(product);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      {loading ? (
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only"></span>
        </div>
      ) : (
        <div>
          <h3>Name: {product.name}</h3>
          <h3>Price: {product.price}</h3>
        </div>
      )}
    </>
  );
}
