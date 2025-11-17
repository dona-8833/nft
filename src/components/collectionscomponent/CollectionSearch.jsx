import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import collectionsData from "../NFTMOCK.json";
import { useNavigate } from "react-router-dom";

function CollectionSearch() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  // filter logic: check name, creator, or even wallet string
  const filteredCollections = collectionsData.filter((col) =>
    [col.name, col.creator, col.wallets?.toString()].some((field) =>
      field?.toLowerCase().includes(query.toLowerCase())
    )
  );

  return (
    <div className="my-10 w-full flex flex-col items-center justify-center">
      {/* Search Bar */}
      <label className="relative overflow-hidden z-10 block w-full md:w-3xl rounded-2xl border border-primary">
        <input
          type="text"
          placeholder="Search for Collections..."
          className="w-full md:p-4 p-3 pr-14 text-white bg-transparent focus:ring-0 focus:outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="button"
          className="absolute  -right-3 rounded-full top-1/2 -translate-y-1/2 bg-[#068C5A] py-5 pr-5 pl-5"
        >
          <FaSearch className="text-2xl" />
        </button>
      </label>

      {/* Filter Tabs */}
      <div className="flex mt-6 divide-x divide-gray-200">
        <div className="flex flex-col items-center px-4">
          <p className="text-sm font-medium">All Collections</p>
          <div className="h-2 w-2 rounded-full bg-secondary mt-2"></div>
        </div>

        <div className="flex flex-col items-center px-4">
          <p className="text-sm text-gray-400 font-medium">
            Favorite Collections
          </p>
        </div>
      </div>

      {/* NFT Table */}
      <div className="w-full pt-10">
        <h2 className="text-xl font-bold mb-4 text-white">
          Available Collection
        </h2>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto w-full">
          <table className="border-collapse w-full text-white min-w-[600px]">
            <thead>
              <tr className="border-b border-gray-700 text-left text-gray-400">
                <th className="p-3 sticky left-0 bg-base-100 z-10">
                  Collection
                </th>
                <th className="p-3">Floor Value</th>
                <th className="p-3">% Change</th>
                <th className="p-3">Volume</th>
                <th className="p-3">Holders</th>
              </tr>
            </thead>
            <tbody>
              {filteredCollections.map(
                (
                  {
                    name,
                    creator,
                    floorValue,
                    percentChange,
                    volume,
                    sales,
                    holdersChange,
                    wallets,
                    image,
                  },
                  i
                ) => (
                  <tr
                    key={i}
                    onClick={() => navigate("/collectionDetails")}
                    className="border-b border-gray-800 hover:bg-gray-900"
                  >
                    <td className="flex items-center gap-3 p-6 px-0 md:p-12 sticky left-0 bg-base-100 z-10">
                      <img
                        src={image}
                        alt={name}
                        className="h-22 md:h-40 rounded-lg"
                      />
                      <div>
                        <p className="font-semibold">{name}</p>
                        <p className="text-sm text-gray-400">{creator}</p>
                      </div>
                    </td>
                    <td className="p-3">{floorValue}</td>
                    <td className="p-3 text-green-400">{percentChange}</td>
                    <td className="p-3">
                      <p>{volume}</p>
                      <p className="text-sm text-gray-400">{sales} sales</p>
                    </td>
                    <td className="p-3">
                      <p>{holdersChange}</p>
                      <p className="text-sm text-gray-400">{wallets} wallets</p>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {" "}
          {filteredCollections.map(
            ({ name, creator, floorValue, volume, image }, i) => (
              <div
                key={i}
                onClick={() => navigate("/collectionDetails")}
                className=" flex flex-col gap-3 items-center overflow-hidden rounded-xl bg-base-100/60 backdrop-blur-xl border border-primary/30 relative z-10"
              >
                {" "}
                {/* Collection Info */}{" "}
                <div className="flex flex-col items-center gap-2 w-full">
                  {" "}
                  <div className=" overflow-hidden  border border-white/20">
                    {" "}
                    <img
                      src={image}
                      alt={name}
                      className="object-cover h-full w-full"
                    />{" "}
                  </div>{" "}
                  <div className="text-white flex flex-col px-1.5 items-start w-full justify-end">
                    {" "}
                    <p className="font-medium text-lg">{name}</p>{" "}
                    <p className="text-[10px] opacity-70">{creator}</p>{" "}
                  </div>{" "}
                </div>{" "}
                {/* Floor + Volume Only */}{" "}
                <div className="flex justify-between w-full items-center px-1.5 text-white text-sm mt-2">
                  {" "}
                  <div className="flex flex-col">
                    {" "}
                    <p className="font-bold text-[12px] opacity-70">
                      Floor
                    </p>{" "}
                    <p className="font-semibold text-secondary">{floorValue}</p>{" "}
                  </div>{" "}
                  <div className="flex flex-col text-right">
                    {" "}
                    <p className="font-bold text-[12px] opacity-70">
                      Volume
                    </p>{" "}
                    <p className="font-semibold">{volume}</p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>
            )
          )}{" "}
        </div>

        {filteredCollections.length === 0 && (
          <p className="text-center text-gray-400 py-6">No collections found</p>
        )}
      </div>
    </div>
  );
}

export default CollectionSearch;
