function App() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-8 lg:flex-row">
      <ProfileCard />
      <section className="min-h-[200vh] min-w-0 flex-1 bg-blue-200" />
    </main>
  );
}

function ProfileCard() {
  return (
    <aside className="h-128 flex w-full flex-col self-start bg-green-200 lg:sticky lg:top-8 lg:w-1/3">
      <p>Profile card</p>
    </aside>
  );
}

export default App;
