import { memo } from "react";
import Skeleton from "react-loading-skeleton";
//Recoil
import { useAtoms } from "../recoil/hooks";

const SkeletonComponent = ({
  css = "",
  baseColor = "#0D1116",
  highlightColor = "#24292F",
  ...props
}) => {
  const {
    state: { darkMode },
  } = useAtoms();

  return (
    <Skeleton
      containerClassName={css}
      baseColor={darkMode && baseColor}
      highlightColor={darkMode && highlightColor}
      {...props}
    />
  );
};

export default memo(SkeletonComponent);
