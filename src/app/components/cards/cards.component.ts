import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() items: any[] = [];
  idArtist: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  showArtist(item: any) {
    if (item.type === 'artist') {
      this.idArtist = item.id;
    } else if (item.type === 'album') {
      this.idArtist = item.artists[0].id;
    }
    console.log(this.idArtist);
    this.router.navigate(['/artist', this.idArtist]);
  }

}
