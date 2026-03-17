"use client";

import { useState } from "react";
import NotesChatBox from "../shared/NotesChatBox";
import EstimatesSection from "../shared/EstimatesSection";
import GallerySlot from "../shared/GallerySlot";
import TasksList from "../shared/TasksList";
import ProjectCard from "./ProjectCard";

const D3_TABS = ["overview", "opportunity-info", "lead-referral", "notes", "schedule", "measurement", "estimates", "gallery", "tasks", "communication", "insurance", "checklist"] as const;

const D3_TAB_LABELS: Record<string, string> = {
  overview: "Overview",
  "opportunity-info": "Opportunity Info",
  "lead-referral": "Lead & Referral",
  notes: "Notes",
  schedule: "Schedule",
  measurement: "Measurement",
  estimates: "Estimates",
  gallery: "Gallery",
  tasks: "Tasks",
  communication: "Communication",
  insurance: "Insurance",
  checklist: "Checklist",
};

export default function Design3() {
  const [d3Tab, setD3Tab] = useState<string>("overview");
  const [commView, setCommView] = useState<"calllogs3" | "activities3">("calllogs3");

  return (
    <div id="design3" data-layout-panel className="design3-wrap">
      <div className="design3-tabs-spacer">
        <section className="card-saas p-2">
          <div className="d-flex overflow-auto pb-1" style={{ gap: "0.375rem", scrollbarWidth: "thin" }}>
            {D3_TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                className={`d3-page-tab flex-shrink-0 ${d3Tab === tab ? "active" : ""}`}
                onClick={() => setD3Tab(tab)}
              >
                {D3_TAB_LABELS[tab] ?? tab}
              </button>
            ))}
          </div>
        </section>
      </div>

      {d3Tab === "overview" && (
        <div data-d3-content="overview" className="design3-grid">
          {/* Row 1: Opportunity Information (span 2) | Lead & Referral (span 2) */}
          <section className="card-saas p-4 d3-r1 d3-c12">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h2 className="small fw-semibold text-body mb-0" style={{ fontSize: "0.875rem" }}>Opportunity Information</h2>
              <button type="button" className="btn btn-link btn-sm text-secondary p-0 small"><i className="bi bi-pencil me-1" style={{ fontSize: "0.875rem" }} />Edit</button>
            </div>
            <div className="row g-3 small mb-3">
              <div className="col-4"><p className="text-secondary mb-0">Looking For</p><p className="fw-semibold text-body mb-0 small">Full Roof Replacement</p></div>
              <div className="col-4"><p className="text-secondary mb-0">Property Type</p><p className="fw-semibold text-body mb-0 small">Residential</p></div>
              <div className="col-4"><p className="text-secondary mb-0">Commercial</p><p className="fw-semibold text-body mb-0 small">No</p></div>
            </div>
            <div className="border-top pt-3" style={{ borderColor: "#f1f5f9" }}>
              <h3 className="small fw-semibold text-secondary text-uppercase mb-2">Contacts</h3>
              <div className="row g-2 small mb-3">
                <div className="col-6"><span className="text-secondary">Name</span><span className="ms-2 fw-medium text-body">John Smith</span></div>
                <div className="col-6"><span className="text-secondary">Email</span><span className="ms-2 fw-medium text-body">john@example.com</span></div>
                <div className="col-6"><span className="text-secondary">Phone</span><span className="ms-2 fw-medium text-body">(555) 123-4567</span></div>
                <div className="col-6"><span className="text-secondary">Company</span><span className="ms-2 fw-medium text-body">Smith Properties LLC</span></div>
              </div>
              <h3 className="small fw-semibold text-secondary text-uppercase mb-2">Address</h3>
              <div className="small">
                <div><span className="text-secondary">Billing</span><span className="ms-2 fw-medium text-body">123 Main St, City, ST 12345</span></div>
                <div><span className="text-secondary">Working</span><span className="ms-2 fw-medium text-body">123 Main St, City, ST 12345</span></div>
              </div>
            </div>
          </section>

          <section className="card-saas p-4 d3-r1 d3-c34">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <h2 className="small fw-semibold text-body mb-0" style={{ fontSize: "0.875rem" }}>Lead & Referral</h2>
              <button type="button" className="btn btn-add-inline">+ Add</button>
            </div>
            <div className="small">
              <div><label className="text-secondary small d-block mb-0">Primary Source</label><p className="fw-medium text-body mb-0">Website</p></div>
              <div><label className="text-secondary small d-block mb-0">Secondary Source</label><p className="fw-medium text-secondary mb-0">—</p></div>
              <div className="pt-2 border-top" style={{ borderColor: "#f1f5f9" }}>
                <h3 className="small fw-semibold text-secondary text-uppercase mb-1">Referral Information</h3>
                <div className="small"><div><span className="text-secondary">First Name</span> Mike</div><div><span className="text-secondary">Last Name</span> Johnson</div><div><span className="text-secondary">Phone</span> (555) 234-5678</div><div><span className="text-secondary">Email</span> mike@referral.com</div><div><span className="text-secondary">Billing Address</span> 456 Oak Ave, Town, ST 67890</div></div>
              </div>
            </div>
          </section>

          {/* Row 2: Notes (span 2) | Scheduling | Measurement */}
          <section className="card-saas p-4 d3-r2 d3-c12 d-flex flex-column">
            <h2 className="small fw-semibold text-body mb-3" style={{ fontSize: "0.875rem" }}>Notes</h2>
            <div className="flex-grow-1 min-h-0 overflow-auto">
              <div className="mb-3">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <h4 className="small fw-semibold text-body mb-0">GIS</h4>
                  <div className="d-flex gap-2 text-secondary">
                    <button type="button" className="btn btn-link p-1"><i className="bi bi-envelope" /></button>
                    <button type="button" className="btn btn-link p-1"><i className="bi bi-link-45deg" /></button>
                  </div>
                </div>
                <div className="d-flex gap-2 align-items-start">
                  <img src="https://i.pravatar.cc/150?u=charlotte" alt="" className="rounded-circle flex-shrink-0 border" width={32} height={32} style={{ objectFit: "cover", borderColor: "#f1f5f9" }} />
                  <div className="flex-grow-1 min-w-0">
                    <div className="rounded-3 p-2 small text-body" style={{ background: "#f8fafc", border: "1px solid #f1f5f9" }}>Corner lot, easy access.</div>
                    <p className="small text-secondary mt-1 mb-0">Charlotte Farmer | 03/09/2026 12:36 PM</p>
                  </div>
                  <button type="button" className="btn btn-link p-1 text-secondary"><i className="bi bi-three-dots-vertical" /></button>
                </div>
              </div>
              <div className="pt-3 border-top" style={{ borderColor: "#f1f5f9" }}>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <h4 className="small fw-semibold text-body mb-0">Appointment Center</h4>
                  <button type="button" className="btn btn-link p-1 text-secondary"><i className="bi bi-envelope" /></button>
                </div>
                <div className="d-flex gap-2 align-items-start">
                  <img src="https://i.pravatar.cc/150?u=john" alt="" className="rounded-circle flex-shrink-0 border" width={32} height={32} style={{ objectFit: "cover", borderColor: "#f1f5f9" }} />
                  <div className="flex-grow-1 min-w-0">
                    <div className="rounded-3 p-2 small text-body" style={{ background: "#f8fafc", border: "1px solid #f1f5f9" }}>John Telc is managing the project and is in the office M-F 6:30am-3pm</div>
                  </div>
                  <button type="button" className="btn btn-link p-1 text-secondary"><i className="bi bi-three-dots-vertical" /></button>
                </div>
              </div>
            </div>
            <NotesChatBox />
          </section>

          <section className="card-saas p-4 d3-r2 d3-c3">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <h2 className="small fw-semibold text-body mb-0" style={{ fontSize: "0.875rem" }}>Scheduling</h2>
              <button type="button" className="btn btn-add-inline">+ Add</button>
            </div>
            <div className="small">
              <div><span className="text-secondary d-block" style={{ fontSize: "0.75rem" }}>Appointment</span><p className="fw-medium text-body mb-0">Mar 15, 2024 · 9:00 AM</p></div>
              <div><span className="text-secondary d-block" style={{ fontSize: "0.75rem" }}>Assigner (Sales Inspector)</span><p className="fw-medium text-body mb-0">David Martinez</p></div>
            </div>
          </section>

          <section className="card-saas p-4 d3-r2 d3-c4 d-flex flex-column">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h2 className="small fw-semibold text-body mb-0" style={{ fontSize: "0.875rem" }}>Measurement</h2>
              <span className="badge bg-light text-body small" style={{ fontSize: "0.75rem" }}>Pending</span>
            </div>
            <p className="small text-secondary mb-3 flex-grow-1">Request or place measurement order for this opportunity.</p>
            <div className="d-flex flex-column gap-2">
              <button type="button" className="btn rounded-3 w-100 d-flex align-items-center justify-content-center gap-2" style={{ background: "#f1f5f9", color: "#334155", fontSize: "0.875rem" }}><i className="bi bi-download" />Get Order</button>
              <button type="button" className="btn btn-primary-saas w-100"><i className="bi bi-clipboard-check" />Order</button>
            </div>
          </section>

          {/* Row 3: Estimates | Gallery | Insurance | Checklist */}
          <section className="card-saas p-4 d3-r3 d3-c1">
            <EstimatesSection />
          </section>

          <section className="card-saas p-4 d3-r3 d3-c2">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h2 className="small fw-semibold text-body mb-0" style={{ fontSize: "0.875rem" }}>Gallery</h2>
              <select className="form-select form-select-sm small rounded-3 border" style={{ width: "auto", fontSize: "0.75rem" }}>
                <option>Before Pics</option>
                <option>Production Pics</option>
                <option>After Pics</option>
              </select>
            </div>
            <div className="row g-2">
              <div className="col-4"><GallerySlot /></div>
              <div className="col-4"><GallerySlot /></div>
              <div className="col-4"><GallerySlot /></div>
            </div>
          </section>

          <section className="card-saas p-4 d3-r3 d3-c3">
            <h2 className="small fw-semibold text-body mb-2" style={{ fontSize: "0.875rem" }}>Insurance Detail</h2>
            <div className="small">
              <div><span className="text-secondary">Claim #</span><span className="ms-1 fw-medium text-body">CLM-2024-0892</span></div>
              <div><span className="text-secondary">Agency</span><span className="ms-1 fw-medium text-body">State Farm</span></div>
              <div><span className="text-secondary">Agent</span><span className="ms-1 fw-medium text-body">Jane Doe</span> (555) 987-6543</div>
              <div><span className="text-secondary">Note</span><span className="ms-1 text-body">Policy verified 3/1/24.</span></div>
              <div className="pt-2 mt-2 border-top text-secondary" style={{ borderColor: "#f1f5f9", fontSize: "0.75rem" }}>Created By Admin · Modified By Sales</div>
            </div>
          </section>

          <section className="card-saas p-4 d3-r3 d3-c4">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <h2 className="small fw-semibold text-body mb-0" style={{ fontSize: "0.875rem" }}>Checklist</h2>
              <button type="button" className="btn btn-add-inline">+ Add</button>
            </div>
            <div className="d-flex flex-wrap gap-2 mb-3">
              <span className="badge bg-light text-body border rounded-pill" style={{ fontSize: "0.875rem" }}>Email</span>
              <span className="badge bg-light text-body border rounded-pill" style={{ fontSize: "0.875rem" }}>GIS</span>
            </div>
            <div className="pt-3 border-top" style={{ borderColor: "#f1f5f9" }}>
              <h2 className="small fw-semibold text-body mb-2" style={{ fontSize: "0.875rem" }}>Assigner</h2>
              <div className="d-flex align-items-start justify-content-between gap-2">
                <div>
                  <p className="fw-semibold text-body mb-0">Ryan Wongli</p>
                  <p className="small text-secondary mb-0">Sales Inspector</p>
                </div>
                <button type="button" className="btn btn-link p-1 text-secondary"><i className="bi bi-three-dots-vertical" /></button>
              </div>
            </div>
          </section>

          {/* Project — Job / Service tabs */}
          <div className="d3-r3b d3-full">
            <ProjectCard />
          </div>

          {/* Row 4: Tasks full width */}
          <section className="card-saas p-4 d3-r4 d3-full">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <h2 className="small fw-semibold text-secondary text-uppercase mb-0" style={{ fontSize: "0.75rem" }}>Tasks</h2>
              <button type="button" className="btn btn-add-inline">+ Add</button>
            </div>
            <TasksList />
          </section>

          {/* Row 5: Communication & History full width */}
          <section className="card-saas p-0 overflow-hidden d3-r5 d3-full">
            <h2 className="small fw-semibold text-body mb-3 px-4 pt-4" style={{ fontSize: "0.875rem" }}>Communication & History</h2>
            <div className="d-flex border-bottom px-4 design3-comm-tabs" style={{ borderColor: "#f1f5f9" }}>
              <button type="button" className={`inner-tab border-0 px-3 py-2 small fw-medium ${commView === "calllogs3" ? "inner-tab-active" : ""}`} onClick={() => setCommView("calllogs3")}>Call Logs</button>
              <button type="button" className={`inner-tab border-0 px-3 py-2 small fw-medium ${commView === "activities3" ? "inner-tab-active" : ""}`} onClick={() => setCommView("activities3")}>Activities</button>
            </div>
            {commView === "calllogs3" && (
              <div className="px-4 py-3">
                <div className="table-calllogs-wrap">
                  <table className="table-calllogs">
                    <thead><tr><th>Date</th><th>Direction</th><th>Summary</th></tr></thead>
                    <tbody>
                      <tr><td>3/8/24 2:30 PM</td><td><span className="badge-dir-out">Outbound</span></td><td>Initial contact, set inspection</td></tr>
                      <tr><td>3/5/24 10:00 AM</td><td><span className="badge-dir-in">Inbound</span></td><td>Quote request</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            {commView === "activities3" && (
              <div className="px-4 py-3">
                <ul className="list-unstyled small mb-0 border rounded-3 overflow-hidden" style={{ borderColor: "#f1f5f9" }}>
                  <li className="py-3 px-4 border-bottom d-flex gap-3" style={{ borderColor: "#f8fafc" }}><span className="text-secondary fw-medium flex-shrink-0">3/9/24</span><span className="text-body">Estimate created</span></li>
                  <li className="py-3 px-4 d-flex gap-3"><span className="text-secondary fw-medium flex-shrink-0">3/8/24</span><span className="text-body">Inspection scheduled</span></li>
                </ul>
              </div>
            )}
          </section>
        </div>
      )}

      {/* Opportunity Info tab: grid 1 full + 2 cols */}
      {d3Tab === "opportunity-info" && (
        <div data-d3-content="opportunity-info" className="design3-tab-grid">
          <section className="card-saas p-4">
            <div className="d-flex align-items-center justify-content-between mb-3 pb-2 border-bottom" style={{ borderColor: "#f1f5f9" }}>
              <h2 className="small fw-semibold text-body mb-0" style={{ fontSize: "0.875rem" }}>Opportunity Information</h2>
              <button type="button" className="btn btn-link btn-sm text-secondary p-0 small"><i className="bi bi-pencil me-1" />Edit</button>
            </div>
            <div className="row g-3 small">
              <div className="col-md-4"><p className="text-secondary mb-0">Looking For</p><p className="fw-medium text-body mb-0">Full Roof Replacement</p></div>
              <div className="col-md-4"><p className="text-secondary mb-0">Property Type</p><p className="fw-medium text-body mb-0">Residential</p></div>
              <div className="col-md-4"><p className="text-secondary mb-0">Commercial</p><p className="fw-medium text-body mb-0">No</p></div>
            </div>
          </section>
          <section className="card-saas p-4">
            <h2 className="small fw-semibold text-body mb-2" style={{ fontSize: "0.875rem" }}>Contacts</h2>
            <div className="row g-2 small mt-1">
              <div className="col-12"><p className="text-secondary mb-0">Name</p><p className="fw-medium text-body mb-0">John Smith</p></div>
              <div className="col-12"><p className="text-secondary mb-0">Email</p><p className="fw-medium text-body mb-0">john@example.com</p></div>
              <div className="col-12"><p className="text-secondary mb-0">Phone</p><p className="fw-medium text-body mb-0">(555) 123-4567</p></div>
              <div className="col-12"><p className="text-secondary mb-0">Company</p><p className="fw-medium text-body mb-0">Smith Properties LLC</p></div>
            </div>
          </section>
          <section className="card-saas p-4">
            <h2 className="small fw-semibold text-body mb-2" style={{ fontSize: "0.875rem" }}>Address</h2>
            <div className="small mt-1">
              <div><p className="text-secondary mb-0">Billing</p><p className="fw-medium text-body mb-0">123 Main St, City, ST 12345</p></div>
              <div><p className="text-secondary mb-0">Working</p><p className="fw-medium text-body mb-0">123 Main St, City, ST 12345</p></div>
            </div>
          </section>
        </div>
      )}

      {/* Lead & Referral tab */}
      {d3Tab === "lead-referral" && (
        <div data-d3-content="lead-referral" className="design3-tab-lead-referral">
          <section className="card-saas p-4">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <h2 className="small fw-semibold text-body mb-0" style={{ fontSize: "0.875rem" }}>Lead Source</h2>
              <button type="button" className="btn btn-add-inline">+ Add</button>
            </div>
            <div className="small">
              <div><label className="text-secondary small d-block mb-0">Primary Source</label><p className="fw-medium text-body mb-0">Website</p></div>
              <div><label className="text-secondary small d-block mb-0">Secondary Source</label><p className="fw-medium text-secondary mb-0">—</p></div>
            </div>
          </section>
          <section className="card-saas p-4">
            <h2 className="small fw-semibold text-body mb-2" style={{ fontSize: "0.875rem" }}>Referral Information</h2>
            <div className="small">
              <div><span className="text-secondary">First Name</span> Mike</div>
              <div><span className="text-secondary">Last Name</span> Johnson</div>
              <div><span className="text-secondary">Phone</span> (555) 234-5678</div>
              <div><span className="text-secondary">Email</span> mike@referral.com</div>
              <div><span className="text-secondary">Billing Address</span> 456 Oak Ave, Town, ST 67890</div>
            </div>
          </section>
        </div>
      )}

      {/* Notes tab: single card */}
      {d3Tab === "notes" && (
        <div data-d3-content="notes">
          <section className="card-saas p-4">
            <h2 className="small fw-semibold text-body mb-3" style={{ fontSize: "0.875rem" }}>Notes</h2>
            <div>
              <h3 className="small fw-semibold text-secondary text-uppercase mb-2">GIS</h3>
              <div className="d-flex gap-2 align-items-start">
                <div className="rounded-circle bg-secondary bg-opacity-25 text-body d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: 28, height: 28, fontSize: "10px", fontWeight: 600 }}>GIS</div>
                <div className="flex-grow-1 min-w-0 rounded-3 border p-2 small" style={{ borderColor: "#f1f5f9" }}><p className="mb-0 text-body">GIS</p><p className="mb-0 text-secondary" style={{ fontSize: "11px" }}>Charlotte Farmer | 03/09/2026 12:36 PM</p></div>
              </div>
              <div className="pt-4 mt-4 border-top" style={{ borderColor: "#f1f5f9" }}>
                <h3 className="small fw-semibold text-secondary text-uppercase mb-2">Appointment Center</h3>
                <div className="d-flex gap-2 align-items-start rounded-3 border p-2" style={{ borderColor: "#f1f5f9" }}>
                  <div className="rounded-circle bg-secondary bg-opacity-25 text-body d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: 28, height: 28, fontSize: "10px", fontWeight: 600 }}>JT</div>
                  <p className="mb-0 small text-body">John Telc is managing the project and is in the office 6:30am-3pm M-F</p>
                </div>
              </div>
              <div className="pt-4 mt-4 border-top notes-chat-box" style={{ borderColor: "#f1f5f9" }}>
                <NotesChatBox />
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Schedule tab */}
      {d3Tab === "schedule" && (
        <div data-d3-content="schedule" className="design3-tab-schedule">
          <section className="card-saas p-4">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h2 className="small fw-semibold text-body mb-0" style={{ fontSize: "0.875rem" }}>Schedules</h2>
              <button type="button" className="btn btn-sm border rounded-3" style={{ borderColor: "#e2e8f0", fontSize: "0.75rem" }}>+ Schedule</button>
            </div>
            <div className="rounded-3 border p-2 d-flex align-items-center gap-2 small" style={{ borderColor: "rgba(59,130,246,0.3)", background: "rgba(59,130,246,0.05)" }}>
              <i className="bi bi-calendar3 text-primary flex-shrink-0" style={{ fontSize: "1rem" }} />
              <div className="flex-grow-1 min-w-0">
                <p className="fw-semibold text-body mb-0">Christopher Dee</p>
                <p className="text-secondary mb-0" style={{ fontSize: "0.75rem" }}>วันจันทร์ 10th, มี.ค. 2026 01:00pm</p>
              </div>
              <span className="badge rounded-pill text-white" style={{ background: "#0ea5e9", fontSize: "10px" }}>Set</span>
              <button type="button" className="btn btn-link p-0 text-secondary">✕</button>
            </div>
          </section>
          <section className="card-saas p-4">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h2 className="small fw-semibold text-body mb-0" style={{ fontSize: "0.875rem" }}>Assigner</h2>
              <button type="button" className="btn btn-sm border rounded-3" style={{ borderColor: "#e2e8f0", fontSize: "0.75rem" }}>+ Assigner</button>
            </div>
            <div className="rounded-3 border p-2 d-flex align-items-center gap-2 small" style={{ borderColor: "#f1f5f9" }}>
              <i className="bi bi-person-circle text-secondary flex-shrink-0" style={{ fontSize: "1.25rem" }} />
              <div className="flex-grow-1 min-w-0"><p className="fw-semibold text-body mb-0">Christopher Dee</p><p className="text-secondary mb-0 small">Sales Inspector</p></div>
              <button type="button" className="btn btn-link p-0 text-secondary"><i className="bi bi-three-dots-vertical" /></button>
            </div>
          </section>
        </div>
      )}

      {/* Measurement tab */}
      {d3Tab === "measurement" && (
        <div data-d3-content="measurement" className="design3-tab-measurement">
          <section className="card-saas p-4">
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
              <h2 className="small fw-semibold text-body mb-0" style={{ fontSize: "0.875rem" }}>Measurement</h2>
              <div className="d-flex gap-2">
                <button type="button" className="btn rounded-3 small" style={{ background: "#f1f5f9", color: "#334155" }}>Get Order</button>
                <button type="button" className="btn btn-primary-saas small">Order</button>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Estimates tab */}
      {d3Tab === "estimates" && (
        <div data-d3-content="estimates" className="design3-tab-estimates">
          <section className="card-saas p-4">
            <EstimatesSection />
          </section>
        </div>
      )}

      {/* Gallery tab */}
      {d3Tab === "gallery" && (
        <div data-d3-content="gallery" className="design3-tab-gallery">
          <section className="card-saas p-4">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <h2 className="small fw-semibold text-body mb-0" style={{ fontSize: "0.875rem" }}>Gallery</h2>
              <select className="form-select form-select-sm small rounded-3 border" style={{ width: "auto", fontSize: "0.75rem" }}>
                <option>Before Pics</option>
                <option>Production Pics</option>
                <option>After Pics</option>
                <option>Payments &amp; Warranty</option>
                <option>Contract</option>
                <option>Customer Files</option>
                <option>Others</option>
              </select>
            </div>
            <div className="row g-2">
              <div className="col-4"><GallerySlot /></div>
              <div className="col-4"><GallerySlot /></div>
              <div className="col-4"><GallerySlot /></div>
            </div>
          </section>
        </div>
      )}

      {/* Tasks tab */}
      {d3Tab === "tasks" && (
        <div data-d3-content="tasks" className="design3-tab-tasks">
          <section className="card-saas p-4">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <h2 className="small fw-semibold text-secondary text-uppercase mb-0" style={{ fontSize: "0.75rem" }}>Tasks</h2>
              <button type="button" className="btn btn-add-inline">+ Add</button>
            </div>
            <TasksList />
          </section>
        </div>
      )}

      {/* Communication tab: Call Logs + Activities cards */}
      {d3Tab === "communication" && (
        <div data-d3-content="communication" className="design3-tab-communication">
          <section className="card-saas p-4 overflow-hidden">
            <h2 className="small fw-semibold text-body mb-3" style={{ fontSize: "0.875rem" }}>Call Logs</h2>
            <div className="table-calllogs-wrap">
              <table className="table-calllogs">
                <thead><tr><th>Date</th><th>Direction</th><th>Summary</th></tr></thead>
                <tbody>
                  <tr><td>3/8/24 2:30 PM</td><td><span className="badge-dir-out">Outbound</span></td><td>Initial contact, set inspection</td></tr>
                  <tr><td>3/5/24 10:00 AM</td><td><span className="badge-dir-in">Inbound</span></td><td>Quote request</td></tr>
                </tbody>
              </table>
            </div>
          </section>
          <section className="card-saas p-4">
            <h2 className="small fw-semibold text-body mb-3" style={{ fontSize: "0.875rem" }}>Activities</h2>
            <ul className="list-unstyled small mb-0 border rounded-3 overflow-hidden" style={{ borderColor: "#f1f5f9" }}>
              <li className="py-3 px-4 border-bottom d-flex gap-3" style={{ borderColor: "#f8fafc" }}><span className="text-secondary fw-medium flex-shrink-0">3/9/24</span><span className="text-body">Estimate created</span></li>
              <li className="py-3 px-4 d-flex gap-3"><span className="text-secondary fw-medium flex-shrink-0">3/8/24</span><span className="text-body">Inspection scheduled</span></li>
            </ul>
          </section>
        </div>
      )}

      {/* Insurance tab */}
      {d3Tab === "insurance" && (
        <div data-d3-content="insurance" className="design3-tab-insurance">
          <section className="card-saas p-4">
            <h2 className="small fw-semibold text-body mb-2" style={{ fontSize: "0.875rem" }}>Insurance Detail</h2>
            <div className="small">
              <div><span className="text-secondary">Claim #</span><span className="ms-1 fw-medium text-body">CLM-2024-0892</span></div>
              <div><span className="text-secondary">Agency</span><span className="ms-1 fw-medium text-body">State Farm</span></div>
              <div><span className="text-secondary">Agent</span><span className="ms-1 fw-medium text-body">Jane Doe</span> (555) 987-6543</div>
              <div><span className="text-secondary">Note</span><span className="ms-1 text-body">Policy verified 3/1/24.</span></div>
            </div>
          </section>
          <section className="card-saas p-4">
            <h2 className="small fw-semibold text-body mb-2" style={{ fontSize: "0.875rem" }}>History</h2>
            <p className="small text-secondary mb-0">Created By Admin · Modified By Sales</p>
          </section>
        </div>
      )}

      {/* Checklist tab */}
      {d3Tab === "checklist" && (
        <div data-d3-content="checklist" className="design3-tab-checklist">
          <section className="card-saas p-4">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <h2 className="small fw-semibold text-body mb-0" style={{ fontSize: "0.875rem" }}>Checklist</h2>
              <button type="button" className="btn btn-add-inline">+ Add</button>
            </div>
            <div className="d-flex flex-wrap gap-2">
              <span className="badge bg-light text-body border rounded-3 small" style={{ padding: "0.375rem 0.75rem" }}>Email</span>
              <span className="badge bg-light text-body border rounded-3 small" style={{ padding: "0.375rem 0.75rem" }}>GIS</span>
            </div>
          </section>
          <section className="card-saas p-4">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <h2 className="small fw-semibold text-body mb-0" style={{ fontSize: "0.875rem" }}>Assigner</h2>
              <button type="button" className="btn btn-add-inline">+ Add</button>
            </div>
            <div className="d-flex align-items-start justify-content-between gap-3 pt-1">
              <div className="d-flex align-items-center gap-3">
                <div className="rounded-circle bg-secondary bg-opacity-25 text-body d-flex align-items-center justify-content-center flex-shrink-0 fw-semibold small" style={{ width: 40, height: 40 }}>RW</div>
                <div>
                  <p className="fw-semibold text-body mb-0">Ryan Wongli</p>
                  <p className="small text-secondary mb-0">Sales Inspector</p>
                </div>
              </div>
              <button type="button" className="btn btn-link p-1 text-secondary rounded-3"><i className="bi bi-three-dots-vertical" /></button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
