import { Injectable } from '@angular/core';

@Injectable()
export class TestService {

  constructor() { }

  print() {
    console.log("huhu");
    return "huhu";
  }

}
