import { useEffect, useState } from "react";
import "./App.css";
import { Droplet, Cloud, Wind, Search } from "react-feather";
import { Weather } from "./types";
import { listImages } from "./utils/import";

export default function App() {
  const [city, setCity] = useState<string>("jakarta");
  const [data, setData] = useState<Weather | null>(null);
  const weatherIcon = data?.weather[0].icon;
  const images = listImages.filter((image) => image.id === weatherIcon);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5f353e479b6b09f6b73335b2c49fc1e7&units=metric`
        );
        const result = await data.json();
        setData(result);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [city]);
  return (
    <div className="container min-h-screen mx-auto flex justify-center items-center">
      <div className="w-[400px] pt-8 pb-16 bg-day rounded-xl ">
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
          <h1 className="text-3xl font-medium tracking-wider">
            {data?.name.toUpperCase()}
          </h1>
          <img
            src={images[0].image}
            alt="Weather Icon"
            className="h-[150px] w-[150px] mx-auto mt-6"
          />
          <h2 className="text-4xl font-semibold tracking-widest mt-6">
            {data?.main.temp ? Math.round(data?.main.temp) : 0}&deg;C
          </h2>
          <h3 className="font-light text-sm tracking-wider">
            {data?.weather[0].main}
          </h3>
        </div>
        <div className="bg-white/25 mt-8 mx-8 h-10 px-4 rounded-full flex items-center justify-evenly">
          <div className="flex justify-center items-center gap-1">
            <Cloud color="white" size={16} strokeWidth={3} />
            <span className="font-medium text-white">{data?.clouds.all}%</span>
          </div>
          <div className="flex justify-center items-center gap-1">
            <Droplet color="white" size={16} strokeWidth={3} />
            <span className="font-medium text-white">
              {data?.main.humidity}%
            </span>
          </div>
          <div className="flex justify-center items-center gap-1">
            <Wind color="white" size={16} strokeWidth={3} />
            <span className="font-medium text-white">
              {data?.wind.speed}m/s
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
