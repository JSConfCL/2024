import { SVGAttributes } from "react";

import { cn } from "@/lib/utils";

import {
  IconCatalog,
  IconMapping,
  IllustrationCatalog,
  IllustrationMapping,
} from "./index";

interface IconProps extends SVGAttributes<SVGSVGElement> {
  /**
   * Additional CSS class to be applied to the SVG element.
   */
  className?: string;

  /**
   * The SVG to display.
   */
  catalog: IconCatalog | IllustrationCatalog;
}

export const Svg = ({ className, catalog, ...rest }: IconProps) => {
  const classes = {
    container: cn("fill-current", className),
  };

  let SvgDetails: {
    paths: {
      path: string;
      options?: Array<{ attribute: string; value: string }>;
    }[];
    viewBox: string;
  };

  const combinedMapping = { ...IconMapping, ...IllustrationMapping };

  if (catalog in combinedMapping) {
    SvgDetails = combinedMapping[catalog];
  } else {
    throw new Error(`Unknown type of SVG: ${catalog}`);
  }

  const convertOptionsToAttributes = (
    options?: Array<{ attribute: string; value: string }>,
  ): Record<string, string> => {
    if (!options || options.length === 0) {
      return {};
    }
    return options.reduce(
      (attributesObject: Record<string, string>, option) => {
        attributesObject[option.attribute] = option.value;
        return attributesObject;
      },
      {},
    );
  };

  const renderPath = () =>
    SvgDetails.paths.map((pathDetail, index) => (
      <path
        key={index}
        d={pathDetail.path}
        {...convertOptionsToAttributes(pathDetail.options)}
      />
    ));

  return (
    <svg
      className={classes.container}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={SvgDetails.viewBox}
      {...rest}
    >
      {renderPath()}
    </svg>
  );
};
