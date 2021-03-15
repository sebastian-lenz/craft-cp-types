declare namespace Garnish {
  export interface MenuBtnSettings {
    menuAnchor?: string | Element | JQuery | null;
    onOptionSelect?: { (option: Element): void };
  }

  export class MenuBtn extends Garnish.Base<MenuBtnSettings> {
    $btn: JQuery;
    disabled: boolean;
    menu: Garnish.Menu;
    menuAnchor: string | Element | JQuery | null;
    showingMenu: boolean;

    constructor($menuBtn: JQuery, settings?: MenuBtnSettings);
    constructor(
      $menuBtn: JQuery,
      menu?: Garnish.Menu,
      settings?: MenuBtnSettings
    );

    disable(): void;
    enable(): void;
    focusOption($option): void;
    hideMenu(): void;
    onBlur(): void;
    onKeyDown(event: Event): void;
    onMenuHide(): void;
    onMouseDown(event: Event): void;
    onOptionSelect(option: Element): void;
    showMenu(): void;
  }
}
