import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../services/login.service';
import { HeaderComponent } from "../../header/header.component";
import { MovieCategoryComponent } from "../../movie-category/movie-category.component";

@Component({
  selector: 'browse',
  standalone: true,
  imports: [HeaderComponent, MovieCategoryComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css'
})
export class BrowseComponent {


  
}
