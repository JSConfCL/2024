import { SVGAttributes } from "react";

import { cn } from "@/lib/utils";

import {
  IllustrationCatalog,
  IllustrationMapping,
} from "./IllustrationCatalog";

interface IconProps extends SVGAttributes<SVGSVGElement> {
  /**
   * Additional CSS class to be applied to the SVG element.
   */
  className?: string;

  /**
   * The logo to display.
   */
  illustration: IllustrationCatalog;
}

export const Icon = ({
  className,
  illustration = IllustrationCatalog.mountain,
  ...rest
}: IconProps) => {
  const classes = {
    container: cn("fill-current", className),
  };
  const IllustrationDetails = IllustrationMapping[illustration];

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
    IllustrationDetails.paths.map((pathDetail, index) => (
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
      viewBox={IllustrationDetails.viewBox}
      {...rest}
    >
      {renderPath()}
    </svg>
  );
};
