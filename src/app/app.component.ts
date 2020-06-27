import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'wirecard';

  constructor(
  ) { }

  private stepper: Stepper;
  // form field variables
  fromaccount: string = '';
  transferto: string;
  amount: string;
  reference: string;
  remarks: string;
  todayD: any;
  today: any;

  next(id: string) {
    this.stepper.next();
    this.todayD = new Date();
    this.today = '';
    if (id === '2') {
      this.today = formatDate(this.todayD,'dd MMM yyyy hh:mm:ss','en-US','+0800');
    }
  }

  back() {
    this.stepper.previous();
  }

  onSubmit() {
    this.stepper.reset();
    this.fromaccount = '';
    this.transferto = '';
    this.amount = '';
    this.reference = '';
    this.remarks = '';
  }

  loadPopup (rn:string,ran:string) {
    //this.openDialog();
    //console.log('The dialog was closed');
    this.transferto = rn + ' - ' + ran;
  }

  // list of recipient account
  recipientaccount = [
    { accountname: 'Account TNT', accountnumber: '10000569871023'},
    { accountname: 'Jire Auto Sdn. Bhd.', accountnumber: '802654752'},
    { accountname: 'Azhari Current Account', accountnumber: '652205102622'},
    { accountname: 'WirePass', accountnumber: '50001478932017'},
    { accountname: 'Samsam Distribution', accountnumber: '65432198700001'},
  ];

  ngOnInit() {
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true
    })
  }

}
