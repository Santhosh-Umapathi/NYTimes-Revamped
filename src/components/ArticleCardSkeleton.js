//Skeleton Placeholder
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ArticleCardSkeleton = () => (
  <div className="flex border-b rounded-md p-5 space-x-5">
    <Skeleton containerClassName="flex w-52 h-24" />

    <div className="flex flex-col space-y-2 w-full">
      <Skeleton containerClassName="flex w-2/3 h-6" />
      <Skeleton containerClassName="flex w-1/2 h-12" />

      <div className="flex space-x-10">
        <Skeleton containerClassName="flex w-28 h-2" />
        <Skeleton containerClassName="flex w-28 h-2" />
        <Skeleton containerClassName="flex w-28 h-2" />
      </div>
    </div>
  </div>
);

export default ArticleCardSkeleton;
