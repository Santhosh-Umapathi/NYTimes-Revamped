import { memo } from "react";
//Components
import { Skeleton } from ".";

const ArticleCardSkeleton = ({ darkMode = false }) => (
  <div className="flex border-b p-5 space-x-5">
    <Skeleton css="flex w-52 h-24" darkMode={darkMode} />

    <div className="flex flex-col space-y-2 w-full">
      <Skeleton css="flex w-2/3 h-6" darkMode={darkMode} />
      <Skeleton css="flex w-1/2 h-12" darkMode={darkMode} />

      <div className="flex space-x-10">
        <Skeleton css="flex w-28 h-2" darkMode={darkMode} />
        <Skeleton css="flex w-28 h-2" darkMode={darkMode} />
        <Skeleton css="flex w-28 h-2" darkMode={darkMode} />
      </div>
    </div>
  </div>
);

export default memo(ArticleCardSkeleton);
