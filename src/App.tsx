import "./App.css";
import d1 from "./assets/01d.png";
import { Droplet, Cloud, Wind, Search } from "react-feather";

export default function App() {
  return (
    <div className="container min-h-screen mx-auto flex justify-center items-center">
      <div className="w-[400px] pt-8 pb-16  bg-night rounded-xl ">
        <div className="bg-white/25 mx-4 h-12 rounded-lg relative flex items-center gap-2 ">
          <button type="button" className="absolute left-2">
            <Search color="white" />
          </button>
          <input
            type="text"
            className="w-full h-full bg-transparent rounded-lg font-medium text-white focus:outline-none focus:bg-white/30 pl-10 pr-2"
          />
        </div>
        <div className="mt-8 text-white text-center">
          <h1 className="text-xl font-medium tracking-wider">JAKARTA</h1>
          <p>Thursday, January 25 2024</p>
          <img
            src={d1}
            alt="Weather Icon"
            className="h-[150px] w-[150px] mx-auto mt-6"
          />
          <h2 className="text-4xl font-semibold tracking-widest mt-6">
            18&deg;C
          </h2>
          <h3 className="font-light text-sm tracking-wider">Cloudy</h3>
        </div>
        <div className="bg-white/25 mt-8 mx-8 h-10 px-4 rounded-full flex items-center justify-evenly">
          <div className="flex justify-center items-center gap-1">
            <Cloud color="white" size={16} strokeWidth={3} />
            <span className="font-medium text-white">66%</span>
          </div>
          <div className="flex justify-center items-center gap-1">
            <Droplet color="white" size={16} strokeWidth={3} />
            <span className="font-medium text-white">54%</span>
          </div>
          <div className="flex justify-center items-center gap-1">
            <Wind color="white" size={16} strokeWidth={3} />
            <span className="font-medium text-white">19%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
