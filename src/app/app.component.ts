import { Component } from '@angular/core';

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [{
    type: 'success',
    message: 'This is an success alert',
  }, {
    type: 'info',
    message: 'This is an info alert',
  }, {
    type: 'warning',
    message: 'This is a warning alert',
  }, {
    type: 'danger',
    message: 'This is a danger alert',
  }, {
    type: 'primary',
    message: 'This is a primary alert',
  }, {
    type: 'secondary',
    message: 'This is a secondary alert',
  }, {
    type: 'light',
    message: 'This is a light alert',
  }, {
    type: 'dark',
    message: 'This is a dark alert',
  }
];

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'You are the best singer';
  // show=false;
  show="green";
  color="blue";
  currentVal = '';
  err=false;
  disabledBox = true;
  getVal(val) {
    console.warn(val);
    this.currentVal = val;
  }
  enableBox() {
  this.disabledBox=false;
  }
// data=['sohit','Mansi','Rahul','Yogesh','Basanta','Jhabara'];
data=[
  {
    name:'sohit',
    age:23,
    address:'Varanasi',
    email:'sohit@gmail.com'
  },
  {
    name:'Yogesh',
    age:23,
    address:'Mirzapur',
    email:'yogesh@gmail.com'

  },
  {
    name:'Garvit',
    age:22,
    address:'Jaunpur',
    email:'garvit@gmail.com'

  }
]
getUserValue(value){
  console.warn(value);
}
updateColor(){
  this.color="yellow";
}

alerts: Alert[];

  constructor() {
    this.reset();
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }

}
