import UserItem from "../userItem/UserItem";

const SuggestionItem = () => {
  return (
    <div>
      <UserItem
        user={{
          name: "Иван Васильевич",
          url: "/",
          photo:
            "https://yt3.ggpht.com/ytc/AMLnZu9U1YR60O4hjCfJHtYSjlpRNJx07bOADEDb6X-d=s48-c-k-c0x00ffffff-no-rj",
        }}
      />
    </div>
  );
};

export default SuggestionItem;
