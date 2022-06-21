import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  selectedFW: FormControl = new FormControl();
  frameworks: string[] = ['Angular', 'ReactJS', 'Vue']

  constructor() { }

  ngOnInit(): void {
  }

}
