import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student/student.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { AddstudentComponent } from './addstudent/addstudent.component';


@NgModule({
  declarations: [StudentComponent, StudentlistComponent, AddstudentComponent],
  imports: [
    CommonModule,
    StudentRoutingModule
  ],
  exports:[]
})
export class StudentModule { }
