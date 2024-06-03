type SVGPathAttributeNames =
  | "fill"
  | "stroke"
  | "strokeWidth"
  | "strokeLinecap"
  | "strokeLinejoin"
  | "strokeMiterlimit"
  | "fillRule"
  | "clipRule";

interface PathOption {
  /**
   * The name of the attribute (e.g., "fill", "stroke").
   */
  attribute: SVGPathAttributeNames;

  /**
   * The value of the attribute.
   */
  value: string;
}

interface SvgPath {
  /**
   * The SVG path data.
   */
  path: string;

  /**
   * Optional attributes to apply to the path.
   */
  options?: Array<PathOption>;
}

export interface SvgType {
  /**
   * The viewBox attribute of the SVG, defining the aspect ratio and scaling.
   */
  viewBox: string;

  /**
   * An array of LogoPath objects, each representing a path in the SVG.
   */
  paths: Array<SvgPath>;
}
