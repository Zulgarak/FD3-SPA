import { animate, style, transition, trigger } from '@angular/animations';

export const errorOnOf = trigger('errorOnOf', [
  transition('void => *', [
    style({
      opacity: 0,
    }),
    animate(500, style({
      opacity: '.7',
    })),
  ]),
  transition('* => void', [
    animate(500, style({
      opacity: 0,
    }))
  ])
]);
