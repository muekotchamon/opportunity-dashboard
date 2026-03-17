"use client";

import { useState, useRef, useEffect } from "react";

export default function EstimatesAdd() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="estimates-add-wrap position-relative d-inline-block" ref={wrapRef}>
      <button
        type="button"
        className="estimates-add-btn btn btn-add-inline"
        onClick={(e) => {
          e.stopPropagation();
          setOpen((v) => !v);
        }}
      >
        + Add
      </button>
      <div
        className="estimates-popover"
        role="dialog"
        style={{ display: open ? "block" : "none" }}
        onClick={(e) => e.stopPropagation()}
      >
        <h4>Add estimate</h4>
        <ul className="list-unstyled mb-0">
          <li><button type="button">Blank estimates</button></li>
          <li><button type="button">Templates</button></li>
        </ul>
      </div>
    </div>
  );
}
