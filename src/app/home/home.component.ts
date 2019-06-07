import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items = [
    {
      icon: 'extension',
      label: 'Attributes'
    },
    {
      icon: 'color_lens',
      label: 'Appearance'
    },
    {
      icon: 'people',
      label: 'Users'
    },
    {
      icon: 'lock',
      label: 'Privacy'
    },
    {
      icon: 'print',
      label: 'Printing'
    },
    {
      icon: 'play_arrow',
      label: 'Preview'
    }];
  selectedIndex = 0;
  selectedClass = '';

  constructor() { }

  ngOnInit() {
  }

  selectIndex(index: number) {
    this.selectedIndex = index;
    this.selectedClass = `selected-${index}`;
  }
}
