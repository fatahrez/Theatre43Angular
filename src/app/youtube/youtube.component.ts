import {Component, Input, OnInit} from '@angular/core';
import {YoutubeService} from '../core/services/youtube.service';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
export class YoutubeComponent implements OnInit {

  @Input() movie: any;
  youtubeLink = '';
  finalLink = '';
  constructor(
    private youtubeService: YoutubeService,
    private sanitizer: DomSanitizer
  ) { }

  // getYoutubeLink(): void {
  //   this.youtubeService.getYoutubeSearchList(this.movie.id).subscribe(data => {
  //     this.youtubeLink = data.results[0].key;
  //     this.finalLink = 'https://www.youtube.com/embed/' + this.youtubeLink + '?autoplay=1&start=3';
  //     console.log(this.youtubeLink);
  //   });
  // }
  // this.renderer.setElementProperty(el, 'outerHTML', el.outerHTML)
  ngOnInit(): void {
    // this.getYoutubeLink();
  }

}
