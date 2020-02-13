import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  artist: any[] = [];
  loadind: boolean;
  constructor(private spotiServi: SpotifyService) { }

  ngOnInit() {
    this.loadind = false;
  }
  buscar(termino: string) {
    if (termino.length > 0) {
      this.loadind = true;
      this.spotiServi.getArtists(termino)
        .subscribe((data: any) => {
          this.artist = data;
          this.loadind = false;
        });
    } else {
      this.loadind = false;
    }
  }

}
