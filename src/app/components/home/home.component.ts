import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { async } from '@angular/core/testing';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  albunes: any = [];
  loadind: boolean;
  constructor(private spotiServi: SpotifyService) { }
  ngOnInit() {
    this.loadind = true;
    this.spotiServi.getRelases()
    .subscribe( (data: any ) => {
      this.loadind = false;
      this.albunes = data;
    });
  }

}
