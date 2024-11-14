import { AddEditStudent } from '@/components/AddEditStudent';
import { StudentList } from '@/components/StudentList';
import { useState } from 'react';

export default function Index() {
  const [students, setStudents] = useState([]);
  const addStudent = (student) => {
    setStudents([...students, student]);
    console.log(students);
  };
  return (
    <>
      <AddEditStudent onAddStudent={addStudent} />
      <StudentList students={students} />
    </>
  );
}
