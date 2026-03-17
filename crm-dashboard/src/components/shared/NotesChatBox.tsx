"use client";

import { useRef, useState, useCallback } from "react";

export default function NotesChatBox() {
  const [openWrap, setOpenWrap] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggle = useCallback((id: string) => {
    setOpenWrap((prev) => (prev === id ? null : id));
  }, []);

  const closeAll = useCallback(() => setOpenWrap(null), []);

  return (
    <div className="notes-chat-box" ref={containerRef}>
      <div className="chat-input-wrap">
        <textarea
          rows={2}
          placeholder="Type a message..."
          className="w-100 border-0 notes-chat-textarea"
          style={{
            minHeight: 44,
            maxHeight: 120,
            resize: "none",
            outline: "none",
            background: "transparent",
            fontSize: "0.875rem",
          }}
        />
        <div className="chat-input-bar">
          <div className="chat-input-icons">
            <div className={`chat-icon-wrap position-relative ${openWrap === "add" ? "is-open" : ""}`}>
              <button
                type="button"
                className="chat-icon-btn"
                aria-label="Add"
                onClick={(e) => {
                  e.stopPropagation();
                  toggle("add");
                }}
              >
                <i className="bi bi-plus-circle" style={{ fontSize: "1.125rem" }} />
              </button>
              <div
                className="chat-popover"
                role="dialog"
                aria-label="Add options"
                style={{ display: openWrap === "add" ? "block" : "none" }}
                onClick={(e) => e.stopPropagation()}
              >
                <h4>Add options</h4>
                <ul className="list-unstyled mb-0">
                  <li><button type="button">Interaction Type</button></li>
                  <li><button type="button">Link</button></li>
                  <li><button type="button">Other options</button></li>
                </ul>
              </div>
            </div>
            <div className={`chat-icon-wrap position-relative ${openWrap === "attach" ? "is-open" : ""}`}>
              <button
                type="button"
                className="chat-icon-btn"
                aria-label="Attach file"
                onClick={(e) => {
                  e.stopPropagation();
                  toggle("attach");
                }}
              >
                <i className="bi bi-paperclip" style={{ fontSize: "1.125rem" }} />
              </button>
              <div
                className="chat-popover"
                role="dialog"
                style={{ display: openWrap === "attach" ? "block" : "none" }}
                onClick={(e) => e.stopPropagation()}
              >
                <h4>Attach file</h4>
                <label className="cursor-pointer">Select file...</label>
                <input type="file" className="d-none" accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png,.gif" />
              </div>
            </div>
            <div className={`chat-icon-wrap position-relative ${openWrap === "emoji" ? "is-open" : ""}`}>
              <button
                type="button"
                className="chat-icon-btn"
                aria-label="Emoji"
                onClick={(e) => {
                  e.stopPropagation();
                  toggle("emoji");
                }}
              >
                <i className="bi bi-emoji-smile" style={{ fontSize: "1.125rem" }} />
              </button>
              <div
                className="chat-popover"
                role="dialog"
                style={{ display: openWrap === "emoji" ? "block" : "none" }}
                onClick={(e) => e.stopPropagation()}
              >
                <h4>Choose emoji</h4>
                <div className="emoji-strip d-flex gap-1 flex-wrap mt-1">
                  {["😀", "😊", "👍", "✅", "❤️", "📌"].map((emoji, i) => (
                    <button key={i} type="button" className="chat-emoji-btn border-0 bg-transparent p-0 d-inline-flex align-items-center justify-content-center" style={{ width: "1.75rem", height: "1.75rem", fontSize: "1rem" }}>
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className={`chat-icon-wrap position-relative ${openWrap === "image" ? "is-open" : ""}`}>
              <button
                type="button"
                className="chat-icon-btn"
                aria-label="Attach image"
                onClick={(e) => {
                  e.stopPropagation();
                  toggle("image");
                }}
              >
                <i className="bi bi-image" style={{ fontSize: "1.125rem" }} />
              </button>
              <div
                className="chat-popover"
                role="dialog"
                style={{ display: openWrap === "image" ? "block" : "none" }}
                onClick={(e) => e.stopPropagation()}
              >
                <h4>Attach image</h4>
                <label className="cursor-pointer">Select image...</label>
                <input type="file" className="d-none" accept="image/*" />
              </div>
            </div>
          </div>
          <button type="button" className="chat-send-btn d-inline-flex align-items-center gap-1">
            <i className="bi bi-send-fill" style={{ fontSize: "1rem" }} />
            Send
          </button>
        </div>
      </div>
      {openWrap && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100"
          style={{ zIndex: 99 }}
          onClick={closeAll}
          onKeyDown={(e) => e.key === "Escape" && closeAll()}
          role="presentation"
        />
      )}
    </div>
  );
}
