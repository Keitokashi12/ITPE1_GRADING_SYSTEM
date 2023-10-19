import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ScreenComponent } from './screen/screen.component';
import { TableComponent } from './table/table.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsComponent } from './components/components.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [
    CardComponent,
    TableComponent,
    ComponentsComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    NgbNavModule 
  ],
  exports: [
    CardComponent,
    TableComponent
  ]
})
export class ComponentsModule { }
