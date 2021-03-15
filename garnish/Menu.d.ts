declare namespace Garnish {
  export interface MenuSettings {
    anchor?: any;
    windowSpacing?: number;
    onOptionSelect?: (option: Element) => void;
  }

  export class Menu extends Garnish.Base<MenuSettings> {
    $anchor: JQuery | null;
    $container: JQuery | null;
    $options: JQuery | null;
    menuId: string;
    visible: boolean;
    _anchorHeight: number | null;
    _anchorOffset: number | null;
    _anchorOffsetBottom: number | null;
    _anchorOffsetRight: number | null;
    _anchorWidth: number | null;
    _menuHeight: number | null;
    _menuWidth: number | null;
    _windowHeight: number | null;
    _windowScrollLeft: number | null;
    _windowScrollTop: number | null;
    _windowWidth: number | null;

    constructor(container: string | Element | JQuery, settings: MenuSettings);

    addOptions($options: JQuery): void;
    hide(): void;
    selectOption(option): void;
    setPositionRelativeToAnchor(): void;
    show(): void;
    _alignLeft(): void;
    _alignRight(): void;
    _alignCenter(): void;
  }
}
