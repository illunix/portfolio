import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public router: Router) { }

  onOpenPortoflio() {
    this.openExternalUrl('https://github.com/illunix');
  }

  onOpenLinkedIn() {
    this.openExternalUrl('https://www.linkedin.com/in/maks-szokalski-255616222/');
  }


  onGetInTouch() {
    window.open('mailto:cros448@gmail.com?subject=');
  }

  private openExternalUrl(url: string) {
    (window as any).open(url, "_blank");
  }
}
