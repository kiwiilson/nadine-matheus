"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Comment = {
  id: string;
  name: string;
  message: string;
  created_at: string;
};

export default function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  async function fetchComments() {
    const { data } = await supabase
      .from("comments")
      .select("*")
      .order("created_at", { ascending: false });
    if (data) setComments(data);
  }

  useEffect(() => {
    fetchComments();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setSending(true);
    await supabase.from("comments").insert({ name: name.trim(), message: message.trim() });
    setName("");
    setMessage("");
    setSending(false);
    fetchComments();
  }

  return (
    <div className="w-full max-w-lg mx-auto">
      <p className="text-xs lg:text-sm tracking-[0.3em] uppercase text-[#a08c6e] mb-6 text-center">
        Deixe uma mensagem
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-8">
        <input
          type="text"
          placeholder="Seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-[#e5e0d8] bg-transparent px-4 py-2 text-sm lg:text-base outline-none focus:border-[#a08c6e] transition-colors"
        />
        <textarea
          placeholder="Sua mensagem para os noivos..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          className="border border-[#e5e0d8] bg-transparent px-4 py-2 text-sm lg:text-base outline-none focus:border-[#a08c6e] transition-colors"
        />
        <button
          type="submit"
          disabled={sending}
          className="border border-[#a08c6e] text-[#a08c6e] text-sm tracking-widest uppercase py-2 hover:bg-[#a08c6e] hover:text-white transition-all duration-200 disabled:opacity-50"
        >
          {sending ? "Enviando..." : "Enviar"}
        </button>
      </form>

      <div className="flex flex-col gap-4">
        {comments.map((c) => (
          <div key={c.id} className="border-l-2 border-[#e5e0d8] pl-4">
            <p className="text-sm lg:text-base font-semibold text-[#2c2c2c]">{c.name}</p>
            <p className="text-sm lg:text-base text-gray-500 mt-1">{c.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}