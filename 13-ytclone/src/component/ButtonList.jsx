import Button from "./Button"
const list =["All","Live","gaming","Songs","Live","Soccer","Cricket","Valentine" ,"React routers" ,"Podcast" ,"SoftWare Engineering" ,"Music" ,"News" ,"Satire" ,"Music"]

export const ButtonList = () => {
  return (
    <div className="flex ">
        {list.map((items,i)=>{
            return <Button key={i} name={items}/>
        })}
    </div>
  )
}