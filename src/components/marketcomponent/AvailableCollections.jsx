import React from 'react'
import collectionsData from "../NFTMOCK.json";


function AvailableCollections() {
  return (
      <div className="w-full pt-10">
        <h2 className="text-xl font-bold mb-4 text-white">
          Available Collection
        </h2>

        <div className="overflow-x-auto w-full">
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
                    className="border-b border-gray-800 hover:bg-gray-900"
                  >
                    {/* Sticky Collection Column */}
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
      </div>  )
}

export default AvailableCollections