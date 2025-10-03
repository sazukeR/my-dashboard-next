import { SimpleWidget } from "@/components";

export default function MainPage() {
 return (
  <div className="text-black p-2">
   <h1 className="text-3xl mt-2">Dashboard</h1>
   <span className="text-xl">Informacion general</span>

   <div className="flex flex-wrap p-2 justify-center items-center">
    <SimpleWidget />
    <SimpleWidget />
    <SimpleWidget />
    <SimpleWidget />
    <SimpleWidget />
   </div>
  </div>
 );
}
