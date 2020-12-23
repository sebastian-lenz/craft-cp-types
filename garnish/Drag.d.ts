declare namespace Garnish {
  export interface DragOptions extends Garnish.BaseDragOptions {
    filter: { (): JQuery | null } | string | null;
    singleHelper: boolean;
    collapseDraggees: boolean;
    removeDraggee: boolean;
    copyDraggeeInputValuesToHelper: boolean;
    helperOpacity: number;
    helper: { (helper: JQuery): JQuery } | string | null;
    helperBaseZindex: number;
    helperLagBase: number;
    helperLagIncrementDividend: number;
    helperSpacingX: number;
    helperSpacingY: number;
    onReturnHelpersToDraggees: Function;
  }

  /**
   * Drag class
   *
   * Builds on the BaseDrag class by "picking up" the selceted element(s),
   * without worrying about what to do when an element is being dragged.
   */
  export class Drag<
    TSettings extends DragOptions = DragOptions
  > extends Garnish.BaseDrag<TSettings> {
    $draggee: JQuery | null;
    $targetItem: JQuery | null;
    targetItemWidth: number | null;
    targetItemHeight: number | null;
    targetItemPositionInDraggee: boolean | null;

    otherItems: Array<HTMLElement> | null;
    totalOtherItems: number | null;

    helpers: Array<JQuery> | null;
    helperTargets: Array<{ left: number; top: number }> | null;
    helperPositions: Array<{ left: number; top: number }> | null;
    helperLagIncrement: number | null;
    updateHelperPosProxy: Function | null;
    updateHelperPosFrame: number | null;

    lastMouseX: number | null;
    lastMouseY: number | null;

    _returningHelpersToDraggees: boolean;

    /**
     * Sets the draggee.
     */
    setDraggee($draggee: JQuery): void;

    /**
     * Appends additional items to the draggee.
     */
    appendDraggee($newDraggee: JQuery): void;

    /**
     * Identifies the item(s) that are being dragged.
     */
    findDraggee(): JQuery | null;

    /**
     * Returns the helper’s target X position
     */
    getHelperTargetX(): number;

    /**
     * Returns the helper’s target Y position
     */
    getHelperTargetY(): number;

    /**
     * Return Helpers to Draggees
     */
    returnHelpersToDraggees(): void;

    // Events
    // ---------------------------------------------------------------------

    onReturnHelpersToDraggees();

    // Private methods
    // ---------------------------------------------------------------------

    /**
     * Creates a helper.
     */
    _createHelper(index: number): void;

    /**
     * Update Helper Position
     */
    _updateHelperPos(): void;

    /**
     * Get the helper position for a draggee helper
     */
    _getHelperTarget(index: number): { left: number; top: number };

    /**
     * ?
     */
    _showDraggee(): void;
  }
}
