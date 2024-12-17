import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-download-list',
  templateUrl: './download-list.component.html',
  styleUrl: './download-list.component.css'
})
export class DownloadListComponent {

  alldownloads:any = []

  constructor(private api:ApiService){}

  ngOnInit(){
    this.getAlldownload()
  }

  getAlldownload(){
    this.api.allDownloadAPI().subscribe((res:any)=>{
      this.alldownloads =res
      console.log(this.alldownloads);
      
    })
  }
}
