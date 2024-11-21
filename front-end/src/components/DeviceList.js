import { useSelector } from 'react-redux';
import { selectProduct } from '../redux/reducers/productReducer';

export default function DeviceList() {
  const product = useSelector(selectProduct);
  return (
    <>
      <h1>Product name: {product.name}</h1>
      <h1>Product price: {product.model}</h1>
    </>
  );
}
