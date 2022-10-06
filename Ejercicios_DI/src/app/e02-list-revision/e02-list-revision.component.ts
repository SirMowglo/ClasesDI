import { Component, OnInit } from '@angular/core';
import { ALUMNOS_FAKE } from '../models/fake-data';
import { student } from '../models/student.interface';

@Component({
  selector: 'app-e02-list-revision',
  templateUrl: './e02-list-revision.component.html',
  styleUrls: ['./e02-list-revision.component.css']
})
export class E02ListRevisionComponent implements OnInit {

  studentList: student[] = ALUMNOS_FAKE;
  
  constructor() { }

  ngOnInit(): void {
  }

}
