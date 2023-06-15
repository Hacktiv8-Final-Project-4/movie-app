import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import slicedParams from "../../utils/slicedParams";
import Cards from "../../components/Cards";
import Layout from "../../components/Layout";

export default function Search() {
  const { searchParams } = useParams();
  const title = slicedParams(searchParams, 7, searchParams.length);
  
  const search = useSelector((state) => state.search);

  return (
    <Layout>
      <main className="w-full my-12 px-5 xl:max-w-6xl xl:mx-auto xl:px-0">
        <h2 className="mb-5 text-xl capitalize font-medium">{title}</h2>
        <Cards
          className="grid grid-cols justify-center sm:grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5" 
          movies={search?.searchResults} 
        />
        {search.errorMessages && 
          <p className="text-slate-500">
            {search.errorMessages}
          </p>
        }
      </main>
    </Layout>
  );
}