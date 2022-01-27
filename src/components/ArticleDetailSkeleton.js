//Skeleton Placeholder
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ArticleDetailSkeleton = () => (
  <div className="flex flex-col px-5 space-y-5 w-full">
    <Skeleton containerClassName="flex w-7 h-7" circle />
    <Skeleton containerClassName="flex w-full h-60 rounded-md" />

    <div className="flex flex-col space-y-2 w-full">
      <Skeleton containerClassName="flex w-2/3 h-10" />

      <div className="flex space-x-40">
        <Skeleton containerClassName="flex w-40 h-4" />
        <Skeleton containerClassName="flex w-40 h-4" />
        <Skeleton containerClassName="flex w-40 h-4" />
      </div>
      <Skeleton containerClassName="flex w-full h-32" />
      <Skeleton containerClassName="flex w-40 h-4" />
    </div>
  </div>
);

export default ArticleDetailSkeleton;
