import Index from "@/components/Index/page"
export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-2 mt-5 text-center text-teal-500 font-serif">
        Global Tech Performance Dashboard
      </h1> 
      <h3 className="text-lg font-semibold text-center text-gray-800 mb-10">Unlock Company Insights, Track Performance, and Make Data-Driven Decisions</h3>
      <Index />
    </div>
  );
}
