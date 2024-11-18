import { AddEditStudent } from '@/components/AddEditStudent';
import { StudentList } from '@/components/StudentList';
import { useState, useEffect } from 'react';

export default function Index() {
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState({ firstName: '', lastName: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [isAddOrEditing, setIsAddOrEditing] = useState(false);

  useEffect(() => {
    setStudents([{ firstName: 'arash', lastName: 'Bahreini' }]);
  }, []);

  const updateStudent = (student, isEditing) => {
    if (isEditing) {
      students[student.key].firstName = student.firstName;
      students[student.key].lastName = student.lastName;
      setStudents([...students]);
      console.log(students.indexOf(student), student);
    } else {
      setStudents([...students, student]);
    }
    setIsAddOrEditing(false);
  };

  const deleteStudent = (index) => {
    students.splice(index, 1);
    setStudents([...students]);
  };

  return (
    <>
      {isAddOrEditing && (
        <div className="mb-5">
          <AddEditStudent
            onUpdateStudent={updateStudent}
            student={student}
            isEditing={isEditing}
            closeForm={() => {
              setIsAddOrEditing(false);
            }}
          />
          <hr />
        </div>
      )}

      <StudentList
        students={students}
        onEdit={(studentToEdit, key) => {
          setStudent({
            ...student,
            firstName: studentToEdit.firstName,
            lastName: studentToEdit.lastName,
            key
          });
          setIsAddOrEditing(true);
          setIsEditing(true);
        }}
        onDeleteStudent={deleteStudent}
        onAdd={() => {
          setStudent({
            ...student,
            firstName: '',
            lastName: ''
          });
          setIsAddOrEditing(true);
        }}
        isAddingOrDeleting={isAddOrEditing}
      />
    </>
  );
}
