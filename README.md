# Angular Material FAB speed dial

This is a FAB speed dial component for Angular Material (v5+).

See the component in action on [the demo page](https://ecodev.github.io/fab-speed-dial).

## Install

```bash
yarn add @ecodev/fab-speed-dial
```

## Usage

```html
<eco-fab-speed-dial [(open)]="open" [direction]="direction" [animationMode]="animationMode" [fixed]="fixed">
    <eco-fab-speed-dial-trigger>
        <button mat-fab (click)="actionX()"><mat-icon>check</mat-icon></button>
    </eco-fab-speed-dial-trigger>

    <eco-fab-speed-dial-actions>
        <button mat-mini-fab (click)="action1()"><mat-icon>add</mat-icon></button>
        <button mat-mini-fab (click)="action2()"><mat-icon>edit</mat-icon></button>
        <button mat-mini-fab (click)="action3()"><mat-icon>menu</mat-icon></button>
    </eco-fab-speed-dial-actions>
</eco-fab-speed-dial>
```

## Properties

### eco-fab-speed-dial

| Property         | Type                 | Default             | Description                                            |
|------------------|----------------------|---------------------|--------------------------------------------------------|
| `open`             | `boolean`          | `false`             | Indicates if this FAB Speed Dial is opened             |
| `direction`        | `up`, `down`, `left` or `right` | `up`   | The direction to open the action buttons               |
| `animationMode`    | `fling` or `scale` | `fling`             | The animation to apply when opening the action buttons |
| `fixed`            | `boolean`          | `false`             | Indicates if this FAB Speed Dial is fixed (user cannot change the open state on click) |

### eco-fab-speed-dial-trigger

| Property         | Type         | Default             | Description                                     |
|------------------|--------------|---------------------|-------------------------------------------------|
| `spin`           | `boolean`    | `false`             | Enables the rotation (360dg) of the trigger action when the speed dial is opening |

## Development

The most useful commands for development are:

- `yarn dev` to start a development server
- `yarn build:docs` to build and commit (but not push) the docs/demo page
- `yarn release` to publish the lib to npm

## TODO List

 - Change color of the fab buttons on hover/selection
 - Make the trigger button change icon when the user open the speed dial (configurable)
 - Let the speed dial open a "sheet" of material instead of just mini-fab action buttons

## Prior work

This lib was originally based on [angular-smd](https://github.com/jefersonestevo/angular-smd),
and its various forks, itself based on
[AngularJS FAB Speed Dial](https://material.angularjs.org/latest/demo/fabSpeedDial).
