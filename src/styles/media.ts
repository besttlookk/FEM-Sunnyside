const customMediaQuery = (minWidth: number) =>
  `@media (min-width: ${minWidth}px)`;

const media = {
  tablet: customMediaQuery(780),
};

export default media;
