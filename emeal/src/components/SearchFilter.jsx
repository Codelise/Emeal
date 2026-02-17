export default function SearchFilter() {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-3 mt-6">
        <span className="px-4 py-1.5 rounded-full bg-white border border-primary/10 text-xs font-medium text-slate-600  cursor-pointer hover:bg-primary/10 transition-colors">
          Breakfast
        </span>
        <span className="px-4 py-1.5 rounded-full bg-white border border-primary/10 text-xs font-medium text-slate-600  cursor-pointer hover:bg-primary/10 transition-colors">
          Vegan
        </span>
        <span className="px-4 py-1.5 rounded-full bg-white border border-primary/10 text-xs font-medium text-slate-600  cursor-pointer hover:bg-primary/10 transition-colors">
          Quick &amp; Easy
        </span>
        <span className="px-4 py-1.5 rounded-full bg-white border border-primary/10 text-xs font-medium text-slate-600  cursor-pointer hover:bg-primary/10 transition-colors">
          Desserts
        </span>
      </div>
    </>
  );
}
