import { useEffect, useState } from 'react';

export function StudentList(props) {
  useEffect(() => {
    // Do something when props change
  });

  const [isAddingOrDeleting, setIsAddingOrDeleting] = useState(false);

  const edit = (student, id) => {
    props.onEdit(student, id);
  };

  const deleteStudent = (id) => {
    props.onDeleteStudent(id);
  };

  const AddStudent = () => {
    props.onAdd();
    setIsAddingOrDeleting(true);
  };

  const getAll = () => {
    props.getAll();
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
              <button
                className="btn btn-dark mx-1"
                onClick={getAll}
                disabled={isAddingOrDeleting && props.isAddingOrDeleting}>
                Refresh
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {props.students.map((student) => (
            <tr key={student.id}>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>
                {student.isDeleting ? (
                  <div className="spinner-border text-primary" role="status">
                    <span className="sr-only"></span>
                  </div>
                ) : (
                  <button
                    className="btn btn-danger mx-1"
                    onClick={() => {
                      deleteStudent(student.id);
                    }}>
                    Delete asd
                  </button>
                )}

                <button
                  disabled={isAddingOrDeleting && props.isAddingOrDeleting}
                  className="btn btn-success mx-1"
                  onClick={() => {
                    edit(student);
                  }}>
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
