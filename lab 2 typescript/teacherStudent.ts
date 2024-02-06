//teacher course create, student enroll, teacher can view the students
//enrolled in the course, student can view who is taking the course
class Student{
    
    constructor(name: string, id: string, course: string) {
        let name: string = name;
        let id: string = id;
        let course: string = course;
    }
    enroll(): void{
        console.log(`${this.name} enrolled for course ${this.course}`)
    }
}