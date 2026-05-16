import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY as string;
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

const SYSTEM_PROMPT = `You are Partha's personal AI assistant embedded on his portfolio website. Answer questions about Partha Rakshit concisely and helpfully.

Key facts about Partha:
- Full name: Partha Rakshit
- Education: B.Tech in Computer Science and Engineering from Lovely Professional University (2020–2024), 80.80%
- Role: QA Engineer / Software Tester
- Skills: Manual Testing, Selenium WebDriver, Java, TestNG, Cucumber (BDD), JIRA, Postman, API Testing, SQL, Git
- Experience: Working as a QA Engineer with expertise in test automation and software quality assurance
- Location: India
- Certifications: Relevant QA and testing certifications
- Contact: Available through the contact section of the portfolio

Be friendly, professional, and concise. If you don't know something specific about Partha, say so politely and suggest they use the contact form to reach him directly.`;

const SUGGESTIONS = [
  "What is Partha's current role?",
  "What testing tools does Partha know?",
  "How can I contact Partha?",
  "What certifications does Partha have?",
];

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hi! I'm Partha's AI assistant. Ask me anything about his skills, experience, or how to get in touch. 👋" },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    setShowSuggestions(false);
    const userMsg: Message = { role: 'user', content: trimmed };
    const history = [...messages, userMsg];
    setMessages(history);
    setInput('');
    setLoading(true);

    try {
      // Build Gemini contents array — skip the initial assistant greeting,
      // only include actual conversation turns (must start with user).
      const conversationTurns = history.filter((m, i) => {
        // Drop the initial greeting (index 0, assistant)
        if (i === 0 && m.role === 'assistant') return false;
        return true;
      });

      // Gemini requires strictly alternating user/model turns starting with user.
      // Map our roles: assistant → model
      const contents = conversationTurns.map((m) => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.content }],
      }));

      const body = {
        system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents,
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 512,
        },
      };

      const res = await fetch(GEMINI_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err?.error?.message || `HTTP ${res.status}`);
      }

      const data = await res.json();
      const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text
        ?? 'Sorry, I could not get a response.';

      setMessages([...history, { role: 'assistant', content: reply }]);
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Unknown error';
      setMessages([...history, { role: 'assistant', content: `Connection error: ${msg}. Please try again.` }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <>
      {/* Chat window */}
      <div
        className="fixed bottom-24 right-5 z-50 flex flex-col"
        style={{
          width: '360px',
          maxWidth: 'calc(100vw - 24px)',
          height: open ? '520px' : '0px',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'all' : 'none',
          transform: open ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.96)',
          transformOrigin: 'bottom right',
          transition: 'height 0.35s ease, opacity 0.3s ease, transform 0.3s ease',
        }}
      >
        <div
          className="flex flex-col h-full rounded-2xl overflow-hidden"
          style={{
            background: 'rgba(5,13,26,0.97)',
            border: '1px solid rgba(0,212,255,0.25)',
            boxShadow: '0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,212,255,0.08), 0 0 40px rgba(0,212,255,0.06)',
            backdropFilter: 'blur(20px)',
          }}
        >
          {/* Header */}
          <div
            className="flex items-center gap-3 px-4 py-3 flex-shrink-0"
            style={{
              background: 'linear-gradient(135deg, rgba(0,212,255,0.08), rgba(16,185,129,0.06))',
              borderBottom: '1px solid rgba(0,212,255,0.15)',
            }}
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'linear-gradient(135deg,#0284c7,#00d4ff)', boxShadow: '0 0 14px rgba(0,212,255,0.4)' }}
            >
              <Bot className="w-5 h-5" style={{ color: '#050d1a' }} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-bold subheading-font">Partha's AI Assistant</p>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" style={{ boxShadow: '0 0 6px #10b981', animation: 'pulse 2s ease-in-out infinite' }} />
                <p className="text-emerald-400 text-xs body-font">Powered by Gemini</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-lg transition-colors duration-200"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <X className="w-4 h-4 text-slate-400" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(0,212,255,0.2) transparent' }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={
                    msg.role === 'assistant'
                      ? { background: 'linear-gradient(135deg,#0284c7,#00d4ff)' }
                      : { background: 'linear-gradient(135deg,#10b981,#059669)' }
                  }
                >
                  {msg.role === 'assistant'
                    ? <Bot className="w-3.5 h-3.5" style={{ color: '#050d1a' }} />
                    : <User className="w-3.5 h-3.5" style={{ color: '#050d1a' }} />
                  }
                </div>
                <div
                  className="max-w-[75%] px-3 py-2.5 rounded-2xl text-sm body-font leading-relaxed"
                  style={
                    msg.role === 'assistant'
                      ? { background: 'rgba(0,212,255,0.07)', border: '1px solid rgba(0,212,255,0.15)', color: '#cbd5e1', borderTopLeftRadius: '4px' }
                      : { background: 'linear-gradient(135deg, rgba(2,132,199,0.25), rgba(0,212,255,0.18))', border: '1px solid rgba(0,212,255,0.25)', color: '#e2f0ff', borderTopRightRadius: '4px' }
                  }
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {loading && (
              <div className="flex gap-2.5 flex-row">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'linear-gradient(135deg,#0284c7,#00d4ff)' }}>
                  <Bot className="w-3.5 h-3.5" style={{ color: '#050d1a' }} />
                </div>
                <div
                  className="px-4 py-3 rounded-2xl flex items-center gap-1.5"
                  style={{ background: 'rgba(0,212,255,0.07)', border: '1px solid rgba(0,212,255,0.15)', borderTopLeftRadius: '4px' }}
                >
                  {[0, 1, 2].map((n) => (
                    <span key={n} className="w-1.5 h-1.5 rounded-full bg-cyan-400" style={{ animation: `pulse 1.2s ease-in-out ${n * 0.2}s infinite` }} />
                  ))}
                </div>
              </div>
            )}

            {/* Suggestion chips */}
            {showSuggestions && messages.length === 1 && (
              <div className="pt-1 space-y-1.5">
                <p className="text-xs text-slate-600 body-font px-1">Quick questions:</p>
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => sendMessage(s)}
                    className="w-full text-left text-xs px-3 py-2 rounded-xl transition-all duration-200 body-font"
                    style={{ background: 'rgba(0,212,255,0.05)', border: '1px solid rgba(0,212,255,0.15)', color: '#7db3cc' }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(0,212,255,0.10)';
                      (e.currentTarget as HTMLElement).style.color = '#00d4ff';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(0,212,255,0.05)';
                      (e.currentTarget as HTMLElement).style.color = '#7db3cc';
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input bar */}
          <div
            className="flex items-center gap-2 px-3 py-3 flex-shrink-0"
            style={{ borderTop: '1px solid rgba(0,212,255,0.12)', background: 'rgba(5,13,26,0.6)' }}
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask about Partha..."
              disabled={loading}
              className="flex-1 bg-transparent text-sm text-white placeholder-slate-600 outline-none body-font"
              style={{ caretColor: '#00d4ff' }}
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={!input.trim() || loading}
              className="w-8 h-8 flex items-center justify-center rounded-lg flex-shrink-0 transition-all duration-200"
              style={{
                background: input.trim() && !loading ? 'linear-gradient(135deg,#0284c7,#00d4ff)' : 'rgba(255,255,255,0.05)',
                border: `1px solid ${input.trim() && !loading ? 'transparent' : 'rgba(255,255,255,0.08)'}`,
              }}
            >
              {loading
                ? <Loader2 className="w-3.5 h-3.5 text-slate-500 animate-spin" />
                : <Send className="w-3.5 h-3.5" style={{ color: input.trim() ? '#050d1a' : '#475569' }} />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Floating toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300"
        style={{
          background: open
            ? 'linear-gradient(135deg,#334155,#1e293b)'
            : 'linear-gradient(135deg,#0284c7,#00d4ff)',
          boxShadow: open
            ? '0 4px 20px rgba(0,0,0,0.4)'
            : '0 4px 24px rgba(0,212,255,0.45), 0 0 0 1px rgba(0,212,255,0.2)',
        }}
        aria-label="Toggle AI chat"
      >
        {open
          ? <X className="w-6 h-6 text-slate-300" />
          : <MessageCircle className="w-6 h-6" style={{ color: '#050d1a' }} />
        }
        {!open && (
          <span
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{ border: '2px solid rgba(0,212,255,0.4)', animation: 'pulse 2.5s ease-in-out infinite' }}
          />
        )}
      </button>
    </>
  );
};

export default ChatBot;
