const TodoList = ({ tasks ,deleteTask ,StrikeThrough }) => {
  return <div>
    {tasks.map((task)=>{
      return(<>
      <table>
      <td style={{ textDecoration: task.completed ? 'line-through' : 'none'}}>
        <input type="checkbox" onClick={()=>StrikeThrough(task.id)} />
        <span>{task.text} </span>
      <button onClick={()=>deleteTask(task.id)}>❌</button>
      </td></table>
      </>
      )
    })}
  </div>
};

export default TodoList;
