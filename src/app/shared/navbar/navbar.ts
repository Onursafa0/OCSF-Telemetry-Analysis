import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ThemeService } from '../../theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  isDarkMode = false;

  constructor(
    public translate: TranslateService,
    public themeService: ThemeService
  ) {
    translate.addLangs(['en', 'tr']);
    translate.setDefaultLang('tr');
    translate.use('tr');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }

  onThemeChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.themeService.setTheme(value);
  }
}
