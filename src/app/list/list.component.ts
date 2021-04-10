import { Component, OnInit } from '@angular/core';
import {Student} from "../model/student";
import {StudentService} from "../student.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  students: Student[]=[];

  constructor(private studentService: StudentService,
              ) {
    this.getAll()
  }

  getAll(){
    this.students= this.studentService.getAllStudent();
  }


  ngOnInit(): void {
  }


}
