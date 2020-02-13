import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {
  artista: any = {};
  loadding: boolean;
  constructor(private spotiServi: SpotifyService,
              private router: ActivatedRoute) { }

  ngOnInit() {
    this.loadding = true;
    this.router.params.subscribe( params => {
      this.getArtist(params.id);
    });
  }

  getArtist(id: string) {
    this.loadding = true;
    this.spotiServi.getArtist(id)
      .subscribe( (artista: any) => {
        this.artista = artista;
        this.loadding = false;
      });
  }

}
