import { useState, useEffect, useRef } from 'react';
import { motion, useDragControls } from 'framer-motion';
import { IoSend } from "react-icons/io5";
import '../css/ChatWindow.css'; // Ensure you have the correct path to your CSS file

const ChatWindow = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [dimensions, setDimensions] = useState({ width: 600, height: 650 });
  const [isReading, setIsReading] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const chatWindowRef = useRef(null);
  const messagesEndRef = useRef(null);
  const dragControls = useDragControls();
  const [displayedMessages, setDisplayedMessages] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setDimensions({
        width: window.innerWidth < 600 ? '90%' : 600,
        height: window.innerWidth < 600 ? '75vh' : 650,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToBottom = () => {
    if (!isReading) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (messages.length > 0 && !messages[messages.length - 1].isLoading) {
      scrollToBottom();
    }
  }, [messages, isReading]);

  useEffect(() => {
    const handleScroll = () => {
      if (!chatWindowRef.current) return;
      const { scrollTop, scrollHeight, clientHeight } = chatWindowRef.current;
      setIsReading(scrollTop + clientHeight < scrollHeight - 50);
    };

    chatWindowRef.current?.addEventListener('scroll', handleScroll);
    return () => chatWindowRef.current?.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (messages.length > displayedMessages.length) {
      const newMessage = messages[messages.length - 1];
      
      if (newMessage.isLoading) {
        setDisplayedMessages(prev => [...prev, '...']);
        return;
      }

      let i = 0;
      const fullText = newMessage.content;
      const interval = setInterval(() => {
        setDisplayedMessages(prev => {
          const newDisplayed = [...prev];
          newDisplayed[messages.length - 1] = fullText.slice(0, i + 1);
          return newDisplayed;
        });
        i++;
        if (i >= fullText.length) {
          clearInterval(interval);
        }
      }, 30);
    } else if (messages.length > 0 && messages[messages.length - 1].isLoading === false) {
      // Update loading state to final content
      const lastMessage = messages[messages.length - 1];
      if (displayedMessages[messages.length - 1] === '...' && lastMessage.content) {
        let i = 0;
        const fullText = lastMessage.content;
        const interval = setInterval(() => {
          setDisplayedMessages(prev => {
            const newDisplayed = [...prev];
            newDisplayed[messages.length - 1] = fullText.slice(0, i + 1);
            return newDisplayed;
          });
          i++;
          if (i >= fullText.length) {
            clearInterval(interval);
          }
        }, 35);
      }
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    const userMessage = { role: 'user', content: input, avatar: '👤' };
    const tempBotMessage = { role: 'bot', content: '', isLoading: true, avatar: '🤖' };

    setMessages(prev => [...prev, userMessage, tempBotMessage]);
    setDisplayedMessages(prev => [...prev, input]); // Add user message immediately
    setInput('');
    setIsReading(false);

    try {
      const response = await fetch('https://chatbot-backend-1-hmsn.onrender.com/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      if (data.error) throw new Error(data.error);

      setMessages(prev => {
        const newMessages = [...prev];
        const lastIndex = newMessages.length - 1;
        if (newMessages[lastIndex].isLoading) {
          newMessages[lastIndex] = { ...newMessages[lastIndex], content: data.response, isLoading: false };
        }
        return newMessages;
      });
    } catch (error) {
      setMessages(prev => {
        const newMessages = [...prev];
        const lastIndex = newMessages.length - 1;
        if (newMessages[lastIndex].isLoading) {
          newMessages[lastIndex] = { ...newMessages[lastIndex], content: error.message, isLoading: false };
        }
        return newMessages;
      });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
  ref={chatWindowRef}
  className="chat-window"
  style={{
    width: dimensions.width,
    height: dimensions.height,
    bottom: isMobile ? '15%' : '120px',
    right: isMobile ? '50%' : '20px',
    transform: isMobile ? 'translateX(50%)' : 'none',
  }}
  drag
  dragControls={dragControls}
  dragListener={false}
  dragMomentum={false}
>
  <motion.div className="chat-header">
    <h3 className="chat-title">Chat with Us</h3>
    <button onClick={onClose} className="close-button">
      <i className="ri-close-line"></i>
    </button>
  </motion.div>

  <div className="messages-container">
    {messages.map((msg, index) => (
      <div key={index} className={`message ${msg.role}`}>
        <div className={`message-row ${msg.role}`}>
          <div className="avatar">{msg.avatar}</div>
          <div className="message-bubble">
            {displayedMessages[index] || (msg.isLoading ? '...' : '')}
          </div>
        </div>
      </div>
    ))}
    <div ref={messagesEndRef} />
  </div>

  <div className="input-container">
    <textarea
      className="textarea"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={handleKeyDown}
    />
    <button onClick={sendMessage} className="send-button">
      <IoSend className="send-icon" />
    </button>
  </div>
</motion.div>
  );
};

export default ChatWindow;