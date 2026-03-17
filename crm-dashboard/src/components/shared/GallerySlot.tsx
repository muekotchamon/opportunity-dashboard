"use client";

import { useRef, useState, useCallback } from "react";

export default function GallerySlot() {
  const [preview, setPreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file?.type.startsWith("image/")) return;
      const reader = new FileReader();
      reader.onload = (ev) => setPreview((ev.target?.result as string) ?? null);
      reader.readAsDataURL(file);
    },
    []
  );

  return (
    <label
      className={`gallery-slot-add ratio ratio-1x1 rounded-3 d-flex align-items-center justify-content-center ${
        preview ? "gallery-slot-has-image" : ""
      }`}
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="gallery-slot-file position-absolute opacity-0"
        style={{ width: "0.1px", height: "0.1px" }}
        onChange={handleChange}
      />
      <span className="slot-add-label d-flex flex-column align-items-center justify-content-center small fw-medium">
        {preview ? (
          <img src={preview} alt="" className="w-100 h-100 object-fit-cover rounded-3" />
        ) : (
          <>
            <i className="bi bi-plus-lg mb-1" style={{ fontSize: "1.25rem" }} />
            Add
          </>
        )}
      </span>
    </label>
  );
}
