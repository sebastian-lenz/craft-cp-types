declare namespace Garnish {
  export interface BaseDragOptions {
    handle:
      | { (item: HTMLElement): string | HTMLElement }
      | string
      | HTMLElement
      | null;
    axis: string | null;
    ignoreHandleSelector: string;

    onDragStart: () => void;
    onDrag: () => void;
    onDragStop: () => void;
  }

  /**
   * Base drag class
   *
   * Does all the grunt work for manipulating elements via click-and-drag,
   * while leaving the actual element manipulation up to a subclass.
   */
  export class BaseDrag<
    TSettings extends BaseDragOptions = BaseDragOptions
  > extends Garnish.Base<TSettings> {
    $items: JQuery | null;
    $targetItem: JQuery | null;
    dragging: boolean;
    mousedownX: number | null;
    mousedownY: number | null;
    realMouseX: number | null;
    realMouseY: number | null;
    mouseX: number | null;
    mouseY: number | null;
    mouseDistX: number | null;
    mouseDistY: number | null;
    mouseOffsetX: number | null;
    mouseOffsetY: number | null;
    scrollProperty: string | null;
    scrollAxis: string | null;
    scrollDist: number | null;
    scrollProxy: Function | null;
    scrollFrame: number | null;
    _: any | null;

    static minMouseDist: number;
    static windowScrollTargetSize: number;

    /**
     * Constructor
     * @param {object} items    Elements that should be draggable right away. (Can be skipped.)
     * @param {object} settings Any settings that should override the defaults.
     */
    constructor(settings: Partial<TSettings>): void;
    constructor(
      items: ArrayLike<HTMLElement>,
      settings: Partial<TSettings>
    ): void;

    init(settings: Partial<TSettings>): void;
    init(items: ArrayLike<HTMLElement>, settings: Partial<TSettings>): void;

    /**
     * Returns whether dragging is allowed right now.
     */
    allowDragging(): boolean;

    /**
     * Start Dragging
     */
    startDragging(): void;

    /**
     * Drag
     */
    drag(didMouseMove: boolean): void;

    /**
     * Stop Dragging
     */
    stopDragging(): void;

    /**
     * Add Items
     * @param {object} items Elements that should be draggable.
     */
    addItems(items: ArrayLike<HTMLElement>): void;

    /**
     * Remove Items
     * @param {object} items Elements that should no longer be draggable.
     */
    removeItems(items: ArrayLike<HTMLElement>): void;

    /**
     * Remove All Items
     */
    removeAllItems(): void;

    // Events
    // ---------------------------------------------------------------------

    /**
     * On Drag Start
     */
    onDragStart(): void;

    /**
     * On Drag
     */
    onDrag(): void;

    /**
     * On Drag Stop
     */
    onDragStop(): void;

    // Private methods
    // ---------------------------------------------------------------------

    /**
     * Handle Mouse Down
     */
    _handleMouseDown(ev: Event);

    /**
     * ?
     */
    _getItemHandle(item: HTMLElement): JQuery;

    /**
     * Handle Mouse Move
     */
    _handleMouseMove(ev: Event): void;

    /**
     * Handle Moues Up
     */
    _handleMouseUp(ev: Event): void;

    /**
     * Scroll Window
     */
    _scrollWindow(): void;

    /**
     * Cancel Window Scroll
     */
    _cancelWindowScroll(): void;

    /**
     * Deinitialize an item.
     */
    _deinitItem(item: HTMLElement);
  }
}
