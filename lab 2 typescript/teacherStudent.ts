class Teacer{
    tname: string;
    tcourses: Course[];
    constructor(name:string){
        this.tname = name;
        this.tcourses = [];
    }

    createTcourse(courseName: string): void{
        const newCourse = new Course(courseName, this.tname);
        this.tcourses.push(newCourse);
        console.log(`${newCourse} Added by ${this.tname}`);
    }

    viewStudents(courseName: string): void{
        

    }

}

class Student{
    sname: string;
    scourse: string;

    constructor(name:string, course: string){
        this.sname = name;
        this.scourse = course;
    }

    viewTeacher(courseName: string): void{

    }

    enroll(courseName: string): void{
        
    }
}

class Course{
    cname: string;
    teacher: string;
    students: string[];

    constructor(name: string, teacher: string){
        this.cname = name;
        this.teacher = teacher;
        this.students = [];
    }

    addStudent(courseName: string, student:string):void{

    }
}