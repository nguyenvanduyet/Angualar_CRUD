import {Component, OnInit} from '@angular/core';
import {StudentService} from "../student.service";
import {Subscription} from "rxjs";
import {Student} from "../model/student";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  sub: Subscription;

  id: number = 0;


  constructor(private studentService: StudentService,
              private router: Router,
              private activeRouter: ActivatedRoute) {
    this.sub= this.activeRouter.paramMap.subscribe((paramMap: ParamMap)=>{
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.deleteStudent(this.id)

    })
  }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id)
    this.router.navigate(['/'])
  }

  ngOnInit(): void {
  }


}
