"use client";

import { useState } from "react";

export default function Practice() {
  const [count, setCount] = useState(0);
  const [shown, setShown] = useState(false);
  const [text, setText] = useState("");
  let para = null;
  if (shown) {
    para = <p>This is a simple paragraph that is shown based on the state.</p>;
  }

  return (
    <main className="max-w-xl mx-auto p-8  bg-gray-700 text-gray-100 min-h-screen">
      <ul>
        <li>Count: {count}</li>
      </ul>
      {para}
      {/* {shown && (
        <p>This is a simple paragraph that is shown based on the state.</p>
      )} */}

      <div>
        <button className="text-3xl" onClick={() => setCount(count + 1)}>
          +
        </button>
        <button
          className="text-3xl"
          onClick={() => {
            if (count > 0) setCount(count - 1);
          }}
        >
          -
        </button>
        <button className="text-3xl" onClick={() => setShown(!shown)}>
          {shown ? "Hide Paragraph" : "Show Paragraph"}
        </button>
      </div>
      <div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
          className="p-2 rounded text-white bg-gray-800 w-full"
        />
        <p>You typed: {text}</p>
        <p>Text length: {text.length}</p>
      </div>
    </main>
  );
}
