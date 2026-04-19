"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const COOKIE_KEY = "nm_liked";

function hasLiked() {
  return document.cookie.includes(COOKIE_KEY);
}

function setLikedCookie() {
  document.cookie = `${COOKIE_KEY}=true; max-age=${60 * 60 * 24 * 365}; path=/`;
}

export default function LikeButton() {
  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(hasLiked());
    supabase
      .from("likes")
      .select("count")
      .eq("id", 1)
      .single()
      .then(({ data }) => {
        if (data) setCount(data.count);
      });
  }, []);

  async function handleLike() {
    if (liked) return;
    const newCount = count + 1;
    setCount(newCount);
    setLiked(true);
    setLikedCookie();
    await supabase
      .from("likes")
      .update({ count: newCount })
      .eq("id", 1);
  }

  return (
    <button
      onClick={handleLike}
      disabled={liked}
      className={`flex flex-col items-center gap-1 transition-all duration-200 ${
        liked ? "opacity-50 cursor-default" : "hover:scale-110"
      }`}
    >
      <span className="text-3xl">{liked ? "❤️" : "🤍"}</span>
      <span className="text-xs tracking-widest uppercase text-[#a08c6e]">
        {count} {count === 1 ? "coração" : "corações"}
      </span>
    </button>
  );
}