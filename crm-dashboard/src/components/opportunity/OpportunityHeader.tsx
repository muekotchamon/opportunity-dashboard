"use client";

import CurrentStageDesign1 from "./CurrentStageDesign1";
import CurrentStageDesign2 from "./CurrentStageDesign2";
import CurrentStageDesign3 from "./CurrentStageDesign3";
import CurrentStageDesign4 from "./CurrentStageDesign4";
import type { Layout } from "../../types";

interface OpportunityHeaderProps {
  layout: Layout;
}

export default function OpportunityHeader({ layout }: OpportunityHeaderProps) {
  return (
    <div className="opportunity-header-grid">
      <section className="opportunity-header-card">
        <div className="d-flex flex-wrap align-items-start justify-content-between gap-3">
          <div className="min-w-0">
            <nav className="small text-secondary mb-1">
              <a href="#" className="text-secondary text-decoration-none hover-primary">Opportunities</a>
              <span className="mx-1">›</span>
              <span className="text-body fw-medium">179484 · John Smith</span>
            </nav>
            <p className="fw-semibold text-body mb-0 lh-sm" style={{ fontSize: "1.5rem" }}>179484 · John Smith</p>
            <p className="text-secondary mt-1 mb-0 small">Roof Replacement</p>
          </div>
          <div className="d-flex flex-column align-items-end gap-2 flex-shrink-0">
            <div className="d-flex flex-wrap align-items-center justify-content-end gap-2">
              <span className="d-inline-flex align-items-center px-3 py-1 rounded-pill text-white text-uppercase fw-bold small" style={{ fontSize: "0.75rem", background: "#10b981" }}>Customer</span>
              <button type="button" className="btn d-inline-flex align-items-center gap-2 rounded-pill border bg-white text-body small fw-medium" style={{ padding: "0.5rem 1rem", borderColor: "#e2e8f0" }}>
                <span className="rounded-circle d-inline-block" style={{ width: 8, height: 8, background: "#f59e0b" }} />
                Initial
              </button>
              <button type="button" className="btn d-inline-flex align-items-center gap-2 rounded-pill border bg-white text-body small fw-medium" style={{ padding: "0.5rem 1rem", borderColor: "#e2e8f0" }}>
                <i className="bi bi-envelope text-secondary" style={{ fontSize: "1rem" }} />
                Send Email
              </button>
              <button type="button" className="btn d-inline-flex align-items-center gap-2 rounded-pill border bg-white text-body small fw-medium" style={{ padding: "0.5rem 1rem", borderColor: "#e2e8f0" }}>
                <i className="bi bi-file-earmark-text text-secondary" style={{ fontSize: "1rem" }} />
                Inspection Report
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="header-stage-slot">
        {layout === "design1" && <CurrentStageDesign1 />}
        {layout === "design2" && <CurrentStageDesign2 />}
        {layout === "design3" && <CurrentStageDesign3 />}
        {layout === "design4" && <CurrentStageDesign4 />}
      </div>
    </div>
  );
}
