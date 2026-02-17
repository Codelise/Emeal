import RecipeHeader from "../components/Header";
import RecipeSearch from "../components/Search";
import SearchFilter from "../components/SearchFilter";
import GridRecipe from "../components/GridRecipe";
import RecipeFooter from "../components/Footer";

export default function Home() {
  return (
    <>
      {/* HEADER */}
      <RecipeHeader />
      <main>
        {/* <!-- Hero Search Section --> */}
        <section className="relative px-4 pt-16 pb-12 overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl text-slate-900 ">
              What are we <span className="text-primary">cooking</span> today?
            </h1>
            <p className="mb-10 text-lg text-slate-600 ">
              Discover over 10,000+ hand-picked recipes from around the world.
            </p>
            {/* SEARCH RECIPE BAR */}
            <RecipeSearch />
            {/* FILTER BTNS */}
            <SearchFilter />
          </div>
          {/* <!-- Background Decoration --> */}
          <div className="absolute w-64 h-64 rounded-full -top-24 -left-24 bg-primary/5 blur-3xl"></div>
          <div className="absolute rounded-full top-1/2 -right-24 w-96 h-96 bg-primary/10 blur-3xl"></div>
        </section>
        {/* GRID RECIPE */}
        <GridRecipe />
      </main>
      {/* FOOTER */}
      <RecipeFooter />
    </>
  );
}
