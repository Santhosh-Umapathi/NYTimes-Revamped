import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

//API
import { api } from "../api";
//Components
import { ArticleCard, ArticleCardSkeleton } from "../components";
//Components
import { Search } from "../components/icons";

//Recoil
import { useAtoms } from "../recoil/hooks";
const Home = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);

  const {
    state: { theme, articles },
    actions,
  } = useAtoms();

  const getArticles = useCallback(async () => {
    setIsLoading(true);
    try {
      const results = await api({
        query: "latest",
        fields: "snippet,source,pub_date,_id,word_count,headline,multimedia",
      });

      actions.setArticles(results.response.docs);
    } catch (error) {
      console.log("🚀 --- getArticles --- error", error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, []);

  useEffect(() => {
    getArticles();
  }, [getArticles]);

  const search = () => {
    console.log("search");
  };

  return (
    <div className="flex flex-col items-center w-full h-full space-y-3">
      <div className="flex w-96 items-center">
        <input
          className={`w-full border hover:border-opacity-70 transition-all rounded-md ring-0 outline-none p-2 ${
            theme === "dark"
              ? "bg-bgDark border-bgLight focus:shadow-sm focus:shadow-bgLight"
              : "bg-bgLight border-bgDark focus:shadow-lg"
          }`}
          placeholder={t("search")}
        />
        <Search dark={theme === "dark"} onClick={search} />
      </div>
      <div className="flex flex-col w-full px-20  space-y-3">
        <span className="text-2xl">{t("latest")}</span>
        <hr className="w-8 border-2 border-grey rounded-sm" />
        <div className="flex flex-col space-y-3 w-full bg-white shadow-md rounded-md h-96 overflow-y-scroll">
          {isLoading
            ? Array(5)
                .fill("")
                .map(() => <ArticleCardSkeleton />)
            : articles.map((item) => <ArticleCard item={item} />)}
        </div>
      </div>
    </div>
  );
};

export default Home;
