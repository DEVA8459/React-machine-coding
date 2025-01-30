

const LiveChatMassage = ({name ,massage}) => {
  return (
    <div className="flex items-center shadow-sm bg-slate-100 rounded-lg">
        <img
        alt="user"
        src="https://cdn-icons-png.flaticon.com/128/3177/3177440.png"
        className="w-7 h-7"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{massage}</span>
    </div>
  )
}

export default LiveChatMassage