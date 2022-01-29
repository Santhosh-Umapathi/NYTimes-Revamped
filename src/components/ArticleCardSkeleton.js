import { memo } from "react";
//Components
import { Skeleton } from ".";
//Recoil
import { useAtoms } from "../recoil/hooks";

const ArticleCardSkeleton = () => {
  const {
    state: { darkMode },
  } = useAtoms();
  return (
    <div
      className={`flex flex-col md:flex-row border-b p-2 md:p-5 md:space-x-5 space-y-1 md:space-y-0 ${
        darkMode && "border-bgDark"
      }`}
    >
      <Skeleton css="flex md:w-52 h-24" />

      <div className="flex flex-col space-y-1 md:space-y-2 w-full">
        <Skeleton css="flex w-2/3 h-6" />
        <Skeleton css="flex md:w-1/2 h-12" />

        <div className="flex space-x-10">
          <Skeleton css="flex w-28 h-2" />
          <Skeleton css="flex w-28 h-2" />
          <Skeleton css="flex w-28 h-2" />
        </div>
      </div>
    </div>
  );
};

export default memo(ArticleCardSkeleton);
