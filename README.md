# Angular Material FAB speed dial

[![Build Status](https://travis-ci.com/Ecodev/fab-speed-dial.svg?branch=master)](https://travis-ci.com/Ecodev/fab-speed-dial)
[![Total Downloads](https://img.shields.io/npm/dt/@ecodev/fab-speed-dial.svg)](https://www.npmjs.com/package/@ecodev/fab-speed-dial)
[![Latest Stable Version](https://img.shields.io/npm/v/@ecodev/fab-speed-dial.svg)](https://www.npmjs.com/package/@ecodev/fab-speed-dial)
[![License](https://img.shields.io/npm/l/@ecodev/fab-speed-dial.svg)](https://www.npmjs.com/package/@ecodev/fab-speed-dial)
[![Join the chat at https://gitter.im/Ecodev/fab-speed-dial](https://badges.gitter.im/Ecodev/fab-speed-dial.svg)](https://gitter.im/Ecodev/fab-speed-dial)

This is a FAB speed dial component for Angular Material (v7+).

See the component in action on [the demo page](https://ecodev.github.io/fab-speed-dial).

## Install

1. Install the library:
    ```bash
    yarn add @ecodev/fab-speed-dial
    ```
2. In `app.module.ts` add the following modules to the `imports` array:
    - `MatButtonModule`
    - `MatIconModule`
    - `EcoFabSpeedDialModule`

## Usage

The following is an example of a minimal template. Either implement a `doAction()`,
or adapt the bindings to your needs:

```html
<eco-fab-speed-dial>
    <eco-fab-speed-dial-trigger>
        <button mat-fab (click)="doAction('trigger')"><mat-icon>menu</mat-icon></button>
    </eco-fab-speed-dial-trigger>

    <eco-fab-speed-dial-actions>
        <button mat-mini-fab (click)="doAction('action1')"><mat-icon>add</mat-icon></button>
        <button mat-mini-fab (click)="doAction('action2')"><mat-icon>edit</mat-icon></button>
        <button mat-mini-fab (click)="doAction('action3')"><mat-icon>search</mat-icon></button>
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
| `spin`           | `boolean`    | `false`             | Enables the rotation of the trigger action when the speed dial is opening |

Additionally to spin property, add class "spin180" or "spin360" on html content inside of `eco-fab-speed-dial-trigger` tag to activate rotation on a specific element.

In case of buttons, the icon should rotate not the whole button (box-shadow would rotate too).

## Development

The most useful commands for development are:

- `yarn dev` to start a development server
- `yarn build-demo` to build the demo locally (it will be published automatically by Travis)
- `git tag -a 1.2.3 && git push` to publish the lib to npm (via Travis deploy mechanism)

## TODO List

 - Change color of the fab buttons on hover/selection
 - Make the trigger button change icon when the user open the speed dial (configurable)
 - Let the speed dial open a "sheet" of material instead of just mini-fab action buttons

## Prior work

This lib was originally based on [angular-smd](https://github.com/jefersonestevo/angular-smd),
and its various forks, itself based on
[AngularJS FAB Speed Dial](https://material.angularjs.org/latest/demo/fabSpeedDial).
