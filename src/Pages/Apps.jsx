import React, { useEffect, useState } from "react";
import useApps from "../hooks/useApps";
import AppCard from "../components/AppCard";
import ErrorApp from "../error/ErrorApp";
import Loader from "../components/Loader";

const Apps = () => {
  const { apps, loading } = useApps();
  const [search, setSearch] = useState("");
  const [searchLoading, setSearchLoading] = useState(false)

  const term = search.trim().toLocaleLowerCase();
  const searchApps = term
    ? apps.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : apps;

  useEffect(()=>{
    if(term) {
      setSearchLoading(true)
      const timer = setTimeout(()=>{
        setSearchLoading(false)
      },200)
      return ()=> clearTimeout (timer)
    }else{
      setSearchLoading(false)
    }
  },[term])

    if (loading) {
  return <Loader />;
}

  

  return (
    <div className="w-11/12 mx-auto mb-10">
      <div className="text-center my-8 space-y-2">
        <h1 className="text-3xl font-bold">Our All Applications</h1>
        <p className="text-gray-500 text-sm">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex items-center justify-between">
        <h1 className="font-semibold">({searchApps.length}) Apps Found</h1>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            required
            placeholder="Search Apps"
          />
        </label>
      </div>


      {searchLoading ? (
        <div className="flex justify-center mt-8 opacity-80">
          <Loader />
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-5">
          {searchApps.length === 0 ? (
            <h1 className="text-center col-span-full text-lg font-semibold text-gray-500">
              🚫 No App Found
              <ErrorApp />
            </h1>
          ) : (
            searchApps.map((app) => <AppCard key={app.id} app={app} />)
          )}
        </div>
      )}
    </div>
  );
};

export default Apps;
