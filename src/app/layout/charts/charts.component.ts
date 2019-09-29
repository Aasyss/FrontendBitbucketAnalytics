import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {AnalyticsService} from '../../shared/services/analytics.service';
import forEach from '@authllizer/core/typings/utils/for-each';
import {ActivatedRoute} from '@angular/router';


// export interface IHash {
// }
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
  pusheditems: { [label: string]:Array<number>; };

  constructor(private analyticsService:AnalyticsService, private router:ActivatedRoute) {}

  // bar chart
    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels: string[] = [
        '2006',
        '2007',
        '2008',
        '2009',
        '2010',
        '2011',
        '2012'
    ];
    public barChartType: string;
    public barChartLegend: boolean;

    public barChartData: any[] = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
    ];

    // Doughnut
    public doughnutChartLabels: string[] = [];
    public doughnutChartData: number[] = [];
    public doughnutChartType: string;

    // Radar
    public radarChartLabels: string[] = [
        'Eating',
        'Drinking',
        'Sleeping',
        'Designing',
        'Coding',
        'Cycling',
        'Running'
    ];
    public radarChartData: any = [
        { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
    ];
    public radarChartType: string;

    // Pie
    public pieChartLabels: string[]=[];
    public pieChartData: number[]=[];
    public pieChartType: string;
    public chartColors: any[] = [
      {
        backgroundColor:["#F67360", "#6FC8CE", "#FA00F2", "#F10023", "#FFFCC4"]
      }];

    // PolarArea
    public polarAreaChartLabels: string[] = [
        'Download Sales',
        'In-Store Sales',
        'Mail Sales',
        'Telesales',
        'Corporate Sales'
    ];
    public polarAreaChartData: number[] = [300, 500, 100, 40, 120];
    public polarAreaLegend: boolean;

    public polarAreaChartType: string;

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

    public randomize(): void {
        // Only Change 3 values
        const data = [
            Math.round(Math.random() * 100),
            59,
            80,
            Math.random() * 100,
            56,
            Math.random() * 100,
            40
        ];
        const clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        this.barChartData = clone;
        /**
         * (My guess), for Angular to recognize the change in the dataset
         * it has to change the dataset variable directly,
         * so one way around it, is to clone the data, change it and then
         * assign it;
         */
    }


    ngOnInit() {
      this.slug= localStorage.getItem('slug');
      this.getUserCommits(this.slug);
      this.getUserDateCommits(this.slug);
      this.getDateCommits(this.slug);

      this.barChartType = 'bar';
      this.barChartLegend = true;
      this.doughnutChartType = 'doughnut';
      this.radarChartType = 'radar';
      this.pieChartType = 'pie';
      this.polarAreaLegend = true;
      this.polarAreaChartType = 'polarArea';
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
          for(let date in this.userDateCommits) {
            console.log(date);
            this.lineChartLabels.push(date);

              // console.log('user',this.userDateCommits[date][0])
              // if(this.pusheditems['label']==this.userDateCommits[date].user) {
              //   this.pusheditems[this.userDateCommits[commit].user.toString()].push(this.userDateCommits[commit].user__count);
              // }
              // else{
              //   console.log('else');
              //   this.pusheditems['label'].push(this.userDateCommits[commit].user__commits);
              //
              // }
          }

          console.log("date",this.lineChartLabels)

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
