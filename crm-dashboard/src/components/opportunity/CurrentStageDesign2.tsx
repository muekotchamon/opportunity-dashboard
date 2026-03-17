"use client";

export default function CurrentStageDesign2() {
  return (
    <section
      id="headerProgressDesign2"
      className="header-stage-panel h-100"
    >
      <h2 className="small fw-semibold text-body mb-3" style={{ fontSize: "0.875rem" }}>Current Stage</h2>
      <div className="row g-0 mb-2 text-center">
        {["Initial", "Set", "Pending", "Close"].map((label, i) => (
          <div key={label} className="col-3 d-flex flex-column align-items-center">
            <span
              className={`small fw-medium ${i === 3 ? "text-secondary" : "text-body"}`}
            >
              {label}
            </span>
            <span
              className="rounded-circle d-inline-block mt-2"
              style={{
                width: 8,
                height: 8,
                background: i < 3 ? "var(--primary)" : "#e5e7eb",
              }}
            />
          </div>
        ))}
      </div>
      <div className="d-flex gap-1 rounded-pill overflow-hidden bg-light" style={{ height: 8 }}>
        <div className="flex-grow-1 bg-primary" />
        <div className="flex-grow-1 bg-primary" />
        <div className="flex-grow-1 bg-primary bg-opacity-50" />
        <div className="flex-grow-1 bg-secondary" />
      </div>
      <p className="small text-secondary mt-2 mb-0 fw-medium">Pending</p>
    </section>
  );
}
