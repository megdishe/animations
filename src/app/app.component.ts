import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgFor} from "@angular/common";
import {state, style, trigger} from "@angular/animations";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'blue',
        transform: 'translateX(0px)'
      })),
      state('highlighted', style({
        backgroundColor: 'red',
        transform: 'translateX(100px)'
      }))])]

})
export class AppComponent {
  list = ['Milk', 'Sugar', 'Bread'];
  state = 'normal';

  onDelete(item: any) {
    const index = this.list.indexOf(item);
    this.list.splice(index, 1);
  }

  onAdd(item: any) {
    this.list.push(item);
  }

}
