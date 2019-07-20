import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  constructor() {}

  getTodos() {
    return [
      {
        id: 1,
        title: "foo",
        completed: false
      },
      {
        id: 2,
        title: "bar",
        completed: true
      },
      {
        id: 3,
        title: "baz",
        completed: false
      }
    ];
  }
}
