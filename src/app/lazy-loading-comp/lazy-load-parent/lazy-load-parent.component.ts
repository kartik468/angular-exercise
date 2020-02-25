import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'kar-lazy-load-parent',
  templateUrl: './lazy-load-parent.component.html',
  styleUrls: ['./lazy-load-parent.component.scss']
})
export class LazyLoadParentComponent implements OnInit {
  constructor(private vcRef: ViewContainerRef, private cfr: ComponentFactoryResolver) {}

  ngOnInit(): void {}

  async getLazy1() {
    this.vcRef.clear();
    const { Lazy1Component } = await import('../lazy1/lazy1.component');
    this.vcRef.createComponent(this.cfr.resolveComponentFactory(Lazy1Component));
  }

  async getLazy2() {
    this.vcRef.clear();
    const { Lazy2Component } = await import('../lazy2/lazy2.component');
    this.vcRef.createComponent(this.cfr.resolveComponentFactory(Lazy2Component));
  }
}
