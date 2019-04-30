import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { DefaultValueAccessor } from '@angular/forms';
import { forEach } from '@angular/router/src/utils/collection';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import json from '../assets/data/settings.json';

export interface Users {
  value: any;
  viewValue: String;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vm-app';
  appTitle = 'Virtual Machine Manager';
  version = 'V01.00.38';
  jsonPath = '../assets/data/settings.json';
  jsonName = 'settings.json';

  selectedUserW78000;
  selectedUserW78001;
  selectedUserW78002;
  selectedUserW105030;
  selectedUserW105031;
  selectedUserW105032;


  userArray = [this.selectedUserW78000, this.selectedUserW78001, this.selectedUserW78002, this.selectedUserW105030, this.selectedUserW105031, this.selectedUserW105032];

  users : Users[] = [
    {value: 0, viewValue: 'Free'},
    {value: 1, viewValue: 'Pawel'},
    {value: 2, viewValue: 'Joanna'},
    {value: 3, viewValue: 'Galyna'},
    {value: 4, viewValue: 'Grzegorz'},
    {value: 5, viewValue: 'Raman'},
    {value: 6, viewValue: 'Michal'},
    {value: 7, viewValue: 'Krystian'},
    {value: 8, viewValue: 'Blocked'}
  ]
   constructor (private httpClient : HttpClient){}
   ngOnInit(): void {
    let counter = 0;
    for (let key in json) {
      this.userArray[counter] = this.users[json[key]]
      counter++;
    }
   }
   selected(){
    let mockup = json,
        counter = 0;
    for (let key in json) {
      json[key] = this.userArray[counter].value;
      console.log(this.userArray[counter].value);
      counter++;
    }
    let body = JSON.stringify(mockup);
    console.log(body);
    let blob = new Blob([body], {type: 'text/plain;charset=utf-8'});
    //FileSaver.saveAs(blob,this.jsonName);

  }


}
