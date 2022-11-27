const Story = ({story}) => {
  return (
    <div className="relative flex-initial w-12 h-12 overflow-hidden rounded-full sm:rounded-xl sm:h-52 sm:w-36 shrink-0">
      <img className="object-cover w-full h-full" src={story.image} alt={story.userName} />
      <span className="absolute hidden sm:block font-bold text-white bottom-3 left-2">{story.userName}</span>
    </div>
  );
}

export default Story;
