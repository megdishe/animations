import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgFor} from "@angular/common";
import {animate, group, keyframes, state, style, transition, trigger} from "@angular/animations";

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
      transition('void => *', [
        animate(1000, keyframes([
          style(({
            transform: 'translateX(-100px)',
            opacity: 0,
            backgroundColor: '#c4f3c5',
            offset: 0,
          })),
          style(({
            transform: 'translateX(-50px)',
            opacity: 0.5,
            backgroundColor: '#73e67b',
            offset: 0.3,
          })),
          style(({
            transform: 'translateX(-20px)',
            opacity: 1,
            backgroundColor: '#04e414',
            offset: 0.8,
          })),
          style(({
            transform: 'translateX(0px)',
            opacity: 1,
            backgroundColor: 'green',
            offset: 1,
          })),
        ]))
      ]),
      transition('* => void', [
        group([
          animate(800,
            style({
              color: 'white'
            })),
          animate(1000, style({
            opacity: 0,
            backgroundColor: 'red',
            transform: 'translateX(100px)'
          }))
        ])
      ])
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
