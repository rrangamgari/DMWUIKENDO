import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DbLayoutViewComponent} from './db-layout-view/db-layout-view.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule, MatIconModule, MatProgressBarModule, MatSliderModule, MatToolbarModule, MatTreeModule} from '@angular/material';
import {SharedModule, TreeViewModule} from '@progress/kendo-angular-treeview';
import {HttpClientModule} from '@angular/common/http';
import { GridModule } from '@progress/kendo-angular-grid';



@NgModule({
  declarations: [
    AppComponent,
    DbLayoutViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatToolbarModule,
    MatTreeModule,
    MatIconModule,
    MatProgressBarModule,
    HttpClientModule,
    TreeViewModule,
    SharedModule,
    GridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
