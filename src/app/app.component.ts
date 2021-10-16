import { Component } from '@angular/core';

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

}
