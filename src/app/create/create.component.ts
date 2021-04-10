import {Component, OnInit} from '@angular/core';
import {Student} from "../model/student";
import {Router} from "@angular/router";
import {StudentService} from "../student.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  student: Student = {
    id: 0,
    name: '',
    address: ''
  }

  constructor(private studentService: StudentService,
              private router: Router) {
  }
  createStudent(){
    this.studentService.create(this.student)
    this.router.navigate(['/'])
  }


  ngOnInit(): void {
  }

}
