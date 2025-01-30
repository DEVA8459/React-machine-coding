
const Button = ({name}) => {
  return (
    <button className="bg-gray-400 flex justify-between p-1 m-2 rounded-lg hover:bg-slate-500">
       {name}
    </button>
  )
}

export default Button 