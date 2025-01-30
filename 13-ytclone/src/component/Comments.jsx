// yt original is only two level nesting but here we are going to  make n level nested comments
//  like in reddit
//so here to render commnet we are using recursion 

import CommentsListRecursion from "./CommentsListRecursion";
import { commentsData } from "./DummyData";




const Comments = () => {
  console.log(commentsData);

  return (
    <div className="m-5 p-2">
      <h1 className="text-  xl font-bold">Comments:</h1>
      <div>
        {commentsData.map((items) => (
          <CommentsListRecursion key ={items.id} items={items} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
