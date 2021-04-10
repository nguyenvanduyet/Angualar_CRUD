import {Component, OnInit} from '@angular/core';
import {StudentService} from "../student.service";
import {Student} from "../model/student";
import {Subscription} from "rxjs";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id : number =0;
  sub: Subscription;
  student: Student = {
    id: 0,
    name:'',
    address:''
  }

  constructor(private studentService: StudentService,
              private router: Router,
              private a : ActivatedRoute
              ) {
    this.sub = this.a.paramMap.subscribe((p:ParamMap)=>{
      // @ts-ignore
      this.id= +p.get('id')
      this.getStudentById(this.id)
    })
  }
  getStudentById(id: number){
    this.student = this.studentService.getStudentById(id)
  }
  update() {
    this.studentService.update(this.id,this.student);
    this.router.navigate(['/'])
  }

  ngOnInit(): void {
  }

}
