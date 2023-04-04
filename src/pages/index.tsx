import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [runningCount, setRunningCount] = useState(0);
  const [cards, setCards] = useState(52);
  const [deck, setDeck] = useState(1);
  return (
    <div className="h-screen bg-pink-200">
      <div className="flex items-center justify-center w-screen bg-white rounded-lg shadow-lg">
        <div className="p-8 py-5">
          <Image
            src="/alas.jpg"
            alt="Your Image"
            width={600}
            height={600}
            className="rounded-lg"
          />
        </div>
        <div className="p-8 flex flex-col">
          <div className="flex">
            <h1 className="text-3xl font-bold mb-4">Chai</h1>
            <form className="pl-10 py-3">
              <div className="flex items-center border-b border-pink-500 py-2">
                <input
                  onChange={(e) => setDeck(parseInt(e.target.value))}
                  className="appearance-none bg-transparent border-none text-gray-700 focus:outline-none"
                  type="number"
                  placeholder="Number of Decks"
                  aria-label="Full name"
                />
                <button
                  onClick={() => setCards(deck * 52)}
                  className="flex-shrink-0 bg-pink-500 hover:bg-pink-700 border-pink-500 hover:border-pink-700 text-sm border-4 text-white py-1 px-2 rounded"
                  type="button"
                >
                  Update Cards Left
                </button>
              </div>
            </form>
          </div>
          <div className="flex flex-wrap justify-center">
            <button
              onClick={() => {
                setRunningCount(runningCount - 1);
                setCards(cards - 1);
              }}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-10 rounded-full mr-4 mb-4"
            >
              2-6
            </button>
            <button
              onClick={() => {
                setCards(cards - 1);
              }}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-10 rounded-full mr-4 mb-4"
            >
              7-9
            </button>
            <button
              onClick={() => {
                setRunningCount(runningCount + 1);
                setCards(cards - 1);
              }}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-10 rounded-full mr-4 mb-4"
            >
              10+
            </button>
          </div>
          <div className="flex">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-10 rounded-full mr-4 mb-4">
              Running Count: {runningCount}
            </button>
            <button className="bg-pink-500 hover:bg-blue-600 text-white font-bold py-3 px-10 rounded-full mr-4 mb-4">
              Number of Cards Left: {cards}
            </button>
          </div>
          <div>
            <button className="bg-red-600 hover:bg-blue-600 text-white font-bold py-3 px-10 rounded-full mr-4 mb-4 w-full mt-8">
              True Count: {runningCount / (cards / 52)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
