"use client";

import { useState } from "react";
import NotesChatBox from "../shared/NotesChatBox";
import EstimatesSection from "../shared/EstimatesSection";
import GallerySlot from "../shared/GallerySlot";
import TasksList from "../shared/TasksList";
import ProjectCard from "./ProjectCard";

export default function Design2() {
  const [innerView, setInnerView] = useState<"calllogs2" | "activities2">("calllogs2");

  return (
    <div id="design2" data-layout-panel className="d-flex flex-column flex-grow-1 min-h-0">
      <div className="design2-wrap min-w-0 flex-grow-1">
        <div className="design2-main min-w-0">
          {/* 1. Opportunity Information - full width */}
          <section className="card-d2 span-full" data-section-empty="false">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h2 className="small fw-semibold text-body mb-0" style={{ fontSize: "0.875rem" }}>Opportunity Information</h2>
              <button type="button" className="btn btn-link btn-sm text-secondary p-0 small"><i className="bi bi-pencil me-1" style={{ fontSize: "0.875rem" }} />Edit</button>
            </div>
            <div className="row g-3">
              <div className="col-6"><label className="text-secondary small d-block mb-0" style={{ fontSize: "0.75rem" }}>Looking For</label><p className="small fw-medium text-body mb-0">Full Roof Replacement</p></div>
              <div className="col-6"><label className="text-secondary small d-block mb-0" style={{ fontSize: "0.75rem" }}>Property Type</label><p className="small fw-medium text-body mb-0">Residential</p></div>
              <div className="col-6"><label className="text-secondary small d-block mb-0" style={{ fontSize: "0.75rem" }}>Commercial</label><p className="small fw-medium text-body mb-0">No</p></div>
            </div>
            <div className="mt-4 pt-4 border-top" style={{ borderColor: "#f1f5f9" }}>
              <h3 className="small fw-semibold text-secondary text-uppercase mb-2">Contacts</h3>
              <div className="row g-2 small">
                <div className="col-6"><span className="text-secondary">Name</span><span className="ms-2 fw-medium text-body">John Smith</span></div>
                <div className="col-6"><span className="text-secondary">Email</span><span className="ms-2 fw-medium text-body">john@example.com</span></div>
                <div className="col-6"><span className="text-secondary">Phone</span><span className="ms-2 fw-medium text-body">(555) 123-4567</span></div>
                <div className="col-6"><span className="text-secondary">Company</span><span className="ms-2 fw-medium text-body">Smith Properties LLC</span></div>
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

          {/* 2. Lead & Referral - span 2 */}
          <section className="card-d2 span-2" data-section-empty="false">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h2 className="small fw-semibold text-body mb-0" style={{ fontSize: "0.875rem" }}>Lead & Referral</h2>
              <button type="button" className="btn btn-add-inline">+ Add</button>
            </div>
            <div className="small">
              <div><label className="text-secondary small d-block mb-0">Primary Source</label><p className="fw-medium text-body mb-0">Website</p></div>
              <div><label className="text-secondary small d-block mb-0">Secondary Source</label><p className="fw-medium text-secondary mb-0">—</p></div>
              <div className="pt-2 mt-2 border-top" style={{ borderColor: "#f1f5f9" }}>
                <h3 className="small fw-semibold text-secondary text-uppercase mb-1">Referral</h3>
                <div className="small"><div><span className="text-secondary">Name</span> Mike Johnson</div><div><span className="text-secondary">Phone</span> (555) 234-5678</div><div><span className="text-secondary">Email</span> mike@referral.com</div></div>
              </div>
            </div>
          </section>

          {/* 3. Notes - span 2, flex column */}
          <section className="card-d2 span-2 d-flex flex-column" data-section-empty="false">
            <h2 className="small fw-semibold text-body mb-3" style={{ fontSize: "0.875rem" }}>Notes</h2>
            <div className="notes-feed-d2 flex-grow-1 min-h-0 overflow-auto">
              <div className="note-entry-d2 mb-3">
                <div className="note-entry-d2__head d-flex justify-content-between align-items-center mb-2">
                  <span className="note-entry-d2__label">GIS</span>
                  <div className="note-entry-d2__icons d-flex gap-2"><i className="bi bi-envelope" /><i className="bi bi-link-45deg" /></div>
                </div>
                <div className="note-entry-d2__row d-flex align-items-start gap-2">
                  <img src="https://i.pravatar.cc/150?u=charlotte" alt="" width={32} height={32} className="rounded-circle object-fit-cover flex-shrink-0" />
                  <div className="note-entry-d2__bubble flex-grow-1">Corner lot, easy access.</div>
                  <button type="button" className="note-entry-d2__menu btn btn-link p-1 text-secondary"><i className="bi bi-three-dots-vertical" /></button>
                </div>
                <div className="note-entry-d2__meta small text-secondary mt-1 ms-4">Charlotte Farmer | 03/09/2026 12:36 PM</div>
              </div>
            </div>
            <NotesChatBox />
          </section>

          {/* 4–7. Row 3: Scheduling, Measurement, Estimates, Gallery - grid 4 cols */}
          <div className="row-3">
            <section className="card-d2" data-section-empty="false">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <h2 className="small fw-semibold text-body mb-0" style={{ fontSize: "0.875rem" }}>Scheduling</h2>
                <button type="button" className="btn btn-add-inline">+ Add</button>
              </div>
              <div className="small">
                <div><span className="text-secondary d-block" style={{ fontSize: "0.75rem" }}>Appointment</span><p className="fw-medium text-body mb-0">Mar 15, 2024 · 9:00 AM</p></div>
                <div><span className="text-secondary d-block" style={{ fontSize: "0.75rem" }}>Assigner</span><p className="fw-medium text-body mb-0">David Martinez</p></div>
              </div>
            </section>
            <section className="card-d2" data-section-empty="false">
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                <h2 className="small fw-semibold text-body mb-0" style={{ fontSize: "0.875rem" }}>Measurement</h2>
                <div className="d-flex gap-2">
                  <button type="button" className="btn btn-sm rounded-3" style={{ background: "#f1f5f9", color: "#334155", fontSize: "0.75rem" }}>Get Order</button>
                  <button type="button" className="btn btn-primary-saas" style={{ fontSize: "0.75rem" }}>Order</button>
                </div>
              </div>
            </section>
            <section className="card-d2" data-section-empty="false">
              <EstimatesSection />
            </section>
            <section className="card-d2" data-section-empty="false">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h2 className="small fw-semibold text-body mb-0" style={{ fontSize: "0.875rem" }}>Gallery</h2>
                <select className="form-select form-select-sm small rounded-3 border" style={{ width: "auto", fontSize: "0.75rem" }}>
                  <option>Before Pics</option>
                  <option>Production Pics</option>
                  <option>After Pics</option>
                </select>
              </div>
              <div className="design2-gallery-grid">
                <GallerySlot />
                <GallerySlot />
                <GallerySlot />
              </div>
            </section>
          </div>
          <div className="design2-row-4">
            <ProjectCard />
          </div>
        </div>

        <aside className="design2-sidebar min-w-0">
          <section className="card-d2 d-flex flex-column">
            <div className="d-flex align-items-center justify-content-between mb-2 flex-shrink-0">
              <h2 className="small fw-semibold text-secondary text-uppercase mb-0" style={{ fontSize: "0.75rem" }}>Tasks</h2>
              <button type="button" className="btn btn-add-inline">+ Add</button>
            </div>
            <div className="min-h-0 flex-grow-1 overflow-auto">
              <TasksList />
            </div>
          </section>
          <section className="card-d2">
            <h2 className="small fw-semibold text-body mb-3" style={{ fontSize: "0.875rem" }}>Communication & History</h2>
            <div className="d-flex gap-1 rounded-3 p-1 mb-3 flex-wrap" style={{ background: "var(--surface-100)" }}>
              <button type="button" className={`btn btn-sm flex-grow-1 rounded-2 ${innerView === "calllogs2" ? "btn-primary" : "bg-white border-0"}`} style={{ fontSize: "0.75rem" }} onClick={() => setInnerView("calllogs2")}>Call Logs</button>
              <button type="button" className={`btn btn-sm flex-grow-1 rounded-2 ${innerView === "activities2" ? "btn-primary" : "bg-white border-0"}`} style={{ fontSize: "0.75rem" }} onClick={() => setInnerView("activities2")}>Activities</button>
            </div>
            {innerView === "calllogs2" && (
              <div className="table-calllogs-wrap">
                <table className="table-calllogs table-calllogs-compact">
                  <thead><tr><th>Date</th><th>Dir.</th><th>Summary</th></tr></thead>
                  <tbody>
                    <tr><td>3/8/24 2:30 PM</td><td><span className="badge-dir-out">Out</span></td><td>Initial contact</td></tr>
                    <tr><td>3/5/24 10:00 AM</td><td><span className="badge-dir-in">In</span></td><td>Quote request</td></tr>
                  </tbody>
                </table>
              </div>
            )}
            {innerView === "activities2" && (
              <ul className="list-unstyled small mb-0 border rounded-3 overflow-hidden" style={{ borderColor: "#f1f5f9" }}>
                <li className="py-2 px-3 border-bottom d-flex gap-2" style={{ borderColor: "#f8fafc" }}><span className="text-secondary fw-medium flex-shrink-0">3/9/24</span><span className="text-body">Estimate created</span></li>
                <li className="py-2 px-3 d-flex gap-2"><span className="text-secondary fw-medium flex-shrink-0">3/8/24</span><span className="text-body">Inspection scheduled</span></li>
              </ul>
            )}
          </section>
          <section className="card-d2">
            <h2 className="small fw-semibold text-body mb-2" style={{ fontSize: "0.875rem" }}>Insurance Detail</h2>
            <div className="small">
              <div><span className="text-secondary">Claim #</span><span className="ms-1 fw-medium text-body">CLM-2024-0892</span></div>
              <div><span className="text-secondary">Agency</span><span className="ms-1 fw-medium text-body">State Farm</span></div>
              <div><span className="text-secondary">Agent</span><span className="ms-1 fw-medium text-body">Jane Doe</span> (555) 987-6543</div>
              <div className="pt-2 mt-2 border-top text-secondary" style={{ borderColor: "#f1f5f9", fontSize: "0.75rem" }}>Created By Admin · Modified By Sales</div>
            </div>
          </section>
          <section className="card-d2">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <h2 className="small fw-semibold text-body mb-0" style={{ fontSize: "0.875rem" }}>Checklist</h2>
              <button type="button" className="btn btn-add-inline">+ Add</button>
            </div>
            <div className="d-flex flex-wrap gap-1 mb-3">
              <span className="badge bg-light text-body border rounded-pill" style={{ fontSize: "0.75rem" }}>Email</span>
              <span className="badge bg-light text-body border rounded-pill" style={{ fontSize: "0.75rem" }}>GIS</span>
            </div>
            <div className="pt-3 border-top" style={{ borderColor: "#f1f5f9" }}>
              <h2 className="small fw-semibold text-body mb-2" style={{ fontSize: "0.875rem" }}>Assigner</h2>
              <div className="d-flex align-items-start justify-content-between gap-2">
                <div>
                  <p className="fw-semibold text-body mb-0 small">Ryan Wongli</p>
                  <p className="small text-secondary mb-0">Sales Inspector</p>
                </div>
                <button type="button" className="btn btn-link p-1 text-secondary"><i className="bi bi-three-dots-vertical" /></button>
              </div>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
