declare namespace Craft {
  export interface RedactorInputOptions {
    id: string;
    linkOptions?: any;
    volumes?: any;
    transforms?: any;
    elementSiteId?: any;
    redactorConfig?: any;
    redactorLang?: any;
    direction?: any;
  }

  export class RedactorInput extends Garnish.Base {
    redactor: {
      on: (event: string, callback: Function) => void;
      off: (event: string, callback: Function) => void;
      source: {
        getCode: () => string;
        setCode: (value: string) => void;
      };
    };

    constructor(options: RedactorInputOptions);
  }
}
