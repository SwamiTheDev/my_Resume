import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  //resumePage
  myImage = "/assets/images/photo.jpg";
  dob:any = "20.02.2000";
  resume_destination:string = "Junior Angular Developer";
  name:string="Swaminathan";
  age:number = 22;
  gender:string = "Male";
  contactNumber:number = 6383548296;
  eMail:string ="swaminathan483@gmail.com";
  address:string ="Mayiladuthurai, TamilNadu.";
  linkedinId = "https://www.linkedin.com/in/swami-thedev-7170b8259";

  constructor() { }
}
