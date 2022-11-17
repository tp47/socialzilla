import ActivitiesItem from "../activitiesItem/ActivitiesItem";
import ListCard from "../listCard/ListCard";
import SuggestionItem from "../suggestionItem/SuggestionItem";
import UserItem from "../userItem/UserItem";

const Rightbar = () => {
  return (
    <section className="w-2/6 flex flex-col sticky top-16 gap-4 overflow-scroll">
      <ListCard heading="Suggestions">
        <SuggestionItem
          user={{
            name: "Иван Васильевич",
            url: "/",
            image:
              "https://yt3.ggpht.com/ytc/AMLnZu9U1YR60O4hjCfJHtYSjlpRNJx07bOADEDb6X-d=s48-c-k-c0x00ffffff-no-rj",
          }}
        />
      </ListCard>
      <ListCard heading="Latest activities">
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

export default Rightbar;
