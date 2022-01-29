import { memo } from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonComponent = ({
  css = "",
  darkMode = false,
  baseColor = "#0D1116",
  highlightColor = "#24292F",
  ...props
}) => (
  <Skeleton
    containerClassName={css}
    baseColor={darkMode && baseColor}
    highlightColor={darkMode && highlightColor}
    {...props}
  />
);

export default memo(SkeletonComponent);
