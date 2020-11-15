class Course{
	constructor(n, t, d, r){
		this.name=n;
		this.time=t;
		this.date=d;
		this.rooms=r;
	}
	toString(){
		return this.name;
	}
}
class Student {
    constructor(i, n, gp, c) {
        this.id = i;
        this.name = n;
        this.gpa = gp;
        this.courses = c;
    }

    toString() {
        return this.id + '';
    }
}

class Database{

    constructor() {
        this.courses =  new Map();
        this.students =  new Map();

        this.fillTheMaps();
    }

    fillTheMaps(){
		this.readCourseData();
		this.readStudentData();
    }

    //read course data from Courses.txt and return it as text
    readCourseData(){
        let url="https://maeyler.github.io/JS/data/Courses.txt";
        fetch(url)
            .then(res => res.text())
            .then(res => this.addCoursesToMap(res,this.courses));
    }

    //read student data from Students.txt and return it as text
    readStudentData(){
        let url="https://maeyler.github.io/JS/data/Students.txt";
        fetch(url)
            .then(res => res.text())
            .then(res => this.addStudentsToMap(res,this.students));
    }

    //Add course object to courses map
	addCoursesToMap(txt,courses){
    	let lines = txt.split("\n");//split the text of Courses.txt line by line
		for(let line of lines) {
		let course = this.createCourse(line);
		courses.set(course.name,course);
        }
	}

	//Add students object to student map
    addStudentsToMap(txt,students){
        let lines = txt.split("\n");//split the text of Students.txt line by line
        for(let line of lines) {
            let student = this.createStudent(line);
            students.set(student.id,student);
        }
    }

    //Create a Course Object and fill this object's props with txtLine
    createCourse(txtLine){
        let words = txtLine.split("\t");
        let course;
        course = new Course(words[0], words[1], words[2], words.slice(3));
        return course;
    }

    //Create a Student Object and fill this object's props with txtLine
    createStudent(txtLine){
        let words = txtLine.split("\t");
        let student;
        let studentCourseList = this.findStudentCourses(words.slice(3));
        student = new Student(words[0], words[1], words[2], studentCourseList);
        return student;
    }

    //finds the courses of the given student.
    findStudentCourses(courseArray){
    	let studentCourseList = [];
    	for(let courseName of courseArray){
            studentCourseList.push(this.courses.get(courseName));
		}
		return studentCourseList;
	}

}