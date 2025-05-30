import { useState, useEffect } from "react";

const TypingGame = ({game,setGame}) => {
  const [char, setChar] = useState("");
  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);

  const getRandomChar = () => {
    const chars = ["chocolate", "dog", "tree", "love", "hope", "egg", "giraffe", "tennis", "green", "gray",
"fear", "apple", "black", "football", "sunshine", "zebra", "hope", "chisel", "storm", "fear",
"milk", "monkey", "white", "cake", "robot", "cloud", "excited", "red", "calm", "wind",
"tape", "river", "ship", "keyboard", "fog", "hope", "screen", "rugby", "internet", "rain",
"chip", "database", "happy", "level", "cheese", "desert", "stone", "volleyball", "joy", "scooter",
"bus", "flower", "drill", "green", "hockey", "hope", "golf", "excited", "plane", "car",
"wrench", "beach", "mouse", "excited", "screen", "sun", "mountain", "subway", "tool", "joy",
"excited", "black", "stone", "white", "valley", "joy", "egg", "monkey", "love", "swimming",
"network", "stone", "calm", "storm", "keyboard", "basketball", "screen", "knife", "sunshine", "love",
"bread", "green", "level", "ocean", "ship", "cheese", "valley", "chisel", "milk", "golf",
"ocean", "screen", "pizza", "storm", "love", "hope", "fear", "chip", "cheese", "cricket","stone", "blue", "rain", "apple", "happy", "robot", "basketball", "joy", "chip", "mountain",
"fog", "drill", "cat", "mouse", "calm", "love", "wind", "milk", "cricket", "tape",
"valley", "yellow", "fear", "rugby", "ship", "ocean", "love", "hope", "dog", "storm",
"green", "plane", "banana", "swimming", "drill", "mouse", "joy", "desert", "egg", "sun",
"hope", "screen", "joy", "keyboard", "robot", "yellow", "rain", "tool", "happy", "valley",
"fog", "snow", "wind", "scooter", "car", "rain", "pizza", "basketball", "forest", "fog",
"boat", "hope", "storm", "cheese", "golf", "zebra", "hope", "car", "river", "bread",
"internet", "love", "database", "rugby", "tree", "football", "love", "drill", "tool", "drill",
"fog", "mouse", "hope", "stone", "calm", "wind", "saw", "rain", "robot", "forest",
"blue", "milk", "valley", "boat", "keyboard", "joy", "joy", "car", "snow", "storm"]
    return chars[Math.floor(Math.random() * chars.length)];
  };

  useEffect(() => {
    setChar(getRandomChar());
  }, [score]);

  

  const handleChange = (e) => {
    const val = e.target.value.toLowerCase();
    setInput(val);
    if (val === char) {
      setScore(score + 1);
      setInput("");
    }
  };

  return (
    <div className="text-center relative w-[80%] rounded-2xl pt-5 bg-white">
        <button onClick={() => setGame(!game)} className="absolute top-0 left-0 rounded-t-2xl bg-blue-700 text-white p-1 pl-5 pr-5 cursor-pointer">Back</button>
      <h2 className="text-xl mt-3 bg-red-300 p-1 mb-2">⌨️ Type the Word</h2>
      <div className="text-5xl animate-pulse mt-5 font-bold text-indigo-600 mb-4 uppercase">{char}</div>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        className="text-center text-xl px-3 py-1 border border-gray-400 rounded"
      />
      <p className="mt-4 mb-5">Score: {score}</p>
    </div>
  );
};
export default TypingGame;