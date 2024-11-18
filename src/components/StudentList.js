import { useEffect, useState } from 'react';

export function StudentList(props) {
  useEffect(() => {
    console.log('Props changed!', props, isAddingOrDeleting);
    // Do something when props change
  });

  const [isAddingOrDeleting, setIsAddingOrDeleting] = useState(false);

  const edit = (student, key) => {
    props.onEdit(student, key);
  };

  const deleteStudent = (key) => {
    props.onDeleteStudent(key);
  };

  const AddStudent = () => {
    props.onAdd();
    setIsAddingOrDeleting(true);
  };

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>
              <button
                className="btn btn-success mx-1"
                onClick={AddStudent}
                disabled={isAddingOrDeleting && props.isAddingOrDeleting}>
                Add
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {props.students.map((student, key) => (
            <tr key={key}>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>
                <button
                  className="btn btn-danger mx-1"
                  onClick={() => {
                    deleteStudent(key);
                  }}>
                  Delete
                </button>
                <button
                  disabled={isAddingOrDeleting && props.isAddingOrDeleting}
                  className="btn btn-success mx-1"
                  onClick={() => {
                    edit(student, key);
                  }}>
                  {' '}
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
