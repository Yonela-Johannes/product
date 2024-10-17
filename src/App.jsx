import { useState } from "react";
import DATA from "./data.json";
import { FaRegStar } from "react-icons/fa6";
import { IoCloseCircle } from "react-icons/io5";

export default function App() {
  const [activeModal, setActiveModal] = useState(false)
  const [details, setDetails] = useState({})

  const detailsHandler = (element) => {
    setActiveModal(true)
    setDetails(element)
  }

  return (
    <div className="w-[80%] m-auto py-48 ">
      <h1 className="text-3xl font-bold text-center pb-5">Featured Products</h1>
      <span className="flex w-20 h-[2px] bg-blue-800  mb-16 mx-auto"></span>
      <div className="grid grid-cols-5 gap-8">
        {DATA?.items.map((element) => (
          <div onClick={() => detailsHandler(element)} key={element.user} className="relative cursor-pointer hover:shadow-lg p-2 duration-300">
            <div>
              <img
                src={element.imageUrl}
                className="object-cover object-center"
                alt={element.name}
              />
            </div>
            <h1 className=" font-semibold">{element.name}</h1>
            <p className="text-gray-500">{element?.category}</p>
            <div className="flex gap-2">
              {element?.prevPrice ? <p className="font-semibold text-gray-500">${element?.prevPrice}</p> : ""} <p className="font-semibold">${element.price}</p>
            </div>
            <div className="">
              <div className="flex gap-2 py-2">
                {element.colors?.map((color, i) => (
                  <div key={i}>
                    <span className={`flex rounded-full w-3 h-3 ${color}`}></span>
                  </div>
                ))}
              </div>
              <div className="flex gap-1">
                
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
              </div>
            </div>
            {element.sale ? <p className="bg-white rounded-xl p-[1px] shadow-lg border border-black w-min px-2 text-xs font-bold absolute top-5 left-5">Sale</p> : "" }
          </div>
        ))}
      </div>
      
      {/* This is the modal */}
      {activeModal ? (
        <div className="z-50 absolute top-7 bottom-7 left-7 right-7 rounded-lg backdrop-blur-lg h-screen w-screen">
          <button onClick={() => (setDetails(""), setActiveModal(false))}>
            <IoCloseCircle size={22} />
          </button>
          <div className="relative cursor-pointer hover:shadow-lg p-2 duration-300">
            <div>
              <img
                src={details.imageUrl}
                className="object-cover object-center"
                alt={details.name}
              />
            </div>
            <h1 className=" font-semibold">{details.name}</h1>
            <p className="text-gray-500">{details?.category}</p>
            <div className="flex gap-2">
              {details?.prevPrice ? <p className="font-semibold text-gray-500">${details?.prevPrice}</p> : ""} <p className="font-semibold">${details.price}</p>
            </div>
            <div className="">
              <div className="flex gap-2 py-2">
                {details.colors?.map((color, i) => (
                  <div key={i}>
                    <span className={`flex rounded-full w-3 h-3 ${color}`}></span>
                  </div>
                ))}
              </div>
              <div className="flex gap-1">
                
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
              </div>
            </div>
            {details.sale ? <p className="bg-white rounded-xl p-[1px] shadow-lg border border-black w-min px-2 text-xs font-bold absolute top-5 left-5">Sale</p> : "" }
          </div>
        </div>
      ) : ""}
    </div>
  );
}
