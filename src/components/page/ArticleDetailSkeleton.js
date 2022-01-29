import { memo } from "react";
//Components
import { Skeleton } from "..";

const ArticleDetailSkeleton = () => (
  <div className="flex flex-col px-5 space-y-5 w-full">
    <Skeleton
      css="flex w-7 h-7"
      circle
      baseColor="#24292F"
      highlightColor="#0D1116"
    />
    <Skeleton
      css="flex w-full h-52 md:h-60 rounded-md"
      baseColor="#24292F"
      highlightColor="#0D1116"
    />

    <div className="flex flex-col space-y-2 w-full">
      <Skeleton
        css="flex w-2/3 h-10"
        baseColor="#24292F"
        highlightColor="#0D1116"
      />

      <div className="flex space-x-5 md:space-x-40">
        <Skeleton
          css="flex w-40 h-4"
          baseColor="#24292F"
          highlightColor="#0D1116"
        />
        <Skeleton
          css="flex w-40 h-4"
          baseColor="#24292F"
          highlightColor="#0D1116"
        />
        <Skeleton
          css="flex w-40 h-4"
          baseColor="#24292F"
          highlightColor="#0D1116"
        />
      </div>
      <Skeleton
        css="flex w-full h-32"
        baseColor="#24292F"
        highlightColor="#0D1116"
      />
      <Skeleton
        css="flex w-40 h-4"
        baseColor="#24292F"
        highlightColor="#0D1116"
      />
    </div>
  </div>
);

export default memo(ArticleDetailSkeleton);
