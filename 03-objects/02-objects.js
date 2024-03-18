const course = {
    coursename: "coursename",
    description: "description of the course",
    duration: 10, // in months
    skills: ["skill1","skill2"],
    instructors: [
        {name:"instructor name", email:"email@example.com"},
        {name:"second instructor name", email:"second_email@example.com"}
        ],
}

// course.instructors

const {instructors: teacher} = course

console.log(teacher);

// this is the destructuing of the OBJECT
const navbar = ({company}) => {

}

navbar(company = Nadeem);

//APIs concept

// {
//     name: "Course Name",
//     coursename: "Course Name",
//     "price": "FREE"
// }

[
    {},
    {},
    {},
]