import { useState } from "react";
const CommentsListRecursion = ({ items }) => {
    const [showComment , setShowCommnet ] =useState(false)
  return (
    <div>
      <div
        key={items.id}
       
        className={`flex  bg-gray-200 rounded-lg items-center gap-2 px-1 p-2 m-2 `}
       
      >
        <img
          alt="user"
          src="https://cdn-icons-png.flaticon.com/128/3177/3177440.png"
          className="w-9 h-9"
        />
        <div>
          <p>{items.name}</p>
          <p>{items.text}</p>
          {items.replies.length >0 ?<p className={`${items.replies.length ===0 ?"font-light" : "font-bold"} cursor-pointer` }  onClick={()=>setShowCommnet(!showComment)}>{items.replies.length} replies</p>:" " }
          
        </div>
      </div>
      <div>
        {showComment && items.replies && items.replies.length > 0 && (
          <div className="pl-10">
            {items.replies.map((x) => (
              <CommentsListRecursion key={x.id} items={x} className/>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentsListRecursion;
