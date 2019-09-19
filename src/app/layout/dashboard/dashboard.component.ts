import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { routerTransition } from '../../router.animations';
import {RepositoryService} from '../../shared/services/repository.service';
import {HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    public repo: any;

    constructor(public userRepo: RepositoryService,private router:Router) {
        this.getRepoDetails();
    }

    ngOnInit() {
    }


    public getRepoDetails(){
      this.userRepo.getRepositories().subscribe((data)=> {
        this.repo = data['values'];
        console.log(this.repo);
      }
    );
    }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }

  getRepoSlug(slug: string) {
    this.router.navigate(['/dashboard/repository', slug]);
  }
}


