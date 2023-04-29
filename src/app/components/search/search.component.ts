import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query:string = '';
  
  constructor(activateRoute: ActivatedRoute,private router:Router) { 
    activateRoute.params.subscribe((param) => {
    if(param['query']){
      this.query = param['query'];
    }
    })
  }

  ngOnInit(): void {
  }
  onSearchChange(query:string): void {
  if(query){
    this.router.navigateByUrl(`/search/${query}`);
    }
  }
}
