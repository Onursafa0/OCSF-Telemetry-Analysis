import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/navbar/navbar'; 
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, Navbar], 
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'OCSF Telemetry Analysis';

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.initTheme();
  }
}
