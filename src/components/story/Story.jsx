const Story = ({story}) => {
  return (
    <div className="flex-initial rounded-xl overflow-hidden h-52 w-30 relative shrink-0">
      <img className="w-full h-full object-cover" src={story.image} alt={story.userName} />
      <span className="absolute bottom-3 left-2 text-white font-bold">{story.userName}</span>
    </div>
  );
}

export default Story;
