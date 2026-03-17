"use client";

import React, { useState } from "react";

type ProjectTab = "job" | "service";
type JobStatusTab = "sold" | "contracted" | "closed";

interface JobRow {
  jobId: string;
  type: string;
  contracted: string;
  startPlan: string;
  pmName: string;
  totalValue: string;
  detailLine1?: string;
  detailLine2?: string;
  hasPdf?: boolean;
}

interface ServiceRow {
  serviceId: string;
  status: string;
  type: string;
  valueTotal: string;
  created: string;
  quoted: string;
  sold: string;
  contracted: string;
  closed: string;
}

const MOCK_JOBS: Record<JobStatusTab, JobRow[]> = {
  sold: [
    { jobId: "JOB-2024-001", type: "Roof Replacement", contracted: "03/10/2024", startPlan: "03/18/2024", pmName: "David Martinez", totalValue: "$24,500", detailLine1: "John Smith - Full Roof Replacement", detailLine2: "Schedule with crew for tear-off and install.", hasPdf: true },
    { jobId: "JOB-2024-002", type: "Siding Repair", contracted: "03/08/2024", startPlan: "", pmName: "Charlotte Farmer", totalValue: "$8,200" },
  ],
  contracted: [
    { jobId: "4260398", type: "Insulation", contracted: "3/12/2026", startPlan: "", pmName: "Ben Team", totalValue: "$9,425.34", detailLine1: "Jerry Amato - Attic Insulation", detailLine2: "LVM To Sched- Offer 3/30 & 3/31 W/Andrell & Allen- Insulation", hasPdf: true },
    { jobId: "JOB-2024-004", type: "Gutter Install", contracted: "03/01/2024", startPlan: "03/15/2024", pmName: "David Martinez", totalValue: "$4,100", detailLine1: "Gutter replacement - 120 ft", hasPdf: false },
    { jobId: "JOB-2024-005", type: "Roof + Siding", contracted: "02/25/2024", startPlan: "03/20/2024", pmName: "Charlotte Farmer", totalValue: "$42,000" },
  ],
  closed: [
    { jobId: "JOB-2023-089", type: "Roof Repair", contracted: "12/15/2023", startPlan: "12/18/2023", pmName: "Ryan Wongli", totalValue: "$6,750" },
    { jobId: "JOB-2023-090", type: "New Roof", contracted: "12/20/2023", startPlan: "12/22/2023", pmName: "David Martinez", totalValue: "$28,200", detailLine1: "Completed - Final inspection passed.", hasPdf: true },
  ],
};

const MOCK_SERVICES: ServiceRow[] = [
  { serviceId: "5260592", status: "Open", type: "Roof Repair", valueTotal: "$0.00", created: "03/16/26", quoted: "No Date", sold: "No Date", contracted: "No Date", closed: "No Date" },
  { serviceId: "5260593", status: "Quoted", type: "Full Roof Replacement", valueTotal: "$24,500.00", created: "03/10/26", quoted: "03/12/26", sold: "No Date", contracted: "No Date", closed: "No Date" },
  { serviceId: "5260594", status: "Closed", type: "Attic Insulation", valueTotal: "$9,425.34", created: "02/15/26", quoted: "02/18/26", sold: "02/20/26", contracted: "03/12/26", closed: "03/25/26" },
];

export default function ProjectCard() {
  const [projectTab, setProjectTab] = useState<ProjectTab>("job");
  const [jobStatus, setJobStatus] = useState<JobStatusTab>("sold");
  const [expandedJobId, setExpandedJobId] = useState<string | null>("4260398");
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null);

  const jobs = MOCK_JOBS[jobStatus];
  const soldCount = MOCK_JOBS.sold.length;
  const contractedCount = MOCK_JOBS.contracted.length;
  const closedCount = MOCK_JOBS.closed.length;

  return (
    <section className="card-saas p-4 project-card" data-section-empty="false">
      <h2 className="small fw-semibold text-body mb-2" style={{ fontSize: "0.875rem" }}>Project</h2>
      <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-2">
        <div className="d-flex gap-1 rounded-3 p-1 project-card-main-tabs" style={{ background: "#f1f5f9", width: "fit-content" }}>
          <button
            type="button"
            className={`project-main-tab px-3 py-2 rounded-2 small fw-medium border-0 ${projectTab === "job" ? "project-main-tab-active" : "text-secondary"}`}
            onClick={() => setProjectTab("job")}
          >
            Job
          </button>
          <button
            type="button"
            className={`project-main-tab px-3 py-2 rounded-2 small fw-medium border-0 ${projectTab === "service" ? "project-main-tab-active" : "text-secondary"}`}
            onClick={() => setProjectTab("service")}
          >
            Service
          </button>
        </div>
        {projectTab === "job" && (
          <select
            className="form-select form-select-sm project-job-filter"
            value={jobStatus}
            onChange={(e) => setJobStatus(e.target.value as JobStatusTab)}
            aria-label="Filter jobs by status"
          >
            <option value="sold">Sold ({soldCount})</option>
            <option value="contracted">Contracted ({contractedCount})</option>
            <option value="closed">Closed ({closedCount})</option>
          </select>
        )}
        {projectTab === "service" && (
          <button type="button" className="btn btn-sm d-flex align-items-center gap-2 project-new-service-btn">
            <span className="rounded-circle d-flex align-items-center justify-content-center project-new-service-icon"><i className="bi bi-plus" /></span>
            <span>New Service</span>
          </button>
        )}
      </div>

      {projectTab === "job" && (
        <div className="project-job-panel">
          <div className="table-responsive project-table-wrap">
            <table className="table table-sm small project-table project-table-job mb-0">
              <thead>
                <tr>
                  <th className="project-table-job-id-th">Job ID</th>
                  <th>Type</th>
                  <th>Contracted</th>
                  <th>Start Plan</th>
                  <th>PM Name</th>
                  <th>Total Value</th>
                </tr>
              </thead>
              <tbody>
                {jobs.length === 0 ? (
                  <tr><td colSpan={6} className="text-center text-secondary small py-4">No jobs</td></tr>
                ) : (
                  jobs.map((row) => (
                    <React.Fragment key={row.jobId}>
                      <tr
                        className={`project-job-row ${(row.detailLine1 || row.detailLine2 || row.hasPdf) ? "project-job-row-expandable" : ""}`}
                        onClick={() => (row.detailLine1 || row.detailLine2 || row.hasPdf) && setExpandedJobId((id) => (id === row.jobId ? null : row.jobId))}
                        role={(row.detailLine1 || row.detailLine2 || row.hasPdf) ? "button" : undefined}
                        tabIndex={(row.detailLine1 || row.detailLine2 || row.hasPdf) ? 0 : undefined}
                        onKeyDown={(e) => { if ((row.detailLine1 || row.detailLine2 || row.hasPdf) && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); setExpandedJobId((id) => (id === row.jobId ? null : row.jobId)); } }}
                      >
                        <td className="fw-bold">
                          {(row.detailLine1 || row.detailLine2 || row.hasPdf) ? (
                            <span className="project-job-expand-icon me-2" aria-hidden>
                              <i className={`bi ${expandedJobId === row.jobId ? "bi-chevron-up" : "bi-chevron-down"}`} />
                            </span>
                          ) : (
                            <span className="project-job-expand-icon project-job-expand-icon-placeholder me-2" aria-hidden />
                          )}
                          {row.jobId}
                        </td>
                        <td>{row.type}</td>
                        <td>{row.contracted}</td>
                        <td>{row.startPlan || "—"}</td>
                        <td>{row.pmName}</td>
                        <td>
                          <button type="button" className="btn btn-link p-0 project-job-total-link text-primary text-decoration-underline border-0 bg-transparent small" onClick={(e) => e.stopPropagation()}>
                            {row.totalValue}
                          </button>
                        </td>
                      </tr>
                      {expandedJobId === row.jobId && (row.detailLine1 || row.detailLine2 || row.hasPdf) && (
                        <tr key={`${row.jobId}-detail`} className="project-job-detail-row">
                          <td colSpan={6} className="p-3 bg-light border-top-0">
                            <div className="d-flex align-items-start gap-2 small text-body">
                              <div className="flex-grow-1 min-w-0">
                                {row.detailLine1 && (
                                  <div className="d-flex align-items-center gap-2 mb-1">
                                    <i className="bi bi-info-circle text-secondary flex-shrink-0" aria-hidden />
                                    <span>{row.detailLine1}</span>
                                  </div>
                                )}
                                {row.detailLine2 && <div className="ms-4">{row.detailLine2}</div>}
                              </div>
                              {row.hasPdf && (
                                <button type="button" className="btn btn-link p-1 text-secondary flex-shrink-0" aria-label="View PDF" onClick={(e) => e.stopPropagation()}>
                                  <i className="bi bi-file-earmark-pdf" style={{ fontSize: "1.25rem" }} />
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {projectTab === "service" && (
        <div className="project-service-panel">
          <div className="table-responsive project-table-wrap">
            <table className="table table-sm small project-table project-table-service mb-0">
              <thead>
                <tr>
                  <th className="project-table-service-id-th">Service ID</th>
                  <th>Status</th>
                  <th>Type</th>
                  <th className="text-end">Value Total</th>
                </tr>
              </thead>
              <tbody>
                {MOCK_SERVICES.length === 0 ? (
                  <tr><td colSpan={4} className="text-center text-secondary small py-4">No services</td></tr>
                ) : (
                  MOCK_SERVICES.map((row) => (
                    <React.Fragment key={row.serviceId}>
                      <tr
                        className="project-service-row project-service-row-expandable"
                        onClick={() => setExpandedServiceId((id) => (id === row.serviceId ? null : row.serviceId))}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setExpandedServiceId((id) => (id === row.serviceId ? null : row.serviceId)); } }}
                      >
                        <td className="fw-bold">
                          <span className="project-service-expand-icon me-2" aria-hidden>
                            <i className={`bi ${expandedServiceId === row.serviceId ? "bi-chevron-up" : "bi-chevron-down"}`} />
                          </span>
                          {row.serviceId}
                        </td>
                        <td>
                          <span className={`project-service-status-badge project-service-status-${row.status.toLowerCase()}`}>
                            {row.status}
                          </span>
                        </td>
                        <td>{row.type}</td>
                        <td className="text-end">
                          <button type="button" className="btn btn-link p-0 project-job-total-link text-primary text-decoration-underline border-0 bg-transparent small" onClick={(e) => e.stopPropagation()}>
                            {row.valueTotal}
                          </button>
                        </td>
                      </tr>
                      {expandedServiceId === row.serviceId && (
                        <tr className="project-service-timeline-row">
                          <td colSpan={4} className="py-2 border-top-0 pt-0 small">
                            <div className="d-flex align-items-center gap-3 flex-wrap">
                              <i className="bi bi-info-circle text-secondary flex-shrink-0" aria-hidden style={{ fontSize: "0.875rem" }} />
                              <span><span className="text-secondary">Created</span> <span className="fw-semibold text-body">{row.created}</span></span>
                              <span><span className="text-secondary">Quoted</span> <span className="text-body">{row.quoted}</span></span>
                              <span><span className="text-secondary">Sold</span> <span className="text-body">{row.sold}</span></span>
                              <span><span className="text-secondary">Contracted</span> <span className="text-body">{row.contracted}</span></span>
                              <span><span className="text-secondary">Closed</span> <span className="text-body">{row.closed}</span></span>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
}
