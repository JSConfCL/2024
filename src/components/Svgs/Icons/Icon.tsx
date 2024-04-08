import { SVGAttributes } from "react";

import { cn } from "@/lib/utils";

import { IconCatalog, IconMapping } from "./IconCatalog";

interface IconProps extends SVGAttributes<SVGSVGElement> {
  /**
   * Additional CSS class to be applied to the SVG element.
   */
  className?: string;

  /**
   * The logo to display.
   */
  icon: IconCatalog;
}

export const Icon = ({
  className,
  icon = IconCatalog.avocado,
  ...rest
}: IconProps) => {
  const classes = {
    container: cn("fill-current", className),
  };
  const iconDetails = IconMapping[icon];

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
    iconDetails.paths.map((pathDetail, index) => (
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
      viewBox={iconDetails.viewBox}
      {...rest}
    >
      {renderPath()}
    </svg>
  );
};
