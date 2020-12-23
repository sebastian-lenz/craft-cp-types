declare namespace Craft {
  export function t(
    category: string,
    message: string,
    params?: { [name: string]: string }
  ): string;

  export function setElementSize(
    element: HTMLElement | JQuery,
    size: 'large' | 'small'
  ): void;

  export const datepickerOptions: {
    constrainInput: boolean;
    dateFormat: string;
    dayNames: Array<string>;
    dayNamesMin: Array<string>;
    dayNamesShort: Array<string>;
    firstDay: number;
    monthNames: Array<string>;
    monthNamesShort: Array<string>;
    nextText: string;
    prevText: string;
  };

  export const timepickerOptions: {
    closeOnWindowScroll: boolean;
    lang: {
      AM: string;
      am: string;
      PM: string;
      pm: string;
    };
    orientation: string;
    timeFormat: string;
    show2400?: boolean;
  };
}
