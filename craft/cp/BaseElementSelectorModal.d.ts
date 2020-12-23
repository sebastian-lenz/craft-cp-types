declare namespace Craft {
  export interface BaseElementSelectorModalOptions {
    criteria: BaseElementSelectCriteria | null;
    defaultSiteId: string | number | null;
    defaultSource: string | null;
    disabledElementIds: Array<string | number>;
    disableElementsOnSelect: boolean;
    hideOnSelect: boolean;
    hideSidebar: boolean;
    multiSelect: boolean;
    onCancel: Function;
    onSelect: Function;
    resizable: boolean;
    showSiteMenu: boolean;
    sources: string[] | null;
    storageKey: null | string;
  }
}
