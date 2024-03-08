import Header from "./components/header/header";
function App() {
  return (
    <div className="w-full h-screen p-10">
      <div className="h-full flex flex-col">
        <Header />
        <main className="flex flex-col gap-8 items-center m-auto pb-28">
          <h1 className="flex flex-col gap-8 text-primary uppercase text-9xl text-center ">
            Lets open
            <br /> new horizon's together
            <span className="text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
          </h1>
          <button className="px-20 py-5 text-inverted rounded-xl bg-secondary">
            Get Started
          </button>
        </main>
      </div>
    </div>
  );
}

export default App;
