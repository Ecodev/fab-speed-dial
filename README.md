# Angular Material FAB speed dial

[![Build Status](https://github.com/Ecodev/fab-speed-dial/workflows/main/badge.svg)](https://github.com/Ecodev/fab-speed-dial/actions)
[![Total Downloads](https://img.shields.io/npm/dt/@ecodev/fab-speed-dial.svg)](https://www.npmjs.com/package/@ecodev/fab-speed-dial)
[![Latest Stable Version](https://img.shields.io/npm/v/@ecodev/fab-speed-dial.svg)](https://www.npmjs.com/package/@ecodev/fab-speed-dial)
[![License](https://img.shields.io/npm/l/@ecodev/fab-speed-dial.svg)](https://www.npmjs.com/package/@ecodev/fab-speed-dial)

This is a FAB speed dial component for Angular Material.

See the component in action on [the demo page](https://ecodev.github.io/fab-speed-dial).

## Install

1. Install the library:
   ```bash
   yarn add @ecodev/fab-speed-dial
   ```
2. In your standalone components add the following to the `imports` array:
   - `EcoFabSpeedDialComponent`
   - `EcoFabSpeedDialTriggerComponent`
   - `EcoFabSpeedDialActionsComponent`
   - `MatButtonModule`

## Usage

The following is an example of a minimal template. Either implement a `doAction()`,
or adapt the bindings to your needs:

```html
<eco-fab-speed-dial>
  <eco-fab-speed-dial-trigger>
    <button matFab (click)="doAction('trigger')"><mat-icon fontIcon="menu" /></button>
  </eco-fab-speed-dial-trigger>

  <eco-fab-speed-dial-actions>
    <button matMiniFab (click)="doAction('action1')"><mat-icon fontIcon="add" /></button>
    <button matMiniFab (click)="doAction('action2')"><mat-icon fontIcon="edit" /></button>
    <button matMiniFab (click)="doAction('action3')"><mat-icon fontIcon="search" /></button>
  </eco-fab-speed-dial-actions>
</eco-fab-speed-dial>
```

## Properties

### eco-fab-speed-dial

| Property    | Type                            | Default | Description                                |
| ----------- | ------------------------------- | ------- | ------------------------------------------ |
| `open`      | `boolean`                       | `false` | Indicates if this FAB Speed Dial is opened |
| `direction` | `up`, `down`, `left` or `right` | `up`    | The direction to open the action buttons   |

### eco-fab-speed-dial-trigger

| Property | Type      | Default | Description                                                               |
| -------- | --------- | ------- | ------------------------------------------------------------------------- |
| `spin`   | `boolean` | `false` | Enables the rotation of the trigger action when the speed dial is opening |

Additionally to spin property, add class "spin180" or "spin360" on html content inside of `eco-fab-speed-dial-trigger` tag to activate rotation on a specific element.

In case of buttons, the icon should rotate not the whole button (box-shadow would rotate too).

## Development

The most useful commands for development are:

- `yarn dev` to start a development server
- `yarn build-demo` to build the demo locally (it will be published automatically by GitHub Actions)
- `git tag -a 1.2.3 && git push` to publish the lib to npm (via GitHub Actions `release` job)

## Prior work

This lib was originally based on [angular-smd](https://github.com/jefersonestevo/angular-smd),
and its various forks, itself based on
[AngularJS FAB Speed Dial](https://material.angularjs.org/latest/demo/fabSpeedDial).
