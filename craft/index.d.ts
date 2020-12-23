/// <reference path="./cp/index.d.ts"/>
/// <reference path="./redactor/index.d.ts"/>

declare interface JQueryStatic {
  datepicker: {
    formatDate(format: string, date: Date, options?: any): string;
  };
}

declare interface JQuery<TElement = HTMLElement> extends Iterable<TElement> {
  datepicker(options: any): any;
  lightswitch(): any;
  timepicker(options: any): any;

  // $('.grid', $container).grid();
  // $('.info', $container).infoicon();
  // $('.checkbox-select', $container).checkboxselect();
  // $('.fieldtoggle', $container).fieldtoggle();
  // $('.nicetext', $container).nicetext();
  // $('.pill', $container).pill();
  // $('.formsubmit', $container).formsubmit();
  // $('.menubtn', $container).menubtn();
}
