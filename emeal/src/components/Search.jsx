export default function RecipeSearch() {
  return (
    <>
      <div className="relative group">
        <div className="absolute inset-0 transition-opacity rounded-full opacity-0 bg-primary/20 blur-xl group-focus-within:opacity-100"></div>
        <div className="relative flex items-center p-2 bg-white border shadow-xl rounded-2xl shadow-primary/5 border-primary/10">
          <span className="ml-4 material-icons-round text-slate-400">
            search
          </span>
          <input
            className="w-full px-4 py-3 bg-transparent border-none focus:ring-0 text-slate-700 placeholder-slate-400"
            placeholder="Search for ingredients, cuisines, or dishes..."
            type="text"
          />
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-semibold transition-all transform hover:scale-[1.02] active:scale-95">
            Search
          </button>
        </div>
      </div>
    </>
  );
}
