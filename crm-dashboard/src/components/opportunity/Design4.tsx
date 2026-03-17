"use client";

import { useState } from "react";
import NotesChatBox from "../shared/NotesChatBox";
import EstimatesSection from "../shared/EstimatesSection";
import GallerySlot from "../shared/GallerySlot";
import TasksList from "../shared/TasksList";
import ProjectCard from "./ProjectCard";

const D4_TABS = ["overview", "opportunity-info", "lead-referral", "notes", "schedule", "measurement", "estimates", "gallery", "tasks", "communication", "insurance", "checklist"] as const;

const D4_TAB_LABELS: Record<string, string> = {
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

export default function Design4() {
  const [d4Tab, setD4Tab] = useState<string>("overview");
  const [commView, setCommView] = useState<"calllogs4" | "activities4">("calllogs4");
  return (
    <div id="design4" data-layout-panel className="design4-wrap">
      <div className="design3-tabs-spacer">
        <section className="card-saas p-2">
          <div className="d-flex overflow-auto pb-1" style={{ gap: "0.375rem", scrollbarWidth: "thin" }}>
            {D4_TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                className={`d3-page-tab flex-shrink-0 ${d4Tab === tab ? "active" : ""}`}
                onClick={() => setD4Tab(tab)}
              >
                {D4_TAB_LABELS[tab] ?? tab}
              </button>
            ))}
          </div>
        </section>
      </div>

      {d4Tab === "overview" && (
      <div className="design4-grid">
        <div className="d4-col1">
          <section className="card-saas p-5">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h2 className="small fw-semibold text-body mb-0" style={{ fontSize: "0.875rem" }}>Opportunity Information</h2>
              <button type="button" className="btn btn-link btn-sm text-secondary p-0 small"><i className="bi bi-pencil me-1" />Edit</button>
            </div>
            <div className="row g-3 small">
              <div className="col-sm-6"><label className="text-secondary small d-block mb-0">Looking For</label><p className="fw-medium text-body mb-0 small">Full Roof Replacement</p></div>
              <div className="col-sm-6"><label className="text-secondary small d-block mb-0">Property Type</label><p className="fw-medium text-body mb-0 small">Residential</p></div>
              <div className="col-sm-6"><label className="text-secondary small d-block mb-0">Commercial</label><p className="fw-medium text-body mb-0 small">No</p></div>
            </div>
            <div className="mt-4 pt-4 border-top" style={{ borderColor: "#f1f5f9" }}>
              <h3 className="small fw-semibold text-secondary text-uppercase mb-2">Contacts</h3>
              <div className="row g-2 small">
                <div className="col-sm-6"><span className="text-secondary">Name</span><span className="ms-2 fw-medium text-body">John Smith</span></div>
                <div className="col-sm-6"><span className="text-secondary">Email</span><span className="ms-2 fw-medium text-body">john@example.com</span></div>
                <div className="col-sm-6"><span className="text-secondary">Phone</span><span className="ms-2 fw-medium text-body">(555) 123-4567</span></div>
                <div className="col-sm-6"><span className="text-secondary">Company</span><span className="ms-2 fw-medium text-body">Smith Properties LLC</span></div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-top" style={{ borderColor: "#f1f5f9" }}>
              <h3 className="small fw-semibold text-secondary text-uppercase mb-2">Address</h3>
              <div className="small">
                <div><span className="text-secondary">Billing</span><span className="ms-2 fw-medium text-body">123 Main St, City, ST 12345</span></div>
                <div><span className="text-secondary">Working</span><span className="ms-2 fw-medium text-body">123 Main St, City, ST 12345</span></div>
              </div>
            </div>
          </section>
          <section className="card-saas p-4 d4-lead-referral">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h2 className="small fw-semibold text-body mb-0" style={{ fontSize: "0.875rem" }}>Lead & Referral</h2>
              <button type="button" className="btn btn-add-inline">+ Add</button>
            </div>
            <div className="small d4-lead-referral-body">
              <div className="row g-3 mb-3">
                <div className="col-6">
                  <label className="text-secondary small d-block mb-0">Primary Source</label>
                  <p className="fw-medium text-body mb-0">Website</p>
                </div>
                <div className="col-6">
                  <label className="text-secondary small d-block mb-0">Secondary Source</label>
                  <p className="fw-medium text-secondary mb-0">—</p>
                </div>
              </div>
              <div className="pt-3 border-top" style={{ borderColor: "#f1f5f9" }}>
                <h3 className="small fw-semibold text-secondary text-uppercase mb-2">Referral Information</h3>
                <div className="row g-2 g-md-3">
                  <div className="col-6 col-md-6"><span className="text-secondary d-block small">First Name</span><span className="fw-medium text-body">Mike</span></div>
                  <div className="col-6 col-md-6"><span className="text-secondary d-block small">Last Name</span><span className="fw-medium text-body">Johnson</span></div>
                  <div className="col-6 col-md-6"><span className="text-secondary d-block small">Phone</span><span className="fw-medium text-body">(555) 234-5678</span></div>
                  <div className="col-6 col-md-6"><span className="text-secondary d-block small">Email</span><span className="fw-medium text-body">mike@referral.com</span></div>
                  <div className="col-12"><span className="text-secondary d-block small">Billing Address</span><span className="fw-medium text-body">456 Oak Ave, Town, ST 67890</span></div>
                </div>
              </div>
            </div>
          </section>
          <section className="card-saas p-4">
            <h2 className="small fw-semibold text-body mb-2" style={{ fontSize: "0.875rem" }}>Insurance Detail</h2>
            <div className="small">
              <div><span className="text-secondary">Claim #</span><span className="ms-1 fw-medium text-body">CLM-2024-0892</span></div>
              <div><span className="text-secondary">Agency</span><span className="ms-1 fw-medium text-body">State Farm</span></div>
              <div><span className="text-secondary">Agent</span><span className="ms-1 fw-medium text-body">Jane Doe</span> (555) 987-6543</div>
              <div><span className="text-secondary">Note</span><span className="ms-1 text-body">Policy verified 3/1/24.</span></div>
              <div className="pt-2 mt-2 border-top text-secondary" style={{ borderColor: "#f1f5f9", fontSize: "0.75rem" }}>Created By Admin · Modified By Sales</div>
            </div>
          </section>
          <section className="card-saas p-4">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <h2 className="small fw-semibold text-body mb-0" style={{ fontSize: "0.875rem" }}>Checklist</h2>
              <button type="button" className="btn btn-add-inline">+ Add</button>
            </div>
            <div className="d-flex flex-wrap gap-2">
              <span className="badge bg-light text-body border rounded-pill small" style={{ padding: "0.375rem 0.75rem" }}>Email</span>
              <span className="badge bg-light text-body border rounded-pill small" style={{ padding: "0.375rem 0.75rem" }}>GIS</span>
            </div>
          </section>
        </div>

        <div className="d4-col2">
          <section className="card-saas p-4">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <h2 className="small fw-semibold text-body mb-0" style={{ fontSize: "0.875rem" }}>Scheduling</h2>
              <button type="button" className="btn btn-add-inline">+ Add</button>
            </div>
            <div className="small mb-4">
              <div><span className="text-secondary d-block" style={{ fontSize: "0.75rem" }}>Appointment</span><p className="fw-medium text-body mb-0">Mar 15, 2024 · 9:00 AM</p></div>
              <div><span className="text-secondary d-block" style={{ fontSize: "0.75rem" }}>Assigner (Sales Inspector)</span><p className="fw-medium text-body mb-0">David Martinez</p></div>
            </div>
            <div className="pt-3 border-top" style={{ borderColor: "#f1f5f9" }}>
              <div className="d-flex align-items-center justify-content-between mb-2">
                <h3 className="small fw-semibold text-secondary text-uppercase mb-0">Assigner</h3>
                <button type="button" className="btn btn-add-inline">+ Add</button>
              </div>
              <div className="d-flex align-items-center justify-content-between gap-2">
                <div>
                  <p className="fw-semibold text-body mb-0 small">Ryan Wongli</p>
                  <p className="small text-secondary mb-0">Sales Inspector</p>
                </div>
                <button type="button" className="btn btn-link p-1 text-secondary rounded-3"><i className="bi bi-three-dots-vertical" /></button>
              </div>
            </div>
          </section>
          <section className="card-saas p-4">
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
              <h2 className="small fw-semibold text-body mb-0" style={{ fontSize: "0.875rem" }}>Measurement</h2>
              <div className="d-flex gap-2">
                <button type="button" className="btn rounded-3 small" style={{ background: "#f1f5f9", color: "#334155" }}>Get Order</button>
                <button type="button" className="btn btn-primary-saas small">Order</button>
              </div>
            </div>
          </section>
          <section className="card-saas p-4">
            <EstimatesSection />
          </section>
          <section className="card-saas p-4">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h2 className="small fw-semibold text-body mb-0" style={{ fontSize: "0.875rem" }}>Gallery</h2>
              <select className="form-select form-select-sm small rounded-3 border" style={{ width: "auto", fontSize: "0.75rem" }}>
                <option>Before Pics</option>
                <option>Production Pics</option>
                <option>After Pics</option>
              </select>
            </div>
            <div className="row g-2">
              {[1, 2, 3].map((i) => <div key={i} className="col-4"><GallerySlot /></div>)}
            </div>
          </section>
          <ProjectCard />
        </div>

        <div className="d4-col3">
          <section className="card-saas p-4 d-flex flex-column d4-notes-card">
            <h2 className="small fw-semibold text-body mb-3" style={{ fontSize: "0.875rem" }}>Notes</h2>
            <div className="d4-notes-feed flex-grow-1 min-h-0 overflow-auto">
              <div className="mb-3">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <h4 className="small fw-semibold text-body mb-0">GIS</h4>
                  <div className="d-flex gap-2 text-secondary">
                    <button type="button" className="btn btn-link p-1"><i className="bi bi-envelope" /></button>
                    <button type="button" className="btn btn-link p-1"><i className="bi bi-link-45deg" /></button>
                  </div>
                </div>
                <div className="d-flex gap-2 align-items-start">
                  <img src="https://i.pravatar.cc/150?u=charlotte" alt="" width={32} height={32} className="rounded-circle object-fit-cover border flex-shrink-0" style={{ borderColor: "#f1f5f9" }} />
                  <div className="flex-grow-1 min-w-0 rounded-3 p-2 small text-body" style={{ background: "#f8fafc", border: "1px solid #f1f5f9" }}>Corner lot, easy access.</div>
                  <button type="button" className="btn btn-link p-1 text-secondary"><i className="bi bi-three-dots-vertical" /></button>
                </div>
                <p className="small text-secondary mt-1 mb-0">Charlotte Farmer | 03/09/2026 12:36 PM</p>
              </div>
              <div className="border-top pt-3" style={{ borderColor: "#f1f5f9" }}>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <h4 className="small fw-semibold text-body mb-0">Appointment Center</h4>
                  <button type="button" className="btn btn-link p-1 text-secondary"><i className="bi bi-envelope" /></button>
                </div>
                <div className="d-flex gap-2 align-items-start">
                  <img src="https://i.pravatar.cc/150?u=john" alt="" width={32} height={32} className="rounded-circle object-fit-cover border flex-shrink-0" style={{ borderColor: "#f1f5f9" }} />
                  <div className="flex-grow-1 min-w-0 rounded-3 p-2 small text-body" style={{ background: "#f8fafc", border: "1px solid #f1f5f9" }}>John Telc managing project M-F 6:30am-3pm</div>
                  <button type="button" className="btn btn-link p-1 text-secondary"><i className="bi bi-three-dots-vertical" /></button>
                </div>
              </div>
            </div>
            <NotesChatBox />
          </section>
          <section className="card-saas p-4">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <h2 className="small fw-semibold text-secondary text-uppercase mb-0" style={{ fontSize: "0.75rem" }}>Tasks</h2>
              <button type="button" className="btn btn-add-inline">+ Add</button>
            </div>
            <TasksList />
          </section>
          <section className="card-saas p-0 overflow-hidden">
            <h2 className="small fw-semibold text-body mb-3 px-4 pt-4" style={{ fontSize: "0.875rem" }}>Communication & History</h2>
            <div className="d-flex border-bottom px-4 design3-comm-tabs" style={{ borderColor: "#f1f5f9" }}>
              <button type="button" className={`inner-tab border-0 px-3 py-2 small fw-medium ${commView === "calllogs4" ? "inner-tab-active" : ""}`} onClick={() => setCommView("calllogs4")}>Call Logs</button>
              <button type="button" className={`inner-tab border-0 px-3 py-2 small fw-medium ${commView === "activities4" ? "inner-tab-active" : ""}`} onClick={() => setCommView("activities4")}>Activities</button>
            </div>
            {commView === "calllogs4" && (
              <div className="px-4 py-3">
                <div className="table-calllogs-wrap">
                  <table className="table-calllogs table-calllogs-compact">
                    <thead><tr><th>Date</th><th>Dir.</th><th>Summary</th></tr></thead>
                    <tbody>
                      <tr><td>3/8/24 2:30 PM</td><td><span className="badge-dir-out">Out</span></td><td>Initial contact</td></tr>
                      <tr><td>3/5/24 10:00 AM</td><td><span className="badge-dir-in">In</span></td><td>Quote request</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            {commView === "activities4" && (
              <div className="px-4 py-3">
                <ul className="list-unstyled small mb-0 border rounded-3 overflow-hidden" style={{ borderColor: "#f1f5f9" }}>
                  <li className="py-3 px-4 border-bottom d-flex gap-3" style={{ borderColor: "#f8fafc" }}><span className="text-secondary fw-medium flex-shrink-0">3/9/24</span><span className="text-body">Estimate created</span></li>
                  <li className="py-3 px-4 d-flex gap-3"><span className="text-secondary fw-medium flex-shrink-0">3/8/24</span><span className="text-body">Inspection scheduled</span></li>
                </ul>
              </div>
            )}
          </section>
        </div>
      </div>
      )}

      {/* Opportunity Info tab */}
      {d4Tab === "opportunity-info" && (
        <div data-d4-content="opportunity-info" className="design4-tab-grid">
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
      {d4Tab === "lead-referral" && (
        <div data-d4-content="lead-referral" className="design4-tab-lead-referral">
          <section className="card-saas p-4">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <h2 className="small fw-semibold text-body mb-0" style={{ fontSize: "0.875rem" }}>Lead & Referral</h2>
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
              <div className="row g-2 g-md-3">
                <div className="col-6 col-md-6"><span className="text-secondary d-block small">First Name</span><span className="fw-medium text-body">Mike</span></div>
                <div className="col-6 col-md-6"><span className="text-secondary d-block small">Last Name</span><span className="fw-medium text-body">Johnson</span></div>
                <div className="col-6 col-md-6"><span className="text-secondary d-block small">Phone</span><span className="fw-medium text-body">(555) 234-5678</span></div>
                <div className="col-6 col-md-6"><span className="text-secondary d-block small">Email</span><span className="fw-medium text-body">mike@referral.com</span></div>
                <div className="col-12"><span className="text-secondary d-block small">Billing Address</span><span className="fw-medium text-body">456 Oak Ave, Town, ST 67890</span></div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Notes tab */}
      {d4Tab === "notes" && (
        <div data-d4-content="notes" className="design4-tab-notes">
          <section className="card-saas p-4 d-flex flex-column">
            <h2 className="small fw-semibold text-body mb-3" style={{ fontSize: "0.875rem" }}>Notes</h2>
            <div className="mb-3">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <h4 className="small fw-semibold text-body mb-0">GIS</h4>
                <div className="d-flex gap-2 text-secondary">
                  <button type="button" className="btn btn-link p-1"><i className="bi bi-envelope" /></button>
                  <button type="button" className="btn btn-link p-1"><i className="bi bi-link-45deg" /></button>
                </div>
              </div>
              <div className="d-flex gap-2 align-items-start">
                <img src="https://i.pravatar.cc/150?u=charlotte" alt="" width={32} height={32} className="rounded-circle object-fit-cover border flex-shrink-0" style={{ borderColor: "#f1f5f9" }} />
                <div className="flex-grow-1 min-w-0 rounded-3 p-2 small text-body" style={{ background: "#f8fafc", border: "1px solid #f1f5f9" }}>Corner lot, easy access.</div>
                <button type="button" className="btn btn-link p-1 text-secondary"><i className="bi bi-three-dots-vertical" /></button>
              </div>
              <p className="small text-secondary mt-1 mb-0">Charlotte Farmer | 03/09/2026 12:36 PM</p>
            </div>
            <div className="border-top pt-3" style={{ borderColor: "#f1f5f9" }}>
              <div className="d-flex align-items-center justify-content-between mb-2">
                <h4 className="small fw-semibold text-body mb-0">Appointment Center</h4>
                <button type="button" className="btn btn-link p-1 text-secondary"><i className="bi bi-envelope" /></button>
              </div>
              <div className="d-flex gap-2 align-items-start">
                <img src="https://i.pravatar.cc/150?u=john" alt="" width={32} height={32} className="rounded-circle object-fit-cover border flex-shrink-0" style={{ borderColor: "#f1f5f9" }} />
                <div className="flex-grow-1 min-w-0 rounded-3 p-2 small text-body" style={{ background: "#f8fafc", border: "1px solid #f1f5f9" }}>John Telc managing project M-F 6:30am-3pm</div>
                <button type="button" className="btn btn-link p-1 text-secondary"><i className="bi bi-three-dots-vertical" /></button>
              </div>
            </div>
            <div className="mt-4 pt-3 border-top" style={{ borderColor: "#f1f5f9" }}>
              <NotesChatBox />
            </div>
          </section>
        </div>
      )}

      {/* Schedule tab */}
      {d4Tab === "schedule" && (
        <div data-d4-content="schedule" className="design4-tab-schedule">
          <section className="card-saas p-4">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <h2 className="small fw-semibold text-body mb-0" style={{ fontSize: "0.875rem" }}>Scheduling</h2>
              <button type="button" className="btn btn-add-inline">+ Add</button>
            </div>
            <div className="small mb-4">
              <div><span className="text-secondary d-block" style={{ fontSize: "0.75rem" }}>Appointment</span><p className="fw-medium text-body mb-0">Mar 15, 2024 · 9:00 AM</p></div>
              <div><span className="text-secondary d-block" style={{ fontSize: "0.75rem" }}>Assigner (Sales Inspector)</span><p className="fw-medium text-body mb-0">David Martinez</p></div>
            </div>
            <div className="pt-3 border-top" style={{ borderColor: "#f1f5f9" }}>
              <div className="d-flex align-items-center justify-content-between mb-2">
                <h3 className="small fw-semibold text-secondary text-uppercase mb-0">Assigner</h3>
                <button type="button" className="btn btn-add-inline">+ Add</button>
              </div>
              <div className="d-flex align-items-center justify-content-between gap-2">
                <div>
                  <p className="fw-semibold text-body mb-0 small">Ryan Wongli</p>
                  <p className="small text-secondary mb-0">Sales Inspector</p>
                </div>
                <button type="button" className="btn btn-link p-1 text-secondary rounded-3"><i className="bi bi-three-dots-vertical" /></button>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Measurement tab */}
      {d4Tab === "measurement" && (
        <div data-d4-content="measurement" className="design4-tab-measurement">
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
      {d4Tab === "estimates" && (
        <div data-d4-content="estimates" className="design4-tab-estimates">
          <section className="card-saas p-4">
            <EstimatesSection />
          </section>
        </div>
      )}

      {/* Gallery tab */}
      {d4Tab === "gallery" && (
        <div data-d4-content="gallery" className="design4-tab-gallery">
          <section className="card-saas p-4">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h2 className="small fw-semibold text-body mb-0" style={{ fontSize: "0.875rem" }}>Gallery</h2>
              <select className="form-select form-select-sm small rounded-3 border" style={{ width: "auto", fontSize: "0.75rem" }}>
                <option>Before Pics</option>
                <option>Production Pics</option>
                <option>After Pics</option>
              </select>
            </div>
            <div className="row g-2">
              {[1, 2, 3, 4, 5, 6].map((i) => <div key={i} className="col-4 col-md-3"><GallerySlot /></div>)}
            </div>
          </section>
        </div>
      )}

      {/* Tasks tab */}
      {d4Tab === "tasks" && (
        <div data-d4-content="tasks" className="design4-tab-tasks">
          <section className="card-saas p-4">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <h2 className="small fw-semibold text-secondary text-uppercase mb-0" style={{ fontSize: "0.75rem" }}>Tasks</h2>
              <button type="button" className="btn btn-add-inline">+ Add</button>
            </div>
            <TasksList />
          </section>
        </div>
      )}

      {/* Communication tab */}
      {d4Tab === "communication" && (
        <div data-d4-content="communication" className="design4-tab-communication">
          <section className="card-saas p-0 overflow-hidden">
            <h2 className="small fw-semibold text-body mb-3 px-4 pt-4" style={{ fontSize: "0.875rem" }}>Communication & History</h2>
            <div className="d-flex border-bottom px-4 design3-comm-tabs" style={{ borderColor: "#f1f5f9" }}>
              <button type="button" className={`inner-tab border-0 px-3 py-2 small fw-medium ${commView === "calllogs4" ? "inner-tab-active" : ""}`} onClick={() => setCommView("calllogs4")}>Call Logs</button>
              <button type="button" className={`inner-tab border-0 px-3 py-2 small fw-medium ${commView === "activities4" ? "inner-tab-active" : ""}`} onClick={() => setCommView("activities4")}>Activities</button>
            </div>
            {commView === "calllogs4" && (
              <div className="px-4 py-3">
                <div className="table-calllogs-wrap">
                  <table className="table-calllogs table-calllogs-compact">
                    <thead><tr><th>Date</th><th>Dir.</th><th>Summary</th></tr></thead>
                    <tbody>
                      <tr><td>3/8/24 2:30 PM</td><td><span className="badge-dir-out">Out</span></td><td>Initial contact</td></tr>
                      <tr><td>3/5/24 10:00 AM</td><td><span className="badge-dir-in">In</span></td><td>Quote request</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            {commView === "activities4" && (
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

      {/* Insurance tab */}
      {d4Tab === "insurance" && (
        <div data-d4-content="insurance" className="design4-tab-insurance">
          <section className="card-saas p-4">
            <h2 className="small fw-semibold text-body mb-2" style={{ fontSize: "0.875rem" }}>Insurance Detail</h2>
            <div className="small">
              <div><span className="text-secondary">Claim #</span><span className="ms-1 fw-medium text-body">CLM-2024-0892</span></div>
              <div><span className="text-secondary">Agency</span><span className="ms-1 fw-medium text-body">State Farm</span></div>
              <div><span className="text-secondary">Agent</span><span className="ms-1 fw-medium text-body">Jane Doe</span> (555) 987-6543</div>
              <div><span className="text-secondary">Note</span><span className="ms-1 text-body">Policy verified 3/1/24.</span></div>
              <div className="pt-2 mt-2 border-top text-secondary" style={{ borderColor: "#f1f5f9", fontSize: "0.75rem" }}>Created By Admin · Modified By Sales</div>
            </div>
          </section>
        </div>
      )}

      {/* Checklist tab */}
      {d4Tab === "checklist" && (
        <div data-d4-content="checklist" className="design4-tab-checklist">
          <section className="card-saas p-4">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <h2 className="small fw-semibold text-body mb-0" style={{ fontSize: "0.875rem" }}>Checklist</h2>
              <button type="button" className="btn btn-add-inline">+ Add</button>
            </div>
            <div className="d-flex flex-wrap gap-2">
              <span className="badge bg-light text-body border rounded-pill small" style={{ padding: "0.375rem 0.75rem" }}>Email</span>
              <span className="badge bg-light text-body border rounded-pill small" style={{ padding: "0.375rem 0.75rem" }}>GIS</span>
            </div>
          </section>
          <section className="card-saas p-4">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <h2 className="small fw-semibold text-body mb-0" style={{ fontSize: "0.875rem" }}>Assigner</h2>
              <button type="button" className="btn btn-add-inline">+ Add</button>
            </div>
            <div className="d-flex align-items-center justify-content-between gap-2">
              <div>
                <p className="fw-semibold text-body mb-0 small">Ryan Wongli</p>
                <p className="small text-secondary mb-0">Sales Inspector</p>
              </div>
              <button type="button" className="btn btn-link p-1 text-secondary rounded-3"><i className="bi bi-three-dots-vertical" /></button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
