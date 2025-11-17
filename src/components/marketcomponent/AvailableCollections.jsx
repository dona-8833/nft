import React from "react";
import collectionsData from "../NFTMOCK.json";
import { useNavigate } from "react-router-dom";

function AvailableCollections() {
  const navigate = useNavigate();
  return (
    <div className="w-full pt-10">
      <h2 className="text-xl font-bold mb-4 text-white">
        Available Collection
      </h2>

      <div className="overflow-x-auto w-full">
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
              {collectionsData.map(
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
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {" "}
          {collectionsData.map(
            ({ name, creator, floorValue, volume, image }, i) => (
              <div
                key={i}
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
                <div className="flex justify-between w-full px-1.5 items-center text-white text-sm mt-2">
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
      </div>
    </div>
  );
}

export default AvailableCollections;
