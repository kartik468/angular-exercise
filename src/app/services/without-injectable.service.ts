import { Injectable } from '@angular/core';

export class WithoutInjectableService {
  constructor() {}

  getData() {
    return {
      name: '123'
    };
  }
}
