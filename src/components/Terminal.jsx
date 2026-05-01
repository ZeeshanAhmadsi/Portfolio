import { useEffect, useRef, useState } from 'react';
import { terminalCommands } from '../constants';

export default function Terminal({ open, onOpen, onClose }) {
  const [lines, setLines] = useState([
    {
      type: 'response',
      text: "Welcome to my portfolio terminal! Type 'help' for available commands.",
    },
  ]);
  const [input, setInput] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [open, isMinimized]);

  const handleCommand = (command) => {
    if (command === 'clear') {
      setLines([]);
      return '';
    }
    if (command === 'minimize') {
      setIsMinimized((prev) => !prev);
      return 'Toggled minimize';
    }
    if (command === 'maximize') {
      setIsMaximized((prev) => !prev);
      return isMaximized ? 'Terminal restored' : 'Terminal maximized';
    }
    if (command === 'exit') {
      onClose();
      return '';
    }
    if (terminalCommands[command]) {
      return terminalCommands[command]();
    }
    return `Command not found: ${command}\nType 'help' to see available commands`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    setLines((prev) => [
      ...prev,
      { type: 'input', text: trimmed, prompt: 'visitor@portfolio:~$' },
    ]);

    const response = handleCommand(trimmed.toLowerCase());
    if (response) {
      setLines((prev) => [...prev, { type: 'response', text: response }]);
    }

    setInput('');
  };

  const containerClass = `terminal${open ? ' active' : ''}`;
  const style = isMinimized
    ? { height: '40px' }
    : isMaximized
      ? { width: '90vw', height: '90vh', top: '5vh', left: '5vw' }
      : {};

  return (
    <>
      <div className={containerClass} style={style} aria-label="Interactive Terminal">
        <div className="terminal-header" role="toolbar">
          <div className="terminal-title">Portfolio Terminal</div>
          <div className="terminal-controls">
            <button
              type="button"
              className="terminal-minimize"
              aria-label="Minimize terminal"
              onClick={() => setIsMinimized((prev) => !prev)}
            >
              <i className="fas fa-minus" />
            </button>
            <button
              type="button"
              className="terminal-maximize"
              aria-label="Maximize terminal"
              onClick={() => setIsMaximized((prev) => !prev)}
            >
              <i className="fas fa-expand" />
            </button>
            <button
              type="button"
              className="terminal-close"
              aria-label="Close terminal"
              onClick={onClose}
            >
              <i className="fas fa-times" />
            </button>
          </div>
        </div>
        {!isMinimized && (
          <div className="terminal-body">
            <div className="terminal-content">
              {lines.map((line, idx) => (
                <div className="terminal-line" key={`${line.text}-${idx}`}>
                  {line.prompt && <span className="terminal-prompt">{line.prompt}</span>}
                  <span
                    className={line.type === 'response' ? 'terminal-response' : 'terminal-command'}
                    style={{ whiteSpace: 'pre-wrap' }}
                  >
                    {line.text}
                  </span>
                </div>
              ))}
            </div>
            <form className="terminal-input-line" onSubmit={handleSubmit}>
              <label htmlFor="terminal-input" className="terminal-prompt">
                $
              </label>
              <input
                id="terminal-input"
                ref={inputRef}
                type="text"
                className="terminal-input"
                aria-label="Terminal input"
                placeholder="Type a command..."
                autoComplete="off"
                spellCheck="false"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </form>
          </div>
        )}
      </div>
      <button
        type="button"
        className="terminal-toggle"
        aria-label={open ? 'Close terminal' : 'Open terminal'}
        onClick={() => {
          if (open) {
            onClose();
          } else {
            setIsMinimized(false);
            setIsMaximized(false);
            onOpen();
            inputRef.current?.focus();
          }
        }}
      >
        <i className="fas fa-terminal" />
      </button>
    </>
  );
}
