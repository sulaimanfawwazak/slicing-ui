import { useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import Button from "./Button";

export default function Navbar() {
  const [offcanvas, setOffcanvas] = useState(false); //false --> ga muncul

  return (
    <>
      <div className="flex items-center py-[62px]">
        <div className="w-3/12">
          <Logo/>
        </div>
        <div className="w-6/12 hidden md:block">
          <Nav dir="horizontal" scheme="light"/>
        </div>
        <div className="w-3/12 text-right hidden md:block">
          <Button href="#contacts" variant="outline-yellow" pill>Kontak</Button>
        </div>
        <div className="w-9/12 md:hidden text-right">
          <img src="/menu.svg" className="inline-block" onClick={() => setOffcanvas(true)}/>
        </div>
      </div>

      <div className={`fixed bg-white z-10 top-0 h-full w-full p-10 md:hidden transition-all ${offcanvas ? "right-0" : "-right-full"}`}>
        <img src="x.svg" className="absolute top-8 right-8" onClick={() => setOffcanvas(false)}/>
        <Nav
          dir="vertical"
          scheme="dark"
        />
      </div>
    </>
  ); 
}



