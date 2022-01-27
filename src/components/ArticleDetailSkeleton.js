//Skeleton Placeholder
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ArticleDetailSkeleton = ({ darkMode = false }) => (
  <div className="flex flex-col px-5 space-y-5 w-full">
    <Skeleton
      containerClassName="flex w-7 h-7"
      circle
      baseColor={darkMode && "#24292F"}
      highlightColor={darkMode && "#0D1116"}
    />
    <Skeleton
      containerClassName="flex w-full h-60 rounded-md"
      baseColor={darkMode && "#24292F"}
      highlightColor={darkMode && "#0D1116"}
    />

    <div className="flex flex-col space-y-2 w-full">
      <Skeleton
        containerClassName="flex w-2/3 h-10"
        baseColor={darkMode && "#24292F"}
        highlightColor={darkMode && "#0D1116"}
      />

      <div className="flex space-x-40">
        <Skeleton
          containerClassName="flex w-40 h-4"
          baseColor={darkMode && "#24292F"}
          highlightColor={darkMode && "#0D1116"}
        />
        <Skeleton
          containerClassName="flex w-40 h-4"
          baseColor={darkMode && "#24292F"}
          highlightColor={darkMode && "#0D1116"}
        />
        <Skeleton
          containerClassName="flex w-40 h-4"
          baseColor={darkMode && "#24292F"}
          highlightColor={darkMode && "#0D1116"}
        />
      </div>
      <Skeleton
        containerClassName="flex w-full h-32"
        baseColor={darkMode && "#24292F"}
        highlightColor={darkMode && "#0D1116"}
      />
      <Skeleton
        containerClassName="flex w-40 h-4"
        baseColor={darkMode && "#24292F"}
        highlightColor={darkMode && "#0D1116"}
      />
    </div>
  </div>
);

export default ArticleDetailSkeleton;
