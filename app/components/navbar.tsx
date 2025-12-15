import { PiGreaterThanBold } from "react-icons/pi";
export default function Navbar() {
  return (
    <div className="border-b border-muted">
      <nav className=" flex justify-between ml-5 mr-5 m-3 lg:ml-30 lg:mr-30 m-4">
        <div className="flex gap-2 items-center">
          <PiGreaterThanBold className="text-primary font-black" size={10} />
          <p className="text-primary text-lg font-black ">soma.dev</p>
        </div>
        <div>
          <ul className="flex gap-5">
            <li className="">
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
