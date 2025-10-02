import React from "react";

function Overview() {
  return (
    <div className="w-full">
      <div>
        <p className="text-2xl md:text-4xl font-medium">
          Overview of the impact So Far
        </p>
      </div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 w-full">
  {/* Card 1 */}
  <div className="border border-secondary/40 rounded-4xl bg-info/50 w-full h-48 md:h-60 p-4 flex flex-col gap-2 items-center justify-center">
    <div className="bg-gradient-to-b from-primary to-secondary rounded-full p-2">
    <img src="/img1.png" className="w-10 h-10" alt="" />
    </div>
    <h4 className="text-2xl font-bold">12+</h4>
    <p className="text-sm text-gray-300/60 text-center">
      Exclusive NFT collections live on <br /> Mintellect.
    </p>
  </div>

  {/* Card 2 */}
  <div className="border border-secondary/40 rounded-4xl w-full bg-info/50 h-48 md:h-60 p-4 flex flex-col gap-2 items-center justify-center">
    <div className="bg-gradient-to-b from-primary to-secondary rounded-full p-2">
          <img src="/img2.png" className="w-10 h-10" alt="" />

    </div>
    <h4 className="text-2xl font-bold">1.5k</h4>
    <p className="text-sm text-gray-300/60 text-center">
      Users learning & minting with <br /> every transaction.
    </p>
  </div>

  {/* Card 3 */}
  <div className="border border-secondary/40 rounded-4xl w-full bg-info/50 h-48 md:h-60 p-4 flex flex-col gap- items-center justify-center">
    <div className="bg-gradient-to-b from-primary to-secondary rounded-full p-3">
    <img src="/img3.png" className="w-8 h-8" alt="" />
    </div>
    <h4 className="text-2xl font-bold text-center">450k+ EDU</h4>
    <p className="text-sm text-center text-gray-300/60 ">
      Traded securely on the <br /> EduChain marketplace.
    </p>
  </div>

  {/* Card 4 */}
  <div className="border border-secondary/40 rounded-4xl w-full bg-info/50 h-48 md:h-60 p-4 flex flex-col gap-2 items-center justify-center">
    <div className="bg-gradient-to-b from-primary to-secondary rounded-full p-3">
    <img src="/img4.png" className="w-8 h-8" alt="" />
    </div>
    <h4 className="text-2xl font-bold">500</h4>
    <p className="text-sm text-gray-300/60 text-center">
      NFTs minted after completing <br /> interactive quizzes.
    </p>
  </div>
</div>

    </div>
  );
}

export default Overview;
