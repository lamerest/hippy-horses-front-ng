import { Component, OnInit } from '@angular/core';
import Moralis from 'moralis';
import { moralisEnv } from 'src/environments/moralis';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'hippy-horses-front-ng';

  ngOnInit() {
    const moralisOptions: Moralis.StartOptions = {
      serverUrl: moralisEnv.nodeUrl,
      appId: moralisEnv.appId,
    };
    Moralis.start(moralisOptions);
  }
}
