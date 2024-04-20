interface SectionProps extends React.HTMLProps<HTMLDivElement> {
  colsSm: number;
  colsMd: number;
  colsLg: number;
  gap: number;
}

function validateNumberCols(cols: number) {
  return cols === undefined || cols < 1 ? 1 : cols;
}

export const Section: React.FC<SectionProps> = ({
  children,
  colsSm,
  colsMd,
  colsLg,
  gap,
  ...props
}) => {
  colsSm = validateNumberCols(colsSm);
  colsMd = validateNumberCols(colsMd);
  colsLg = validateNumberCols(colsLg);

  const STYLES = `
    w-full
    gap-${gap}
    grid
    grid-cols-1
    sm:grid-cols-${colsSm}
    md:grid-cols-${colsMd}
    lg:grid-cols-${colsLg}
  `;

  return (
    <section {...props} className={props.className + STYLES}>
      {children}
    </section>
  );
};
