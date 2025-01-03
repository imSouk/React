import { ChevronLeftIcon } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useNavigate, } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
    const navigate = useNavigate();
  const [searchParans] = useSearchParams();
  const title = searchParans.get("title");
  const description = searchParans.get("description");
  return (
    <div className="w-screen h-screen bg-slate-500">
      <div className="w-[500] space-y-4">
        <div className="flex justify-center relative mb-6">
            <button onClick={()=> navigate(-1)} className="text-slate-100 absolute left-0 top-0 bottom-0">
                <ChevronLeftIcon />
            </button>
            <Title>Detalhes da Tarefa</Title>
        </div>
      </div>
      <div className="bg-slate-200 p-4 rounded-md">
        <h2 className=" text-slate-600 text-xl font-bold">{title}</h2>
        <p className="text-slate-600">{description}</p>
      </div>
    </div>
  );
}
export default TaskPage;
