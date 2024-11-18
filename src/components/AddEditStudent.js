import { useState } from 'react';
import { useEffect } from 'react';

export function AddEditStudent(props) {
  const [student, setStudent] = useState({ firstName: '', lastName: '' });
  useEffect(() => {
    console.log('student is updated', props);
    setStudent(props.student);
  }, [props.student]);

  const editForm = (student) => {};

  const updateForm = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const submitForm = (e) => {
    setStudent({ ...student, firstName: '', lastName: '' });
    props.onUpdateStudent(student, props.isEditing);
  };

  const cancel = () => {
    props.closeForm();
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
        <div className="col-sm-3">
          <button
            type="submit"
            className="btn btn-success"
            onClick={submitForm}
            disabled={!student.firstName || !student.lastName}>
            {props.isEditing ? 'Update' : 'Add'}
          </button>
          <button className="ms-1 btn btn-danger" onClick={cancel}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
