import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor() { }

  Employees = [
    { id: 5690, name: 'Nagaraju', country: 'India' },
    { id: 5691, name: 'Sujan' , country: 'USA'},
    { id: 5692, name: 'Karthik' , country: 'UK'},
    { id: 5693, name: 'sai' , country: 'Canada' },
    { id: 5694, name: 'Narayana' , country: 'Russia'},
    { id: 5695, name: 'Swamy' , country: 'China'},
    { id: 5696, name: 'Charan' , country: 'Germany'},
    { id: 5697, name: 'Pridvi' , country: 'Hong Kong'},
    { id: 5698, name: 'PawanKalyan' , country: 'South Africa'},
    { id: 5699, name: 'Mahesh' , country: 'Sri Lanka'}
  ];
  searchText:any;

  ngOnInit(): void {
  }

}
