"use client";

import { useState } from "react";
import NotesChatBox from "../shared/NotesChatBox";
import EstimatesSection from "../shared/EstimatesSection";
import GallerySlot from "../shared/GallerySlot";
import TasksList from "../shared/TasksList";
import ProjectCard from "./ProjectCard";

export default function Design1() {
  const [innerView, setInnerView] = useState<"calllogs" | "activities">("calllogs");

  return (
    <div id="design1" data-layout-panel>
      <div className="dashboard-grid">
        {/* 1. Opportunity Information */}
        <section
          className="card-saas p-5 col-span-2 d1-r1"
          data-section-empty="false"
        >
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h2 className="small fw-semibold text-body mb-0" style={{ fontSize: "0.875rem" }}>Opportunity Information</h2>
            <button type="button" className="btn btn-link btn-sm text-secondary p-0 small"><i className="bi bi-pencil me-1" />Edit</button>
          </div>
          <div className="row g-3">
            <div className="col-12 col-sm-6">
              <label className="form-label small text-secondary mb-0">Looking For</label>
              <p className="small fw-medium text-body mb-0">Full Roof Replacement</p>
            </div>
            <div className="col-12 col-sm-6">
              <label className="form-label small text-secondary mb-0">Property Type</label>
              <p className="small fw-medium text-body mb-0">Residential</p>
            </div>
            <div className="col-12 col-sm-6">
              <label className="form-label small text-secondary mb-0">Commercial</label>
              <p className="small fw-medium text-body mb-0">No</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-top" style={{ borderColor: "#f1f5f9" }}>
            <h3 className="small fw-semibold text-secondary text-uppercase tracking-wide mb-2">Contacts</h3>
            <div className="row g-2 small">
              <div className="col-12 col-sm-6"><span className="text-secondary">Name</span><span className="ms-2 fw-medium text-body">John Smith</span></div>
              <div className="col-12 col-sm-6"><span className="text-secondary">Email</span><span className="ms-2 fw-medium text-body">john@example.com</span></div>
              <div className="col-12 col-sm-6"><span className="text-secondary">Phone</span><span className="ms-2 fw-medium text-body">(555) 123-4567</span></div>
              <div className="col-12 col-sm-6"><span className="text-secondary">Company</span><span className="ms-2 fw-medium text-body">Smith Properties LLC</span></div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-top" style={{ borderColor: "#f1f5f9" }}>
            <h3 className="small fw-semibold text-secondary text-uppercase tracking-wide mb-2">Address</h3>
            <div className="small">
              <div><span className="text-secondary">Billing</span><span className="ms-2 fw-medium text-body">123 Main St, City, ST 12345</span></div>
              <div><span className="text-secondary">Working</span><span className="ms-2 fw-medium text-body">123 Main St, City, ST 12345</span></div>
            </div>
          </div>
        </section>

        {/* 2. Lead & Referral */}
        <section className="card-saas p-4 d-flex flex-column d1-r1" data-section-empty="false">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h2 className="small fw-semibold text-body mb-0" style={{ fontSize: "0.875rem" }}>Lead & Referral</h2>
            <button type="button" className="btn btn-add-inline">+ Add</button>
          </div>
          <div className="small">
            <div><label className="text-secondary small mb-0">Primary Source</label><p className="fw-medium text-body mb-0">Website</p></div>
            <div><label className="text-secondary small mb-0">Secondary Source</label><p className="fw-medium text-secondary mb-0">—</p></div>
            <div className="pt-2 mt-2 border-top" style={{ borderColor: "#f1f5f9" }}>
              <h3 className="small fw-semibold text-secondary text-uppercase mb-1">Referral Information</h3>
              <div className="small"><div><span className="text-secondary">First Name</span> Mike</div><div><span className="text-secondary">Last Name</span> Johnson</div><div><span className="text-secondary">Phone</span> (555) 234-5678</div><div><span className="text-secondary">Email</span> mike@referral.com</div><div><span className="text-secondary">Billing Address</span> 456 Oak Ave, Town, ST 67890</div></div>
            </div>
          </div>
        </section>

        {/* 3. Notes */}
        <section className="card-saas p-4 d-flex flex-column d1-r1" data-section-empty="false">
          <h2 className="small fw-semibold text-body mb-3" style={{ fontSize: "0.875rem" }}>Notes</h2>
          <div className="flex-grow-1 min-h-0 overflow-auto">
            <div className="mb-3">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <h4 className="small fw-semibold text-body mb-0">GIS</h4>
                <div className="d-flex gap-2 text-secondary">
                  <button type="button" className="btn btn-link p-0"><i className="bi bi-envelope" /></button>
                  <button type="button" className="btn btn-link p-0"><i className="bi bi-link-45deg" /></button>
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
            <div className="pt-3" style={{ borderTop: "1px solid #f1f5f9" }}>
              <div className="d-flex align-items-center justify-content-between mb-2">
                <h4 className="small fw-semibold text-body mb-0">Appointment Center</h4>
                <button type="button" className="btn btn-link p-0 text-secondary"><i className="bi bi-envelope" /></button>
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

        {/* 4. Scheduling */}
        <section className="card-saas p-4 d1-r2" data-section-empty="false" style={{ minHeight: 140 }}>
          <div className="d-flex align-items-center justify-content-between mb-2">
            <h2 className="h6 fw-semibold text-body mb-0">Scheduling</h2>
            <button type="button" className="btn btn-add-inline">+ Add</button>
          </div>
          <div className="small">
            <div><span className="text-secondary small">Appointment</span><p className="fw-medium text-body mb-0">Mar 15, 2024 · 9:00 AM</p></div>
            <div><span className="text-secondary small">Assigner (Sales Inspector)</span><p className="fw-medium text-body mb-0">David Martinez</p></div>
          </div>
        </section>

        {/* 5. Measurement */}
        <section className="card-saas p-4 d1-r2" data-section-empty="false" style={{ minHeight: 140 }}>
          <div className="d-flex align-items-center justify-content-between">
            <h2 className="h6 fw-semibold text-body mb-0">Measurement</h2>
            <div className="d-flex gap-3">
              <button type="button" className="btn btn-light text-body">Get Order</button>
              <button type="button" className="btn btn-primary-saas">Order</button>
            </div>
          </div>
        </section>

        {/* 6. Estimates */}
        <section className="card-saas p-4 d1-r2" data-section-empty="false" style={{ minHeight: 140 }}>
          <EstimatesSection />
        </section>

        {/* 7. Gallery */}
        <section className="card-saas p-4 d1-r2" data-section-empty="false" style={{ minHeight: 140 }}>
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h2 className="h6 fw-semibold text-body mb-0">Gallery</h2>
            <select className="form-select form-select-sm small" style={{ width: "auto" }}>
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
            {[1, 2, 3].map((i) => (
              <div key={i} className="col-4">
                <GallerySlot />
              </div>
            ))}
          </div>
        </section>

        {/* Project — Job / Service tabs */}
        <div className="col-span-4 d1-r2b">
          <ProjectCard />
        </div>

        {/* Tasks — original: card-saas p-5 h-full */}
        <div className="col-span-2 d1-r3">
          <section className="card-saas p-5 h-100" data-section-empty="false">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <h2 className="small fw-semibold text-secondary text-uppercase mb-0">Tasks</h2>
              <button type="button" className="btn btn-add-inline">+ Add</button>
            </div>
            <TasksList />
          </section>
        </div>

        {/* Communication & History — original: card-saas p-5 col-span-2 */}
        <section className="card-saas p-5 col-span-2 d1-r3" data-section-empty="false">
          <h2 className="h6 fw-semibold text-body mb-3">Communication & History</h2>
          <div className="d-flex gap-1 rounded-3 p-1 mb-3" style={{ background: "var(--surface-200)", width: "fit-content" }}>
            <button
              type="button"
              className={`inner-tab px-3 py-2 rounded-2 small fw-medium border-0 ${innerView === "calllogs" ? "inner-tab-active" : "text-secondary"}`}
              onClick={() => setInnerView("calllogs")}
            >
              Call Logs
            </button>
            <button
              type="button"
              className={`inner-tab px-3 py-2 rounded-2 small fw-medium border-0 ${innerView === "activities" ? "inner-tab-active" : "text-secondary"}`}
              onClick={() => setInnerView("activities")}
            >
              Activities
            </button>
          </div>
          {innerView === "calllogs" && (
            <div className="table-calllogs-wrap">
              <table className="table-calllogs">
                <thead><tr><th>Date</th><th>Direction</th><th>Summary</th></tr></thead>
                <tbody>
                  <tr><td>3/8/24 2:30 PM</td><td><span className="badge-dir-out">Outbound</span></td><td>Initial contact, set inspection</td></tr>
                  <tr><td>3/5/24 10:00 AM</td><td><span className="badge-dir-in">Inbound</span></td><td>Quote request</td></tr>
                </tbody>
              </table>
            </div>
          )}
          {innerView === "activities" && (
            <ul className="list-unstyled mb-0 border rounded-3 overflow-hidden small">
              <li className="d-flex gap-3 py-3 px-3 border-bottom hover-bg-light"><span className="text-secondary fw-medium flex-shrink-0">3/9/24</span><span className="text-body">Estimate created</span></li>
              <li className="d-flex gap-3 py-3 px-3 hover-bg-light"><span className="text-secondary fw-medium flex-shrink-0">3/8/24</span><span className="text-body">Inspection scheduled</span></li>
            </ul>
          )}
        </section>

        {/* Insurance Detail + Checklist */}
        <div className="col-span-4 d1-r4">
          <div className="row g-4 d1-insurance-checklist-row">
            <div className="col-12 col-md-6 d-flex">
              <section className="card-saas p-4 flex-grow-1 d-flex flex-column" data-section-empty="false">
                <h2 className="h6 fw-semibold text-body mb-2">Insurance Detail</h2>
                <div className="small">
                  <div><span className="text-secondary">Claim #</span><span className="ms-1 fw-medium text-body">CLM-2024-0892</span></div>
                  <div><span className="text-secondary">Agency</span><span className="ms-1 fw-medium text-body">State Farm</span></div>
                  <div><span className="text-secondary">Agent</span><span className="ms-1 fw-medium text-body">Jane Doe</span> (555) 987-6543</div>
                  <div><span className="text-secondary">Note</span><span className="ms-1 text-secondary">Policy verified 3/1/24.</span></div>
                  <div className="pt-2 mt-2 border-top small text-secondary">Created By Admin · Modified By Sales</div>
                </div>
              </section>
            </div>
            <div className="col-12 col-md-6 d-flex">
              <section className="card-saas p-4 flex-grow-1 d-flex flex-column" data-section-empty="false">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <h2 className="h6 fw-semibold text-body mb-0">Checklist</h2>
                  <button type="button" className="btn btn-add-inline">+ Add</button>
                </div>
                <div className="d-flex flex-wrap gap-2 mb-4">
                  <span className="badge bg-light text-body border">Email</span>
                  <span className="badge bg-light text-body border">GIS</span>
                </div>
                <div className="pt-3 border-top">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <h2 className="h6 fw-semibold text-body mb-0">Assigner</h2>
                    <button type="button" className="btn btn-add-inline">+ Add</button>
                  </div>
                  <div className="d-flex align-items-start justify-content-between gap-3">
                    <div>
                      <p className="fw-semibold text-body mb-0">Ryan Wongli</p>
                      <p className="small text-secondary mt-0">Sales Inspector</p>
                    </div>
                    <button type="button" className="btn btn-link p-1 text-secondary" aria-label="More"><i className="bi bi-three-dots-vertical" /></button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
