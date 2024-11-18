import { AddEditStudent } from '@/components/AddEditStudent';
import { StudentList } from '@/components/StudentList';
import { useState, useEffect } from 'react';

export default function Index() {
  const [students, setStudents] = useState([]);
  const [id, setId] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [isAddOrEditing, setIsAddOrEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAll();
  }, []);

  const getAll = () => {
    setIsLoading(true);
    fetch('https://localhost:44397/student/').then(async (res) => {
      setStudents(await res.json());
      setIsLoading(false);
    });
  };
  const updateStudent = () => {
    getAll();
    setIsAddOrEditing(false);
  };

  const deleteStudent = (id) => {
    students.map((x) => (x.isDeleting = x.id === id));
    setStudents([...students]);
    fetch(`https://localhost:44397/student/${id}`, {
      method: 'DELETE'
    }).then(() => {
      getAll();
    });
  };

  return (
    <>
      {isLoading && (
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only"></span>
        </div>
      )}

      {isAddOrEditing && (
        <div className="mb-5">
          <AddEditStudent
            onUpdateStudent={updateStudent}
            id={id}
            isEditing={isEditing}
            closeForm={() => {
              setIsAddOrEditing(false);
            }}
          />
          <hr />
        </div>
      )}

      {!isLoading && (
        <StudentList
          students={students}
          onEdit={(student) => {
            setId(student.id);
            setIsAddOrEditing(true);
            setIsEditing(true);
          }}
          onDeleteStudent={deleteStudent}
          getAll={getAll}
          onAdd={() => {
            setIsAddOrEditing(true);
          }}
          isAddingOrDeleting={isAddOrEditing}
        />
      )}
    </>
  );
}
