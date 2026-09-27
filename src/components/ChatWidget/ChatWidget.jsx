import { useState, useRef, useEffect } from 'react'
import './ChatWidget.css'

const INITIAL_MESSAGE = "Hi, Ask me anything about his experience, skills, or projects."

const QUICK_TOPICS = ['Work', 'About me', 'Skills', 'Contact']

const TOPIC_PROMPTS = {
  'Work': "Tell me about Shyamjith Haridas's work experience and projects.",
  'About me': "Give me a brief overview about who Shyamjith Haridas is.",
  'Skills': "What are Shyamjith Haridas's technical skills?",
  'Contact': "How can I contact Shyamjith Haridas?",
}

const SYSTEM_PROMPT = `You are an AI assistant representing Shyamjith Haridas, a Lead Flutter & Software Engineer based in Kerala, India with 9+ years of experience. Answer questions about his background, skills, projects, and experience in a helpful, concise, and professional manner.

Key facts about Shyamjith:
- Lead Flutter/Software Developer with 9+ years experience
- Specializes in Flutter, React, TypeScript, Node.js
- Has worked across fintech, SaaS, and mobile app development
- Built products reaching 50M+ users
- Led teams of 10+ developers
- Available for Lead / Senior / Flutter Developer roles
- Located in Kerala, India (Thiruvananthapuram)

Keep responses concise (2-4 sentences or a short list). Be friendly and professional.`

const FALLBACK_RESPONSE = "Hello! How can I assist you today regarding Shyamjith Haridas's work and experience? If you have any specific questions, feel free to ask!"

function BubbleContent({ text }) {
  const renderMarkdown = (str) =>
    str.split('\n').map((line, i) => {
      const html = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      return <p key={i} dangerouslySetInnerHTML={{ __html: html }} />
    })
  return <>{renderMarkdown(text)}</>
}

function TypewriterText({ text }) {
  const [shown, setShown] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    setShown('')
    setDone(false)
    let i = 0
    const iv = setInterval(() => {
      if (i < text.length) { setShown(text.slice(0, ++i)) }
      else { setDone(true); clearInterval(iv) }
    }, 14)
    return () => clearInterval(iv)
  }, [text])

  const renderMarkdown = (str) =>
    str.split('\n').map((line, i) => {
      const html = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      return <p key={i} dangerouslySetInnerHTML={{ __html: html }} />
    })

  return <>{renderMarkdown(shown)}{!done && <span className="chat__cursor">|</span>}</>
}

export default function ChatWidget() {
  const [messages, setMessages] = useState([
    { role: 'ai', text: INITIAL_MESSAGE }
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [newIdx, setNewIdx] = useState(null)
  const endRef = useRef(null)

  useEffect(() => {
    if (messages.length <= 1 && !typing) return
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  const sendMessage = async (text) => {
    if (!text.trim() || typing) return
    const userMsg = { role: 'user', text: text.trim() }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setTyping(true)

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: [{ role: 'user', content: text.trim() }],
        }),
      })

      const data = await response.json()
      const reply = data?.content?.[0]?.text || FALLBACK_RESPONSE

      setTyping(false)
      setMessages(prev => {
        const next = [...prev, { role: 'ai', text: reply }]
        setNewIdx(next.length - 1)
        return next
      })
    } catch {
      setTyping(false)
      setMessages(prev => {
        const next = [...prev, { role: 'ai', text: FALLBACK_RESPONSE }]
        setNewIdx(next.length - 1)
        return next
      })
    }
  }

  const send = () => sendMessage(input)
  const handleQuickTopic = (topic) => sendMessage(TOPIC_PROMPTS[topic])

  return (
    <div className="chat">
      <div className="chat__titlebar">
        <div className="chat__dots">
          {['#ff5f57', '#ffbd2e', '#28c840'].map(c => (
            <div key={c} className="chat__dot" style={{ background: c }} />
          ))}
        </div>
        <span className="chat__title">ask here</span>
      </div>

      <div className="chat__body">
        {messages.map((msg, i) => (
          <div key={i} className={`chat__msg chat__msg--${msg.role}`}>
            <div className={`chat__bubble chat__bubble--${msg.role}`}>
              {msg.role === 'ai' && i === newIdx
                ? <TypewriterText text={msg.text} />
                : <BubbleContent text={msg.text} />
              }
            </div>
          </div>
        ))}
        {typing && (
          <div className="chat__typing">
            <div className="chat__typing-dot" />
            <div className="chat__typing-dot" />
            <div className="chat__typing-dot" />
          </div>
        )}
        <div ref={endRef} />
      </div>

      <div className="chat__quick-topics">
        {QUICK_TOPICS.map(topic => (
          <button
            key={topic}
            className="chat__topic-btn"
            onClick={() => handleQuickTopic(topic)}
            disabled={typing}
          >
            {topic}
          </button>
        ))}
      </div>

      <div className="chat__input-row">
        <input
          className="chat__input"
          placeholder="Ask anything about Shyamjith..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && send()}
        />
        <button className="chat__send-btn" onClick={send}>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </div>
    </div>
  )
}
