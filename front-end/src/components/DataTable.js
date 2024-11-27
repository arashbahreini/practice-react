import users from './users.json';
import { useEffect, useState } from 'react';

function paginateUsers(userList, page, pageSize) {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  const filteredUsers = userList.slice(start, end);
  const totalPages = Math.ceil(userList.length / pageSize);

  console.log(filteredUsers, totalPages);
  return { filteredUsers, totalPages };
}

export default function DataTable() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    setFilteredUsers(paginateUsers(users, page, pageSize).filteredUsers);
  }, []);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers?.map((user, i) => (
            <tr key={i}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className={'btn mx-2 btn-info'}
        disabled={page === 1}
        onClick={() => {
          setPage(page - 1);
          setFilteredUsers(paginateUsers(users, page - 1, pageSize).filteredUsers);
        }}>
        Prev
      </button>
      {page} of {paginateUsers(users, page, pageSize).totalPages}
      <button
        className={'btn mx-2 btn-info'}
        disabled={page === paginateUsers(users, page, pageSize).totalPages}
        onClick={() => {
          setPage(page + 1);
          setFilteredUsers(paginateUsers(users, page + 1, pageSize).filteredUsers);
        }}>
        Next
      </button>
      <br />
      <span>Items per page: </span>
      {[5, 10, 20].map((s, i) => (
        <button
          key={i}
          className="btn btn-info mx-2 my-1"
          onClick={() => {
            setPage(1);
            setPageSize(s);
            setFilteredUsers(paginateUsers(users, 1, s).filteredUsers);
          }}>
          {s}
        </button>
      ))}
    </>
  );
}
