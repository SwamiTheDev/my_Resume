import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  linkedinId = "https://www.linkedin.com/in/swami-thedev-7170b8259";

  constructor(public service:ServiceService) {}

  ngOnInit(): void {
  }

}
