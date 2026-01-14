// Object de-structure and JSON API into

const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}
// instead of always mentioning course.courseInstructor always you can use
//destructing object
const{courseInstructor : instructor} = course;
// console.log(courseInstructor);
// console.log(instructor);
