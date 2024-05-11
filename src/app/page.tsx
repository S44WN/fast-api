"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [input, setInput] = useState<string>(""); // input value
  const [searchResults, setSearchResults] = useState<{
    results: string[];
    duration: number;
  }>(); // search results

  // useEffect hook to run when input changes
  useEffect(() => {
    const fetchData = async () => {
      if (!input) {
        return setSearchResults(undefined);
      }

      const response = await fetch(`/api/search?query=${input}`);
    };

    fetchData();
  }, [input]);

  return (
    <div>
      {/* input has value which triggers handler function on onChange */}
      <input
        type="text"
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
      ></input>
    </div>
  );
}
