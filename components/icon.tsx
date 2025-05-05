const Icon = ({
  width,
  height,
  className,
}: {
  width?: string;
  height?: string;
  className?: string;
}) => (
  <svg
    width={width ? width : "200"}
    height={height ? height : "200"}
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="white"
    // strokeWidth="2"
  >
    <polygon points="50,50 100,10 150,50 130,90 70,90" fill="#00BCD4" />

    <polygon points="70,90 100,10 130,90 100,190" fill="#03A9F4" />
    <polygon points="50,50 70,90 100,190 50,120" fill="#00ACC1" />
    <polygon points="150,50 130,90 100,190 150,120" fill="#0288D1" />
  </svg>
);

export default Icon;

{
  /* <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2">
  <!-- Your SVG paths with no fill or with specific fill color -->
  <path d="..." fill="#00D8FF" />
</svg> */
}
