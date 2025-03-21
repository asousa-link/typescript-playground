// Drag & Drop interfaces
namespace App {
  export interface Draggable {
    dragStartHandler(event: DragEvent): void;
    dragEndHandler(event: DragEvent): void;
  }

  export interface DragTarget {
    // signal the browser that the thing is a valid drag target
    dragOverHandler(event: DragEvent): void;

    // react to the actual drop
    dropHandler(event: DragEvent): void;

    // react to canceled drop (revert visual update)
    dragLeaveHandler(event: DragEvent): void;
  }
}
