import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {
  // @ts-ignore
  bookForm: FormGroup = new FormGroup({
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl(),
  });
  // @ts-ignore
  id: number;
  constructor(private bookService: BookService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getBook(this.id);
    });
  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  getBook(id: number) {
    return this.bookService.findById(id).subscribe(book => {
      this.bookForm = new FormGroup({
        title: new FormControl(book.title),
        author: new FormControl(book.author),
        description: new FormControl(book.description),
      });
    });
  }

  // tslint:disable-next-line:typedef
  updateBook(id: number) {
    const book = this.bookForm.value;
    this.bookService.updateBook(id, book).subscribe(() => {
      alert('Cập nhật thành công');
      this.router.navigate(['/books']);
    }, e => {
      console.log(e);
    });
  }
  // tslint:disable-next-line:typedef
  Delete(id: number) {
    if (confirm('Bạn chắc chắn muốn xóa ?')){
      this.bookService.deleteBook(id).subscribe(() => {
        this.router.navigate(['/books']);
      }, e => {
        console.log(e);
      });
    }
  }
}
