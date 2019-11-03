import { Component, OnInit } from '@angular/core';
import {Commit} from '../../shared/commit';
import {ActivatedRoute, Router} from '@angular/router';
import {FileService} from '../../shared/services/file.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {

  slug:string;
  files: Array<Commit>;

  constructor(private fileService:FileService,private router:ActivatedRoute, private route:Router) { }

  ngOnInit() {
    this.slug= localStorage.getItem('slug');
    this.getRepositoryFiles(this.slug);

  }
  private getRepositoryFiles(slug: string) {
    this.fileService.getAllFiles(slug).subscribe((data)=> {
        this.files = data;

        console.log(this.files)
      }
    );
  }

  private viewHistory(slug:string,name: string,change_log_url:string) {
    this.fileService.change_log_url = change_log_url;
    this.route.navigate(['/dashboard/file-history/',slug,name]);
  }
}
