declare namespace Craft {
  export interface BaseElementSelectCriteria {
    [key: string]: any;
  }

  export interface BaseElementSelectInputOptions {
    allowSelfRelations?: boolean;
    criteria?: BaseElementSelectCriteria | null;
    disabledElementIds?: null | Array<string | number>;
    editable?: boolean;
    editorSettings?: Partial<BaseElementEditorOptions>;
    elementType: string;
    fieldId?: any;
    id: string | number;
    limit: number | null;
    modalStorageKey: string | null;
    modalSettings?: BaseElementSelectorModalOptions;
    name: string;
    onRemoveElements?: Function;
    onSelectElements?: Function;
    prevalidate?: boolean;
    selectable?: boolean;
    showSiteMenu?: boolean;
    sortable?: boolean;
    sourceElementId: number | null;
    sources: string[] | null;
    viewMode: 'small' | 'large';
  }

  export class BaseElementSelectInput extends Garnish.Base {
    elementSort?: Garnish.Base;
    $elementsContainer: JQuery;

    constructor(options: BaseElementSelectInputOptions);

    getElements(): JQuery;
    getSelectedElementIds(): Array<number>;
    createNewElement(element: any): JQuery;
    appendElement(element: any): void;
    addElements(element: any): void;
    resetElements(): void;
  }
}

interface Window {
  draftEditor?: {
    checkForm(): void;
  };
}
