import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  data : Array<any>;
  names : Array<string>;
  confirmed : Array<number>;
  active : Array<number>;
  recovered : Array<number>;
  deaths : Array<number>;

  confirmedCount : number;
  activeCount : number;
  recoveredCount : number;
  deathsCount : number;

  // totalConfirmed : number;
  // totalActive : number;
  // totalRecovered : number;
  // totalDeaths : number;

  stateIdx : number;
  displayTable : boolean;
  
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['Confirmed', 'Active', 'Recovered', 'Deaths'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [this.confirmedCount,this.activeCount,this.recoveredCount,this.deathsCount], label: 'State wise' }
  ];

  constructor(private http: HttpClient) { 
    this.names=[];
    this.confirmed=[];
    this.active=[];
    this.recovered=[];
    this.deaths=[];
    this.displayTable = true;
  }

  ngOnInit(): void {
    this.http.get('https://api.covid19india.org/data.json').
    subscribe((data: any)=>{
      console.log(data.statewise);
      this.data = data.statewise;
      this.processData();
      // console.log(this.data.length);
    });
    
  }

  processData(){
    console.log('hello');
    // this.totalConfirmed = 0;
    // this.totalDeaths = 0;
    // this.totalRecovered = 0;
    // this.totalActive = 0;
      for(let i = 0 ; i < this.data.length ; i++){
        this.names.push(this.data[i].state);
        this.confirmed.push(this.data[i].confirmed);
        this.active.push(this.data[i].active);
        this.recovered.push(this.data[i].recovered);
        this.deaths.push(this.data[i].deaths);
        // this.totalConfirmed += this.data[i].confirmed;
        // this.totalActive += this.data[i].active;
        // this.totalRecovered += this.data[i].recovered;
        // this.totalDeaths += this.data[i].deaths;
      }
      // console.log(this.totalConfirmed);
      // console.log(this.totalActive);
      // console.log(this.totalRecovered);
      // console.log(this.totalDeaths);
      // this.selectState();
  }

  selectState(idx : number){
    this.displayTable = false;
    this.stateIdx = idx;
    this.confirmedCount = this.confirmed[this.stateIdx];
    this.deathsCount = this.deaths[this.stateIdx];
    this.recoveredCount = this.recovered[this.stateIdx];
    this.activeCount = this.active[this.stateIdx];
    this.barChartData = [{ data: [this.confirmedCount,this.activeCount,this.recoveredCount,this.deathsCount], label: this.names[this.stateIdx] }];
  }

  toggleDisplay(){
    this.displayTable = true;
  }
  
}
