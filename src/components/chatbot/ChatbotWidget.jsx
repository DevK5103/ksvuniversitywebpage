import React, { useEffect, useMemo, useRef, useState } from "react";
import { Bot, MessageCircle, SendHorizontal, X } from "lucide-react";
import { defaultPromptSuggestions } from "../../data/chatKnowledge";
import { getChatbotResponse } from "../../utils/chatbotEngine";

const SOURCE_LABELS = {
  "/": "Home",
  "/about": "About",
  "/academics": "Academics",
  "/campuses": "Campuses",
  "/cells-centers": "Cells & Centers",
  "/research": "Research",
  "/examination": "Examination",
  "/sustainability": "Sustainability",
  "/journals": "Journals",
  "/campus-tour": "Campus Tour",
  "/news-events": "News & Events",
  "/contact": "Contact",
  "/recruitment": "Recruitment",
};

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const messagesEndRef = useRef(null);
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      role: "assistant",
      text: "Hello, I am the KSV assistant. Ask me anything about admissions, programs, exams, contact details, campuses, or news from this website.",
      sources: [],
    },
  ]);

  const canSend = input.trim().length > 0;

  const quickPrompts = useMemo(() => defaultPromptSuggestions.slice(0, 3), []);

  const askQuestion = (question) => {
    const cleaned = question.trim();
    if (!cleaned) return;

    const userMessage = {
      id: `${Date.now()}-user`,
      role: "user",
      text: cleaned,
      sources: [],
    };

    const response = getChatbotResponse(cleaned);

    const botMessage = {
      id: `${Date.now()}-assistant`,
      role: "assistant",
      text: response.answer,
      confidence: response.confidence,
      sources: response.sources,
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  };

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [messages, isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] sm:right-6 sm:bottom-6 z-[120] w-14 h-14 rounded-full bg-ksv-primary text-ksv-white shadow-lg hover:bg-ksv-dark transition-colors flex items-center justify-center"
        aria-label={isOpen ? "Close chatbot" : "Open chatbot"}
      >
        {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      {isOpen && (
        <>
          <button
            type="button"
            aria-label="Close chatbot panel"
            onClick={() => setIsOpen(false)}
            className="sm:hidden fixed inset-0 z-[118] bg-black/30"
          />

          <section
            className="fixed left-3 right-3 z-[120] rounded-radius-lg border border-ksv-border bg-ksv-white shadow-2xl overflow-hidden flex flex-col sm:left-auto sm:right-6 sm:w-[min(380px,calc(100vw-2rem))]"
            style={{
              bottom: "calc(5rem + max(0px, env(safe-area-inset-bottom)))",
              maxHeight: "calc(100dvh - 6.5rem - env(safe-area-inset-bottom))",
            }}
          >
          <header className="bg-ksv-primary text-ksv-white px-4 py-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-ksv-white/15 flex items-center justify-center">
              <Bot size={18} />
            </div>
            <div>
              <h3 className="font-heading text-sm font-bold">KSV Website Assistant</h3>
              <p className="text-xs text-ksv-white/80">Answers from website data</p>
            </div>
          </header>

          <div className="flex-1 min-h-0 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-ksv-light/40 to-ksv-white custom-scrollbar">
            {messages.map((message) => (
              <article
                key={message.id}
                className={`max-w-[90%] rounded-radius-md px-3 py-2 ${
                  message.role === "assistant"
                    ? "bg-ksv-white border border-ksv-border text-ksv-dark"
                    : "bg-ksv-primary text-ksv-white ml-auto"
                }`}
              >
                <p className="text-sm font-body leading-relaxed">{message.text}</p>

                {message.role === "assistant" && message.sources?.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {message.sources.map((source) => (
                      <a
                        key={`${message.id}-${source}`}
                        href={source}
                        className="text-[11px] font-heading bg-ksv-accent text-ksv-primary rounded-full px-2.5 py-1 hover:bg-ksv-primary hover:text-ksv-white transition-colors"
                      >
                        {SOURCE_LABELS[source] || source}
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="px-3 py-2 border-t border-ksv-border bg-ksv-white">
            <div className="flex flex-wrap gap-2 mb-2">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => askQuestion(prompt)}
                  className="text-xs font-heading px-2.5 py-1.5 rounded-full bg-ksv-light text-ksv-dark hover:bg-ksv-secondary hover:text-ksv-dark transition-colors"
                >
                  {prompt}
                </button>
              ))}
            </div>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                askQuestion(input);
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about admissions, exams, contacts..."
                className="flex-1 border border-ksv-border rounded-radius-pill px-3 py-2 text-sm font-body text-ksv-dark focus:border-ksv-primary"
              />
              <button
                type="submit"
                disabled={!canSend}
                className="w-10 h-10 rounded-full bg-ksv-primary text-ksv-white disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                aria-label="Send question"
              >
                <SendHorizontal size={16} />
              </button>
            </form>
          </div>
          </section>
        </>
      )}
    </>
  );
}
