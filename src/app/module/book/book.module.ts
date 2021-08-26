import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import {BookCreateComponent} from '../../component/book-create/book-create.component';
import {BookListComponent} from '../../component/book-list/book-list.component';
import {BookEditComponent} from '../../component/book-edit/book-edit.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [BookCreateComponent,
    BookListComponent,
    BookEditComponent],
  imports: [
    CommonModule,
    BookRoutingModule,
    ReactiveFormsModule
  ]
})
export class BookModule { }
