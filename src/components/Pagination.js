import { memo } from "react";
import { useSearchParams } from "react-router-dom";
//Recoil
import { useAtoms } from "../recoil/hooks";
//Icons
import { BackIcon, NextIcon } from "./icons";

const Pagination = ({ page = 0, query = "" }) => {
  const {
    state: { darkMode },
  } = useAtoms();
  const [_, setSearchParams] = useSearchParams();

  return (
    <div className="flex w-full flex-row justify-end space-x-5 items-center">
      <BackIcon
        onClick={() => !page <= 0 && setSearchParams({ query, page: page - 1 })}
        disabled={page <= 0}
      />
      <span
        className={`text-lg ${
          darkMode ? "text-bgLight" : "text-grey"
        } select-none`}
      >
        {page + 1}
      </span>
      <NextIcon onClick={() => setSearchParams({ query, page: page + 1 })} />
    </div>
  );
};

export default memo(Pagination);
