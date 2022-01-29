import { memo } from "react";
import { useSearchParams } from "react-router-dom";
//Icons
import { BackIcon, NextIcon } from "./icons";

const Pagination = ({ page = 0, query = "", darkMode = false }) => {
  const [_, setSearchParams] = useSearchParams();

  return (
    <div className="flex w-full flex-row justify-end space-x-5 items-center">
      <BackIcon
        onClick={() => !page <= 0 && setSearchParams({ query, page: page - 1 })}
        disabled={page <= 0}
        darkMode={darkMode}
      />
      <span
        className={`text-lg ${
          darkMode ? "text-bgLight" : "text-grey"
        } select-none`}
      >
        {page + 1}
      </span>
      <NextIcon
        onClick={() => setSearchParams({ query, page: page + 1 })}
        darkMode={darkMode}
      />
    </div>
  );
};

export default memo(Pagination);
