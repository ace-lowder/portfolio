import ResponsiveOverlay from "./ResponsiveOverlay";

function App() {
  return (
    <>
      {import.meta.env.DEV && <ResponsiveOverlay />}
      <main className="mx-auto flex w-full max-w-150 flex-col gap-8 px-8 py-8 min-[785px]:w-3xl min-[785px]:max-w-none min-[1209px]:w-298 min-[1209px]:flex-row">
        <ProfileCard />
        <section className="grid min-w-0 flex-1 grid-cols-1 gap-8 min-[785px]:grid-cols-2">
          {Array.from({ length: 8 }, (_, index) => (
            <div key={index + 1} className="aspect-19/16 bg-green-200" />
          ))}
        </section>
      </main>
    </>
  );
}

function ProfileCard() {
  return (
    <aside className="grid h-130 w-full grid-cols-1 grid-rows-2 gap-0 self-start min-[785px]:grid-cols-2 min-[785px]:grid-rows-1 min-[1209px]:sticky min-[1209px]:top-8 min-[1209px]:w-82 min-[1209px]:shrink-0 min-[1209px]:grid-cols-1 min-[1209px]:grid-rows-2">
      <div className="bg-red-200" />
      <div className="bg-blue-200" />
    </aside>
  );
}

export default App;
