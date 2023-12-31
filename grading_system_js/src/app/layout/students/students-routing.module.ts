import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { Router, RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {
    path: '', component:StudentsComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class StudentsRoutingModule { }
