"use client";

export default function CurrentStageDesign3() {
  return (
    <section
      id="headerProgressDesign3"
      className="header-stage-panel h-100"
    >
      <h2 className="small fw-semibold text-body mb-3" style={{ fontSize: "0.875rem" }}>Current Stage</h2>
      <div className="d-flex gap-2 align-items-end">
        {["Initial", "Set", "Pending", "Close"].map((label, i) => (
          <div key={label} className="flex-grow-1">
            <div
              className="rounded-pill mb-1"
              style={{
                height: 6,
                background:
                  i < 2 ? "#10b981" : i === 2 ? "#f59e0b" : "#e5e7eb",
              }}
            />
            <div className="d-flex align-items-center justify-content-center gap-1">
              {i === 2 && (
                <span
                  className="rounded-circle bg-warning animate-pulse"
                  style={{ width: 6, height: 6 }}
                />
              )}
              <span
                className="small fw-medium"
                style={{
                  fontSize: "10px",
                  color: i === 2 ? "#d97706" : i === 3 ? "#9ca3af" : "#475569",
                }}
              >
                {label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
