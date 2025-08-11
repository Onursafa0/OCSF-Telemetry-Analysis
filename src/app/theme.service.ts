import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentTheme = 'theme-light';

  setTheme(themeName: string): void {
    const body = document.body;
    body.classList.remove(this.currentTheme);
    body.classList.add(themeName);
    this.currentTheme = themeName;
    localStorage.setItem('theme', themeName);
  }

  initTheme(): void {
    const savedTheme = localStorage.getItem('theme') || 'theme-light';
    this.setTheme(savedTheme);
  }

  getCurrentTheme(): string {
    return this.currentTheme;
  }
}
