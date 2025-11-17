import Container from "../ui/Container";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen overflow-hidden" data-theme="NFT">
      <main className="overflow-y-auto">
        <Container>{children}</Container>
      </main>
    </div>
  );
}
