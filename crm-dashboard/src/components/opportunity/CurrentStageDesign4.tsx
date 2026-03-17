"use client";

export default function CurrentStageDesign4() {
  return (
    <section
      id="headerProgressDesign4"
      className="header-stage-panel h-100"
    >
      <h2 className="small fw-semibold text-body mb-4" style={{ fontSize: "0.875rem" }}>Current Stage</h2>
      <div className="header-stepper-wrap">
        <div className="header-stepper-line" aria-hidden />
        {["Initial", "Set", "Pending", "Close"].map((label, i) => (
          <div key={label} className="header-stepper-step">
            <div
              className={`rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 ${
                i < 3 ? "text-white" : "border border-secondary bg-white"
              }`}
              style={{
                width: 32,
                height: 32,
                background: i < 3 ? "var(--primary)" : undefined,
              }}
            >
              {i < 3 && (
                <i className="bi bi-check" style={{ fontSize: "1rem" }} />
              )}
            </div>
            <span
              className={`header-stepper-label ${
                i === 2 ? "text-primary" : i === 3 ? "text-secondary" : "text-body"
              }`}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
