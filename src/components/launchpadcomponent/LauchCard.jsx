import React from "react";
import NftData from "../Launch.json"; // JSON file you created

function LaunchCard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-white">
          Live and Incoming Collections
        </h1>
      </div>

      {/* Map over the JSON data */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {NftData.map((nft, index) => (
          <div
            key={index}
            className="transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_#20f7a7]/40 flex flex-col gap-3 items-center p-3 md:p-4 rounded-xl bg-base-100/60 backdrop-blur-xl border border-primary/30 relative z-10"
          >
            {/* Creator Info */}
            <div className="flex items-center gap-2 w-full">
              <div className="rounded-full overflow-hidden h-10 w-10 border border-white/20">
                <img
                  src={nft.creatorImage}
                  alt={nft.creatorName}
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="text-white">
                <p className="font-medium text-[12px]">{nft.creatorName}</p>
                <p className="font-extralight text-[10px] opacity-70">
                  {nft.creatorRole}
                </p>
              </div>
            </div>

            {/* NFT Preview */}
            <div className="w-full relative rounded-xl overflow-hidden border border-white/10">
              <img
                src={nft.nftImage}
                alt={nft.collectionName}
                className="object-cover w-full h-full"
              />
            </div>

            {/* NFT Details */}
            <div className="flex justify-between gap-6 w-full items-center">
              <div className="text-white flex flex-col w-full">
                <p className="font-medium text-[12px] truncate">
                  {nft.collectionName}
                </p>
                <div className="flex justify-between text-[10px] opacity-70 mt-2">
                  <span>
                    <p className="text-md font-bold">Price</p>
                    <p className="font-semibold text-secondary">{nft.price}</p>
                  </span>
                  <span>
                    <p className="text-md font-bold">Amounts</p>
                    <p>{nft.amounts}</p>
                  </span>
                  <span>
                    <p className="text-md font-bold">Minted</p>
                    <p>{nft.minted}</p>
                  </span>
                </div>
              </div>
              <button className="btn btn-xs md:btn-sm bg-transparent border border-secondary hover:shadow-[0_0_10px_#20f7a7] transition-all duration-300">
                <img
                  src={nft.statusIcon}
                  className="w-4 h-4 mr-1"
                  alt={nft.status}
                />
                {nft.status}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LaunchCard;
