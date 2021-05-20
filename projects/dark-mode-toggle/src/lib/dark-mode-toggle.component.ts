import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-dark-mode-toggle',
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: [
    'dark-mode-toggle.component.scss'
  ],
  providers: [
    { useExisting: forwardRef(() => DarkModeToggleComponent), provide: NG_VALUE_ACCESSOR, multi: true }
  ]
})
export class DarkModeToggleComponent implements OnInit, ControlValueAccessor {
  constructor() {

  }

  writeValue(obj: any): void {
    if (this.isDark != obj) {
      this.toggleDarkMode();
    }
  }
  private onChangeFunctions = [];
  registerOnChange(fn: (v: boolean) => void) {
    this.onChangeFunctions.push(fn);
  }
  private onTouchedFunctions = [];
  registerOnTouched(fn: any): void {
    this.onTouchedFunctions.push(fn);
  }
  disabled = false;
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngOnInit(): void {
  }

  animationName = "day_idle";
  animationSpeed = 1.0;
  isDark: boolean = false;
  toggleDarkMode() {
    if (this.animationName.includes('idle')) {
      if (!this.isDark) {
        this.animationSpeed = 1.0;
        this.animationName = "switch_night";
        setTimeout(() => {
          this.animationSpeed = 0.5;
          this.animationName = "night_idle"
          this.isDark = !this.isDark;
          this.onChangeFunctions.forEach(fn => fn(this.isDark));
        }, 500);
      } else {
        this.animationSpeed = 1.0;
        this.animationName = "switch_day";
        setTimeout(() => {
          this.animationSpeed - 0.5
          this.animationName = "day_idle";
          this.isDark = !this.isDark;
          this.onChangeFunctions.forEach(fn => fn(this.isDark));
        }, 500);
      }
    }
    
  }
}
