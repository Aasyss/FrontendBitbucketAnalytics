import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {AnalyticsService} from '../../shared/services/analytics.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss'],
    animations: [routerTransition()]
})
export class ChartsComponent implements OnInit {
  slug: string;
  userCommits:any;
  userDateCommits:any;
  dateCommits:any;
  counter:number;
  // @ts-ignore
  pushedItems:{[label:string]:[]}={};
  constructor(private analyticsService:AnalyticsService, private router:ActivatedRoute) {}

    // Doughnut
    public doughnutChartLabels: string[] = [];
    public doughnutChartData: number[] = [];
    public doughnutChartType: string;

    // Pie
    public pieChartLabels: string[]=[];
    public pieChartData: number[]=[];
    public pieChartType: string;
    public chartColors: any[] = [
      {
        backgroundColor:["#F67360", "#6FC8CE", "#FA00F2", "#F10023", "#FFFCC4"]
      }];

    // lineChart
    public lineChartData: Array<any> = [
        { data: [2, 3, 0, 0, 0], label: 'user' },
      { data: [0,3,0,0,0], label: 'user2' },

    ];
    public lineChartLabels: Array<any> = [];
    public lineChartOptions: any = {
        responsive: true
    };
    public lineChartColors: Array<any> = [
        {
            // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        {
            // dark grey
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        {
            // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];
    public lineChartLegend: boolean;
    public lineChartType: string;

    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }
    ngOnInit() {
      this.slug= localStorage.getItem('slug');
      this.getUserCommits(this.slug);
      this.getUserDateCommits(this.slug);
      this.getDateCommits(this.slug);

      this.doughnutChartType = 'doughnut';
      this.pieChartType = 'pie';
      this.lineChartLegend = true;
      this.lineChartType = 'line';

    }
    //method to populate data into pie chart by subscribing the getUserCommit observable
    getUserCommits(slug:string){
      this.analyticsService.getUserCommits(slug).subscribe((data)=> {
          this.userCommits = data;
          for (let commit in this.userCommits){
              this.pieChartLabels.push(this.userCommits[commit].user.toString());
              this.pieChartData.push(this.userCommits[commit].commit_count);
          }
        }
      );
    }

  // method to get data from subscribing the getUserDateCommit observable
      getUserDateCommits(slug:string) {
        this.analyticsService.getUserDateCommits(slug).subscribe((data)=> {
          this.userDateCommits = data;
          console.log("Data",data);

          // for(let date in this.userDateCommits) {
          //   this.counter=0;
          //
          //   this.lineChartLabels.push(date);
          // //  userDateCommits:{[label:string],data:[]};
          //   for(let k of Object.keys(this.userDateCommits[date][this.counter])){
          //     console.log('key',k);
          //     if(!(k in this.pushedItems)){
          //       console.log("Boom",this.userDateCommits[date][this.counter][k]);
          //       // @ts-ignore
          //       this.pushedItems.label[k]=this.pushedItems.data.push(this.userDateCommits[date][this.counter][k]);
          //     }else{
          //
          //     }
          //     this.counter = this.counter+1
          //   }
          //
          //
          // }

          // { data: [65, 59, 80, 81, 56, 55, 40], label: 'user' },
        });
      }

  // method to get data from subscribing the getUserDateCommit observable
  getDateCommits(slug:string) {
    this.analyticsService.getDateCommits(slug).subscribe((result)=> {
      this.dateCommits = result;

      for (let commit in this.dateCommits){
        this.doughnutChartLabels.push(this.dateCommits[commit].date.toString());
        this.doughnutChartData.push(this.dateCommits[commit].date__count);
      }
    });
  }


}
