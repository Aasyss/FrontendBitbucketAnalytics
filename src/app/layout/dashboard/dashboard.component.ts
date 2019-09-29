import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { routerTransition } from '../../router.animations';
import {RepositoryService} from '../../shared/services/repository.service';
import {Router} from '@angular/router';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public repo: any;

    constructor(public userRepo: RepositoryService,private router:Router) {
        this.getRepoDetails();
    }

    ngOnInit() {
      localStorage.removeItem('slug');
    }

    public getRepoDetails(){
      this.userRepo.getRepositories().subscribe((data)=> {
        this.repo = data['values'];
        console.log(this.repo);
      }
    );
    }

  getRepoSlug(slug: string) {
    this.router.navigate(['dashboard/repository', slug]);
  }
}


