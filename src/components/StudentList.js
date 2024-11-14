import { useEffect } from 'react';

export function StudentList(props) {
  useEffect(() => {
    console.log('Props changed!');
    // Do something when props change
  });

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
          </tr>
        </thead>
        <tbody>
          {props.students.map((student) => (
            <tr key={student.firstName}>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
