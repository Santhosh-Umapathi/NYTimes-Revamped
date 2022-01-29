//Skeleton Placeholder
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ArticleCardSkeleton = ({ darkMode = false }) => (
  <div className="flex border-b p-5 space-x-5">
    <Skeleton
      containerClassName="flex w-52 h-24"
      baseColor={darkMode && "#0D1116"}
      highlightColor={darkMode && "#24292F"}
    />

    <div className="flex flex-col space-y-2 w-full">
      <Skeleton
        containerClassName="flex w-2/3 h-6"
        baseColor={darkMode && "#0D1116"}
        highlightColor={darkMode && "#24292F"}
      />
      <Skeleton
        containerClassName="flex w-1/2 h-12"
        baseColor={darkMode && "#0D1116"}
        highlightColor={darkMode && "#24292F"}
      />

      <div className="flex space-x-10">
        <Skeleton
          containerClassName="flex w-28 h-2"
          baseColor={darkMode && "#0D1116"}
          highlightColor={darkMode && "#24292F"}
        />
        <Skeleton
          containerClassName="flex w-28 h-2"
          baseColor={darkMode && "#0D1116"}
          highlightColor={darkMode && "#24292F"}
        />
        <Skeleton
          containerClassName="flex w-28 h-2"
          baseColor={darkMode && "#0D1116"}
          highlightColor={darkMode && "#24292F"}
        />
      </div>
    </div>
  </div>
);

export default ArticleCardSkeleton;
