interface CardLoadingProps {
  width: number;
  height: number;
}

export const CardLoading: React.FC<CardLoadingProps> = ({ width, height }) => (
  <svg
    width={width}
    height={height}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className="rounded-2xl"
  >
    <defs>
      <linearGradient id="g">
        <stop stopColor="#333" offset="20%" />
        <stop stopColor="#222" offset="50%" />
        <stop stopColor="#333" offset="70%" />
      </linearGradient>
    </defs>
    <rect width={width} height={height} fill="#333" />
    <rect id="r" width={width} height={height} fill="url(#g)" />
    <animate
      href="#r"
      attributeName="x"
      from={`-${width}`}
      to={width}
      dur="1s"
      repeatCount="indefinite"
    />
  </svg>
);

