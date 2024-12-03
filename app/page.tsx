import NavBar from "./components/navbars/NavBar";


export default function Home() {

  return (
    <div className="w-screen h-screen flex items-center bg-center bg-cover bg-home-mobile xl:bg-home-desktop">
        <NavBar />
    </div>
  );
}
