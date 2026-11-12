import React from 'react'
import Course from './Components/Course';

function App() {
   const courses = [
    { id: 1, name: "React JS", trainer: "Pavi", duration: "3 Months" },
    { id: 2, name: "Python", trainer: "Achu", duration: "2 Months" },
    { id: 3, name: "Java", trainer: "Vithu", duration: "4 Months" },
    { id: 4, name: "HTML & CSS", trainer: "Ashi", duration: "1 Month" },
    { id: 5, name: "JavaScript", trainer: "Dhanush", duration: "2 Months" },
    { id: 6, name: "SQL", trainer: "Lalli", duration: "1 Month" }
  ]
  return (
    <>
    
    <h1>Course Cards</h1>
    
      {courses.map((course) => (
        
          <Course
            key={course.id}
            name={course.name}
            trainer={course.trainer}
            duration={course.duration}
          />
      ))}
      
      

    </>
  )
}

export default App
