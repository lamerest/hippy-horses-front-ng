import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  menu = ['Home', 'About', 'Roadmap', 'Mint', 'Team', 'Ambassadors', 'F.A.Q.'];
}
