declare namespace Craft {
  export interface BaseElementEditorOptions {
    attributes: any;
    elementId: string | number;
    elementIndex: any;
    elementType: string;
    hudTrigger: any;
    onBeginLoading: Function;
    onCreateForm: Function;
    onEndLoading: Function;
    onHideHud: Function;
    onSaveElement: Function;
    onShowHud: Function;
    params: any;
    prevalidate: boolean;
    showSiteSwitcher: boolean;
    siteId: string | number;
    validators: Array<any>;
  }
}
