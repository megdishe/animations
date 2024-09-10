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
    ]),
    trigger('wildState', [
      state('normal', style({
        backgroundColor: 'blue',
        transform: 'translateX(0px) scale(1)'
      })),
      state('highlighted', style({
        backgroundColor: 'red',
        transform: 'translateX(100px) scale(1)'
      })),
      state('shrunken', style({
        backgroundColor: 'green',
        transform: 'translateX(0px) scale(0.5)'
      })),
      transition('shrunken <=> *', [
        style({
          backgroundColor: 'orange',
        }),
        animate(1000, style({
          borderRadius: '50px'
        })),
        animate(500)
      ])
    ]),
    trigger('listItemState', [
      transition('void => *', [style({
        opacity: 1,
        backgroundColor: 'green',
        transform: 'translateX(-100px)'
      }),
        animate(300)]),
      transition('* => void', [animate(200, style({
        opacity: 1,
        backgroundColor: 'red',
        transform: 'translateX(100px)'
      }))])
    ]),
  ]

})
export class AppComponent {
  list = ['Milk', 'Sugar', 'Bread'];
  state = 'normal';
  wildState = 'normal';

  onDelete(item: any) {
    const index = this.list.indexOf(item);
    this.list.splice(index, 1);
  }

  onAnimate() {
    this.state = this.state == 'normal' ? 'highlighted' : 'normal';
    this.wildState = this.wildState == 'normal' ? 'highlighted' : 'normal';
  }

  onAdd(item: any) {
    this.list.push(item);
  }

  onShrink() {
    this.wildState = 'shrunken'
  }
}
