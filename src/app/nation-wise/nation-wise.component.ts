import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-nation-wise',
  templateUrl: './nation-wise.component.html',
  styleUrls: ['./nation-wise.component.css']
})
export class NationWiseComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    
  }


}
