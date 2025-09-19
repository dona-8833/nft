export default function Layout({ children }) {
  return (
    <div className="min-h-screen overflow-hidden "data-theme="NFT" >
      {/* Container with max width 1512px */}
      <main className="       overflow-y-auto">
        <div className="max-w-7xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
