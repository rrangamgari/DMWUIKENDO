import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-db-layout-view',
  templateUrl: './db-layout-view.component.html',
  styleUrls: ['./db-layout-view.component.scss']
})
export class DbLayoutViewComponent implements OnInit {
  public selectedKeys: any[] = [];
  public data: any[] = [
    {
      text: 'Loading...', items: [
        {text: 'Tables & Chairs'},
        {text: 'Sofas'},
        {text: 'Occasional Furniture'}
      ]
    }
  ];

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('Content-Type', 'application/json');
    httpHeaders.append('Access-Control-Allow-Origin', '*');
    httpHeaders.append('Authorization', 'Basic ' + btoa('saikiran:password'));

    const httpOptions = {
      headers: httpHeaders
    };
    this.httpClient.get<any>('api/MyDataDetails/schemas', httpOptions).subscribe(
      data => {
        this.data = data.data;
      }
    );
  }

  nodeClicked() {
    console.log('test' + this.selectedKeys);
  }
  public isItemSelected = (_: any, index: string) => this.selectedKeys.indexOf(index) > -1;

  public handleSelection({ dataItem }: any): void {
    // this.selectedKeys = [index];
    console.log(dataItem.text);
  }
}
