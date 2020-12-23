declare namespace Garnish {
  export interface DragSortOptions extends DragOptions {
    container: null;
    insertion: { ($draggee: JQuery): JQuery } | string | null;
    moveTargetItemToFront: boolean;
    magnetStrength: number;
    onInsertionPointChange: Function;
    onSortChange: Function;
  }

  /**
   * Drag-to-sort class
   *
   * Builds on the Drag class by allowing you to sort the elements amongst themselves.
   */
  export class DragSort<
    TOptions extends DragSortOptions = DragSortOptions
  > extends Garnish.Drag<TOptions> {
    $heightedContainer: JQuery | null;
    $insertion: JQuery | null;
    insertionVisible: boolean;
    oldDraggeeIndexes: null;
    newDraggeeIndexes: null;
    closestItem: null;

    _midpointVersion: number;
    _$prevItem: JQuery | null;

    /**
     * Creates the insertion element.
     */
    createInsertion: JQuery | undefined;

    /**
     * Returns whether the draggee can be inserted before a given item.
     */
    canInsertBefore($item: JQuery): boolean;

    /**
     * Returns whether the draggee can be inserted after a given item.
     */
    canInsertAfter($item): boolean;

    // Events
    // ---------------------------------------------------------------------

    /**
     * On Insertion Point Change event
     */
    onInsertionPointChange(): void;

    /**
     * On Sort Change event
     */
    onSortChange(): void;

    // Private methods
    // ---------------------------------------------------------------------

    /**
     * ?
     */
    _getItemIndex(item: HTMLElement): number;

    /**
     * ?
     */
    _getDraggeeIndexes(): Array<number>;

    /**
     * Returns the closest item to the cursor.
     */
    _getClosestItem(): HTMLElement | null;

    /**
     * ?
     */
    _clearMidpoints();

    /**
     * ?
     */
    _getItemMidpoint(item: HTMLElement): { x: number; y: number };

    /**
     * ?
     */
    _testForClosestItem(item: HTMLElement): void;

    /**
     * Updates the position of the insertion point.
     */
    _updateInsertion(): void;

    /**
     * ?
     */
    _moveDraggeeToItem(item: HTMLElement): void;

    /**
     * ?
     */
    _placeInsertionWithDraggee(): void;

    /**
     * ?
     */
    _removeInsertion(): void;
  }
}
