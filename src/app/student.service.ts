import { Injectable } from '@angular/core';
import {Student} from "./model/student";
import {Observable} from "rxjs";
import {HttpClient,HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[]= [
    {
      id: 1,
      name: 'thanh',
      address: 'mê linh'
    },
    {
      id: 2,
      name: 'khải',
      address: 'vinh'
    },
    {
      id: 3,
      name: 'toàn',
      address: 'thái bình'
    },
    {
      id: 4,
      name: 'mừng',
      address: 'nam định'
    },
    {
      id: 5,
      name: 'hiếu',
      address: 'phố cổ'
    },
  ]
  constructor(private httpClient: HttpClient) { }

  getAllStudent(): Student[]{
    return this.students
  }
  getStudentById(id: number){
    return this.students[id-1];
  }
  update(id: number, student: Student){
    this.students[id-1]= student;

  }
  create(student: Student){
    this.students.push(student)
  }

  deleteStudent(id: number){
    this.students.splice(id-1,1)
  }

}
