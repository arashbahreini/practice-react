import { useState } from 'react';
import { useEffect } from 'react';
import style from '../pages/students/student.module.scss';

export function AddEditStudent(props) {
  const [student, setStudent] = useState({ firstName: '', lastName: '' });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (props.id) getStudent(props.id);
  }, [props.id]);

  const getStudent = (id) => {
    fetch(`https://localhost:44397/student/${id}`, {
      method: 'GET'
    }).then(async (res) => {
      setStudent(await res.json());
    });
  };

  const updateForm = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const submitForm = () => {
    setIsLoading(true);

    if (student.id) {
      fetch(`https://localhost:44397/student/${student.id}`, {
        method: 'PUT',
        body: JSON.stringify(student),
        headers: { 'Content-Type': 'application/json' }
      }).then(() => {
        props.onUpdateStudent(student, props.isEditing);
        setIsLoading(false);
      });
    } else {
      fetch('https://localhost:44397/student', {
        method: 'POST',
        body: JSON.stringify(student),
        headers: { 'Content-Type': 'application/json' }
      }).then(() => {
        props.onUpdateStudent(student, props.isEditing);
        setIsLoading(false);
      });
    }
  };

  const cancel = () => {
    setStudent(null);
    props.closeForm();
  };

  return (
    <>
      <div className="row">
        <p className={style.inputs}>Add student here</p>
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
          {isLoading ? (
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only"></span>
            </div>
          ) : (
            <div>
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
          )}
        </div>
      </div>
    </>
  );
}
