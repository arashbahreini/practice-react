import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '@/redux/reducers/productReducer';

export default function AddEditDevice() {
  const [device, setDevice] = useState({ name: '', model: 0 });
  const dispatch = useDispatch();

  const valueChange = (e) => {
    const { name, value } = e.target;
    setDevice({ ...device, [name]: value });
  };

  const submitForm = (event) => {
    event.preventDefault();
    dispatch(addProduct(device));
  };

  return (
    <form className="row" onSubmit={submitForm}>
      <div className="col-sm-3">
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          name="name"
          value={device.name}
          onChange={valueChange}
        />
      </div>
      <div className="col-sm-3">
        <input
          type="number"
          className="form-control"
          placeholder="Model"
          name="model"
          value={device.model}
          onChange={valueChange}
        />
      </div>
      <div className="col-sm-3">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
}
