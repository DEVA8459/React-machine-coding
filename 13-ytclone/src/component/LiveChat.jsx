// so here we are going to make the live chat of yt
// we basically going to face 2 challgae regarding the
//get data live
//update the ui
// for live data
//1.  we can use the web socket
// web socket is two way connection
// like  a handshake between server and ui
// can quickly send data from either side
// like in zerodha ,trading apps
//2. or can use Api polling
// data can came in intervals
//gmail ,crickbuzz,

import { useEffect, useState } from "react";
import LiveChatMassage from "./LiveChatMassage";
import { useDispatch, useSelector } from "react-redux";
import { addMassage } from "../utils/reducer/LiveChatSlice";
import { EmojiGenearator, generateRandomName, makeRandomMassage } from "../constant/helper";

const LiveChat = () => {
  // polling Logic

  const[text ,setText ] =useState("")

  const chatMassage = useSelector((store) => store.chat.massage);
  const dispatch = useDispatch();
  useEffect(() => {
    const i = setInterval(() => {
      console.log("Api polling");
      dispatch(
        addMassage({
          name: generateRandomName(),
          massage:` ${makeRandomMassage(30)} ${EmojiGenearator()}`
        })
      );
    }, 1000);
    return () => clearInterval(i);
  }, []);

  const handleClick =()=>{
    return (dispatch(addMassage({
      name:"Devendra",
      massage:text

    })),
    setText("")
  )
    
  }  
  return (
    <div className="w-full h-[500px] ml-4 p-4 border border-black bg-slate-100 overflow-y-scroll flex flex-col-reverse ">
      <div>
        <input type="text" placeholder="hey" value={text} onChange={(e)=>{
          setText(e.target.value)
        }} />
        <button onClick={()=>handleClick()}>Comment</button>
      </div>
      <p className="font-extrabold ">Live Chat</p>
      {chatMassage.map((c,i) => (
        <LiveChatMassage key={i} name={c.name} massage={c.massage} />
      ))}
      
    </div>
  );
};

export default LiveChat;
