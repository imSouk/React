import { useSearchParams } from "react-router-dom"

function TaskPage(){
    const [searchParans] = useSearchParams();
    const title = searchParans.get("title")
    const description = searchParans.get ("description")
    return (
    <div className="w-screen h-screen bg-slate-500">
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
        
    );
        
}
export default TaskPage
