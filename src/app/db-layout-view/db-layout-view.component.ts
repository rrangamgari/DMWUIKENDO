import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {images} from './images';
import {employees} from './employees';
import {DataBindingDirective} from '@progress/kendo-angular-grid';
import {process} from '@progress/kendo-data-query';

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

  public handleSelection({dataItem}: any): void {
    // this.selectedKeys = [index];
    console.log(dataItem.text);
    this.gridView = this.gridData;
  }

  public gridData: any[] =  employees;
  public gridView: any[];
  @ViewChild(DataBindingDirective) dataBinding: DataBindingDirective;
  public mySelection: string[] = [];

  public onFilter(inputValue: string): void {
    this.gridView = process(this.gridData, {
      filter: {
        logic: 'or',
        filters: [
          {
            field: 'full_name',
            operator: 'contains',
            value: inputValue
          },
          {
            field: 'job_title',
            operator: 'contains',
            value: inputValue
          },
          {
            field: 'budget',
            operator: 'contains',
            value: inputValue
          },
          {
            field: 'phone',
            operator: 'contains',
            value: inputValue
          },
          {
            field: 'address',
            operator: 'contains',
            value: inputValue
          }
        ],
      }
    }).data;

    this.dataBinding.skip = 0;
  }

  private photoURL(dataItem: any): string {
    const code: string = dataItem.img_id + dataItem.gender;
    const image: any = images;

    return image[code];
  }

  private flagURL(dataItem: any): string {
    const code: string = dataItem.country;
    const image: any = images;

    return image[code];
  }
}
