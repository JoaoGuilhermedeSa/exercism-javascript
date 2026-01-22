// @ts-check

/**
 * @constructor
 * @param {number} [width=80]
 * @param {number} [height=60]
 */
export function Size(width = 80, height = 60) {
  /** @type {number} */
  this.width = width;

  /** @type {number} */
  this.height = height;
}

/**
 * @param {number} newWidth
 * @param {number} newHeight
 */
Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
};

/**
 * @constructor
 * @param {number} [x=0]
 * @param {number} [y=0]
 */
export function Position(x = 0, y = 0) {
  /** @type {number} */
  this.x = x;

  /** @type {number} */
  this.y = y;
}

/**
 * @param {number} newX
 * @param {number} newY
 */
Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
};

export class ProgramWindow {
  constructor() {
    /** @type {Size} */
    this.screenSize = new Size(800, 600);

    /** @type {Size} */
    this.size = new Size();

    /** @type {Position} */
    this.position = new Position();
  }

  /**
   * @param {Size} newSize
   */
  resize(newSize) {
    const minWidth = 1;
    const minHeight = 1;

    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;

    const width = Math.max(
      minWidth,
      Math.min(newSize.width, maxWidth)
    );

    const height = Math.max(
      minHeight,
      Math.min(newSize.height, maxHeight)
    );

    this.size.resize(width, height);
  }

  /**
   * @param {Position} newPosition
   */
  move(newPosition) {
    const minX = 0;
    const minY = 0;

    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;

    const x = Math.max(
      minX,
      Math.min(newPosition.x, maxX)
    );

    const y = Math.max(
      minY,
      Math.min(newPosition.y, maxY)
    );

    this.position.move(x, y);
  }
}

/**
 * @param {ProgramWindow} programWindow
 * @returns {ProgramWindow}
 */
export function changeWindow(programWindow) {
  programWindow.resize(new Size(400, 300));
  programWindow.move(new Position(100, 150));
  return programWindow;
}
