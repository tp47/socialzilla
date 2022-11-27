import { memo } from "react";
import ActivitiesItem from "../activitiesItem/ActivitiesItem";
import ListCard from "../listCard/ListCard";
import SuggestionItem from "../suggestionItem/SuggestionItem";
import UserItem from "../userItem/UserItem";

const Rightbar = () => {
  return (
    <section className="w-2/6 hidden sm:flex flex-col sticky top-16 h-[calc(100vh-64px)] gap-4 overflow-scroll p-3 bg-neutral-100 dark:bg-secondary-bg-dark">
      <ListCard heading="Рекомендации">
        <SuggestionItem
          user={{
            name: "Иван Васильевич",
            url: "/",
            image:
              "https://yt3.ggpht.com/ytc/AMLnZu9U1YR60O4hjCfJHtYSjlpRNJx07bOADEDb6X-d=s48-c-k-c0x00ffffff-no-rj",
          }}
        />
      </ListCard>
      <ListCard heading="Действия друзей">
        <ActivitiesItem
          user={{
            name: "Иван Васильевич",
            url: "/",
            image:
              "https://yt3.ggpht.com/ytc/AMLnZu9U1YR60O4hjCfJHtYSjlpRNJx07bOADEDb6X-d=s48-c-k-c0x00ffffff-no-rj",
          }}
          activity="лайкнул"
          time="1 мин назад"
        />
      </ListCard>
      <ListCard heading="Друзья онлайн">
        <UserItem
          user={{
            name: "Иван Васильевич",
            url: "/",
            image:
              "https://yt3.ggpht.com/ytc/AMLnZu9U1YR60O4hjCfJHtYSjlpRNJx07bOADEDb6X-d=s48-c-k-c0x00ffffff-no-rj",
          }}
          isOnline="true"
        />
      </ListCard>
    </section>
  );
};

export default memo(Rightbar);
