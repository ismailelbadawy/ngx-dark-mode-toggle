import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-dark-mode-toggle',
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: [
    'dark-mode-toggle.component.scss'
  ]
})
export class DarkModeToggleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  animationName = "day_idle";
  animationSpeed = 1.0;
  isDark = false;
  toggleDarkMode() {
    if (this.animationName.includes('idle')) {
      if (!this.isDark) {
        this.animationSpeed = 1.0;
        this.animationName = "switch_night";
        setTimeout(() => {
          this.animationSpeed = 0.5;
          this.animationName = "night_idle"
          this.isDark = !this.isDark;
        }, 500);
      } else {
        this.animationSpeed = 1.0;
        this.animationName = "switch_day";
        setTimeout(() => {
          this.animationSpeed - 0.5
          this.animationName = "day_idle";
          this.isDark = !this.isDark;
        }, 500);
      }
    }
  }
}
