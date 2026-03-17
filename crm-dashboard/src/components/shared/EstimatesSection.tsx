"use client";

import { useState } from "react";
import EstimatesAdd from "./EstimatesAdd";

export type EstimateStatus = "Open" | "Closed" | "Quote";

interface EstimateRow {
  id: string;
  estimateId: string;
  status: EstimateStatus;
  created: string;
  service: string;
  cost: string;
}

const MOCK_ESTIMATES: EstimateRow[] = [
  { id: "1", estimateId: "260316", status: "Open", created: "Feb 25th, 2026", service: "Cleaning", cost: "$1,087.50" },
  { id: "2", estimateId: "260317", status: "Closed", created: "Feb 25th, 2026", service: "Gutter Replacement", cost: "$2,469.14" },
  { id: "3", estimateId: "260319", status: "Quote", created: "Feb 25th, 2026", service: "Gutter Replacement", cost: "$1,748.56" },
];

type EstimateTab = "all" | "Open" | "Closed" | "Quote";

export default function EstimatesSection() {
  const [tab, setTab] = useState<EstimateTab>("all");

  const filtered =
    tab === "all"
      ? MOCK_ESTIMATES
      : MOCK_ESTIMATES.filter((e) => e.status === tab);

  const allCount = MOCK_ESTIMATES.length;
  const openCount = MOCK_ESTIMATES.filter((e) => e.status === "Open").length;
  const closedCount = MOCK_ESTIMATES.filter((e) => e.status === "Closed").length;
  const quoteCount = MOCK_ESTIMATES.filter((e) => e.status === "Quote").length;

  const TABS: { id: EstimateTab; label: string; count: number }[] = [
    { id: "all", label: "All", count: allCount },
    { id: "Open", label: "Open", count: openCount },
    { id: "Closed", label: "Closed", count: closedCount },
    { id: "Quote", label: "Quote", count: quoteCount },
  ];

  return (
    <div className="estimates-section">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h2 className="small fw-semibold text-body mb-0" style={{ fontSize: "0.875rem" }}>
          Estimates
        </h2>
        <EstimatesAdd />
      </div>
      <div className="estimates-tabs border-bottom mb-0">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            className={`estimates-tab small fw-medium border-0 bg-transparent py-2 px-0 me-3 ${tab === t.id ? "estimates-tab-active" : "text-secondary"}`}
            onClick={() => setTab(t.id)}
          >
            {t.label} ({t.count})
          </button>
        ))}
      </div>
      <ul className="list-unstyled mb-0 estimates-list estimates-list-scroll">
        {filtered.length === 0 ? (
          <li className="estimates-list-item py-3 text-center text-secondary small">
            No estimates
          </li>
        ) : (
          filtered.map((row, index) => (
            <li
              key={row.id}
              className={`estimates-list-item estimates-list-item-2rows py-2 ${index > 0 ? "border-top" : ""}`}
              style={{ borderColor: "#f1f5f9" }}
            >
              <div className="d-flex align-items-center justify-content-between gap-2">
                <span className={`estimates-status-badge estimates-status-${row.status.toLowerCase()}`}>
                  {row.status}
                </span>
                <span className="fw-bold text-body flex-grow-1 min-w-0" style={{ fontSize: "0.875rem" }}>
                  Estimate #{row.estimateId}
                </span>
                <span className="text-body small text-end">{row.service}</span>
                <span className="fw-bold text-body" style={{ fontSize: "0.875rem" }}>
                  {row.cost}
                </span>
                <button
                  type="button"
                  className="btn btn-link p-0 estimates-delete-btn flex-shrink-0"
                  aria-label="Delete estimate"
                >
                  <i className="bi bi-trash text-danger" style={{ fontSize: "1rem" }} />
                </button>
              </div>
              <div className="small text-secondary mt-0 pt-0" style={{ marginTop: "0.125rem" }}>
                Created {row.created}
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
