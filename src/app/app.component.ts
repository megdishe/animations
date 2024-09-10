import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgFor} from "@angular/common";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('divState', [
      state('normal', style({
        backgroundColor: 'blue',
        transform: 'translateX(0px)'
      })),
      state('highlighted', style({
        backgroundColor: 'red',
        transform: 'translateX(100px)'
      })),
      // transition('normal => highlighted',[ animate(300)]),
      //transition('highlighted => normal',[ animate(200)])
      transition('* => *', [animate(300)])
    ])
  ]

})
export class AppComponent {
  list = ['Milk', 'Sugar', 'Bread'];
  state = 'normal';

  onDelete(item: any) {
    const index = this.list.indexOf(item);
    this.list.splice(index, 1);
  }

  onAnimate() {
    this.state = this.state == 'normal' ? 'highlighted' : 'normal';
  }

  onAdd(item: any) {
    this.list.push(item);
  }

}
