declare namespace Craft {
  export interface LightSwitchOptions {
    value: boolean | string;
    onChange: Function;
  }

  export class LightSwitch extends Garnish.Base {
    settings: LightSwitchOptions;
    $outerContainer: JQuery;
    $innerContainer: JQuery;
    $input: JQuery;
    // @ts-ignore
    on: boolean;
    small: boolean;
    dragger: Garnish.BaseDrag;
    dragStartMargin: number | null;
    constructor(container: HTMLElement, settings: Partial<LightSwitchOptions>);
    turnOn(): void;
    turnOff(): void;
    toggle(): void;
    onChange(): void;
    _onMouseDown(): void;
    _onMouseUp(): void;
    _onKeyDown(event: KeyboardEvent): void;
    _getMargin(): number;
    _onDragStart(): void;
    _onDrag(): void;
    _onDragStop(): void;
    _onSettle(): void;
    _getOffMargin(): number;
  }
}
