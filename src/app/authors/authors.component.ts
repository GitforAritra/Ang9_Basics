import { Course } from './../course';
import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors: string[];
  course: Course ={
    id: 1,
    name: 'Angular'
  }
  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
   }

  ngOnInit(): void {
  }

}
