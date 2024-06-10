import React, {
  Children,
  cloneElement,
  isValidElement,
  ReactNode,
} from "react";

import { cn } from "@/lib/utils";

const styles = {
  "": ["w-full md:w-6/12", "w-full md:w-6/12"],
  "50-50": ["w-full md:w-6/12", "w-full md:w-6/12"],
  "55-45": ["w-full md:w-7/12", "w-full md:w-5/12"],
  "66-33": ["w-full md:w-8/12", "w-full md:w-4/12"],
  "45-55": ["w-full md:w-7/12", "w-full md:w-5/12"],
  "33-66": ["w-full md:w-4/12", "w-full md:w-8/12"],
};

export type RowType = keyof typeof styles;

interface RowProps {
  children: ReactNode | ReactNode[];
  rowType: RowType;
  inverse?: boolean | null;
}

export const Row = ({ children, rowType, inverse = false }: RowProps) => {
  return (
    <div
      className={cn(
        "container mx-auto flex max-w-[1136px] flex-col gap-8 p-4 md:flex-row md:items-center",
        inverse && "flex-col-reverse md:flex-row",
      )}
    >
      {Children.map(children, (child, idx) => {
        if (!isValidElement(child)) {
          return null;
        }

        const newChild = cloneElement(child);

        return (
          <div key={idx} className={(styles[rowType] ?? styles[""])[idx] || ""}>
            {newChild}
          </div>
        );
      })}
    </div>
  );
};
