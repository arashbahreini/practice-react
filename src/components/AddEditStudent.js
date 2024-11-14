import { useState } from 'react';

export function AddEditStudent(props) {
  const [student, setStudent] = useState({ firstName: '', lastName: '' });

  const updateForm = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const submitForm = (e) => {
    props.onAddStudent(student);
  };

  return (
    <>
      <div className="row">
        <div className="col-sm-2">
          <input
            className="form-control"
            name="firstName"
            placeholder="First name*"
            value={student.firstName}
            onChange={updateForm}
          />
        </div>
        <div className="col-sm-2">
          <input
            className="form-control"
            name="lastName"
            placeholder="Last name*"
            value={student.lastName}
            onChange={updateForm}
          />
        </div>
      </div>
      <div className="mt-2">
        {/*TODO: Button should be disabled*/}
        <button type="submit" className="btn btn-success" onClick={submitForm}>
          Submit
        </button>
      </div>
    </>
  );
}
