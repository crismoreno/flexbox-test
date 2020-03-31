import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-posts',
  templateUrl: './display-posts.component.html',
  styleUrls: ['./display-posts.component.scss']
})
export class DisplayPostsComponent implements OnInit {
  posts;
  constructor() { }

  ngOnInit() {
    this.posts = [];

    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@cristinamorenomedran')
   .then((res) => res.json())
   .then((data) => {
      const res = data.items //This is an array with the content. No feed, no info about author etc..
      const mediumData = res.filter(item => item.categories.length > 0) // That's the main trick* !

      this.posts.push(mediumData);

      function shortenText(text,startingPoint ,maxLength) {
          return text.length > maxLength?
          text.slice(startingPoint, maxLength):
          text
      }

    });
    // console.log(this.posts);
  }

}
