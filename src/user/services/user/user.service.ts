import {  Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { InjectConnection } from '@nestjs/typeorm';

@Injectable()
export class UserService {
    constructor(@InjectConnection()private readonly Connection : Connection){}
    async access1(){
        return this.Connection.query('SELECT * FROM student ORDER BY std_name ASC');
    }
    async access2(){
        return this.Connection.query('SELECT std_id , std_name FROM student');
    }
    async access3(){
        return this.Connection.query('SELECT std_id , std_name , province FROM student WHERE province =  "ขอนแก่น" ');
    }
    async access4(){
        return this.Connection.query('SELECT course.course_id , title , credit FROM course JOIN register ON course.course_id = register.course_id WHERE std_id = "5001100348" ');
    }
    async access5(){
        return this.Connection.query('SELECT register.std_id , SUM(credit) FROM register JOIN course ON register.course_id = course.course_id GROUP BY register.std_id');
    }
    async access6(){
        return this.Connection.query('SELECT register.course_id , count(std_id) AS COUNT_REG FROM register GROUP BY register.std_id ');
    }
    async access7(){
        return this.Connection.query('SELECT std_name FROM student JOIN register ON student.std_id = register.std_id WHERE register.course_id = "322236" ');
    }
}
