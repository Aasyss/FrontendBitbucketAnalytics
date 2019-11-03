import { Component, OnInit } from '@angular/core';
import {FileService} from '../../shared/services/file.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Commit} from '../../shared/commit';

@Component({
  selector: 'app-file-history',
  templateUrl: './file-history.component.html',
  styleUrls: ['./file-history.component.scss']
})
export class FileHistoryComponent implements OnInit {
  change_log_url:string;
  name:string;
  fileHistory: Array<any>;
  constructor(private fileService:FileService,private router:ActivatedRoute, private route:Router) { }

  ngOnInit() {
    this.change_log_url = this.fileService.change_log_url;
    this.name= this.router.snapshot.params['name'];
    this.getFileHistory(this.change_log_url);

  }
  private getFileHistory(change_log_url:string){
    this.fileService.getFileHistory(change_log_url).subscribe((data)=> {
      this.fileHistory = data.values;
      console.log("History",this.fileHistory);
    });
  }

}
