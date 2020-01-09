import { Component, OnInit, Input, SimpleChanges, OnChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'kar-do-check',
  templateUrl: './do-check.component.html',
  styleUrls: ['./do-check.component.scss']
})
export class DoCheckComponent implements OnInit, DoCheck {

  @Input()
  hero;

  previousHeroName;

  constructor() { }

  // ngOnChanges(simpleChanges: SimpleChanges) {
  //   console.log(simpleChanges.hero.currentValue);
  // }

  ngOnInit() {
    this.previousHeroName = this.hero.name;
  }

  ngDoCheck() {
    if (this.previousHeroName !== this.hero.name) {
      this.previousHeroName = this.hero.name;
      console.log('hero name changed');
    }
  }

}
