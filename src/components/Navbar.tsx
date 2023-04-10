import { useState } from "react";
import { Dashboard } from "./Dashboard";
import { SolveAPuzzle } from "./SolveAPuzzle";
import { UploadPhoto } from "./UploadPhoto";
import { GetPuzzle } from "./GetPuzzle";
export function NavBar() {

  interface viewChoice {
    dashboard: boolean,
    uploadPhoto: boolean,
    solveAPuzzle: boolean,
    GetPuzzle: boolean
  }

  const initialViewChoice: viewChoice = {
    dashboard: false,
    uploadPhoto: false,
    solveAPuzzle: false,
    GetPuzzle: false,
  };

  const [viewChoice, setViewChoice] = useState(initialViewChoice);
  
  const changeView = (chosenView: string) => {
    const newViewChoice = Object.assign({}, initialViewChoice)
    newViewChoice[chosenView as keyof viewChoice] = true; 
    setViewChoice(newViewChoice);
    return;     
  }
  
  return (
    <div className="relative min-h-screen md:flex">
      {/* navbar */}
      <div className="bg-blue-800 text-stone-200 font-bold flex justify-between items-center md:hidden">
        <a href="" className="block p-4">
          Super Sudoku
        </a>
        <button
          className="p-4"
          onClick={() => {
            const sidebar = document.querySelector(".side-bar-menu");
            sidebar?.classList.toggle("-translate-x-full");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div className="side-bar-menu bg-blue-800 text-stone-200 w-64 p-4 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
        <h1 className="text-3xl py-2 px-4 text-white">Super Sudoku</h1>
        <nav>
          <button className="block py-2 px-4 transition duration-100 hover:bg-blue-500 hover:text-white rounded" onClick= {() => changeView('dashboard')}>
            dashboard
          </button>
          <button className="block py-2 px-4 transition duration-100 hover:bg-blue-500 hover:text-white rounded" onClick = {() => changeView('uploadPhoto')}>
            upload photo
          </button>
          <button className="block py-2 px-4 transition duration-100 hover:bg-blue-500 hover:text-white rounded" onClick = {() => changeView('solveAPuzzle')}> 
            solve a puzzle
          </button>
          <button className="block py-2 px-4 transition duration-100 hover:bg-blue-500 hover:text-white rounded" onClick = {()=> changeView('GetPuzzle')}>
            Generate a Puzzle
          </button>
        </nav>
      </div>
      {/* content */}
      <div className="p-0 flex-1 flex justify-center items-center bg-slate-50 md:p-10">
        <div className="flex flex-col items-center h-full w-full bg-white shadow-xl rounded-3xl ">
          {viewChoice.dashboard? <Dashboard/> : null}
          {viewChoice.uploadPhoto? <UploadPhoto/> : null}
          {viewChoice.solveAPuzzle? <SolveAPuzzle/>: null}
          {viewChoice.GetPuzzle? <GetPuzzle/> : null}
        </div>
      </div>
    </div>
  );
}
