"use client";

import { useState } from "react";

type AccordionId = "company" | "operational" | "locations" | "departments" | "zipcodes" | "integrations" | "email" | "payment-obligations";

export default function SettingsDesign3() {
  const [openId, setOpenId] = useState<AccordionId | null>("company");

  const toggle = (id: AccordionId) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div id="settings-design3" data-settings-panel className="settings-d3-root">
      <div className="settings-d3-header">
        <h1 className="settings-d3-title">Company Info</h1>
        <p className="settings-d3-subtitle">Manage your system configuration and preferences</p>
      </div>

      <section className="settings-d3-section">
        <button type="button" className="settings-d3-accordion-btn" onClick={() => toggle("company")} aria-expanded={openId === "company"}>
          <span>Company Settings</span>
          <svg className="settings-d3-chevron" style={{ transform: openId === "company" ? "rotate(180deg)" : undefined }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </button>
        <div className={`settings-d3-accordion-body ${openId !== "company" ? "collapsed" : ""}`}>
          <div className="settings-d3-company-inner">
            <div className="settings-d3-company-row">
              <label className="settings-d3-logo-box">
                <input type="file" accept="image/*" className="visually-hidden" aria-hidden />
                <span>Company Logo</span>
              </label>
              <div className="settings-d3-company-fields">
                <div className="settings-d3-field-full">
                  <label className="settings-d3-label">Company Logo URL</label>
                  <input type="url" className="settings-d3-input" />
                </div>
                <div>
                  <label className="settings-d3-label">Company Name</label>
                  <input type="text" className="settings-d3-input" />
                </div>
                <div>
                  <label className="settings-d3-label">Website</label>
                  <input type="url" className="settings-d3-input" />
                </div>
                <div>
                  <label className="settings-d3-label">Phone Number</label>
                  <input type="tel" className="settings-d3-input" />
                </div>
                <div className="settings-d3-field-full">
                  <label className="settings-d3-label">Address</label>
                  <input type="text" className="settings-d3-input" />
                </div>
                <div>
                  <label className="settings-d3-label">City</label>
                  <input type="text" className="settings-d3-input" />
                </div>
                <div>
                  <label className="settings-d3-label">State</label>
                  <input type="text" className="settings-d3-input" />
                </div>
                <div>
                  <label className="settings-d3-label">Postal Code</label>
                  <input type="text" className="settings-d3-input" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="settings-d3-section">
        <button type="button" className="settings-d3-accordion-btn" onClick={() => toggle("operational")} aria-expanded={openId === "operational"}>
          <span>Operational Timelines</span>
          <svg className="settings-d3-chevron" style={{ transform: openId === "operational" ? "rotate(180deg)" : undefined }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </button>
        <div className={`settings-d3-accordion-body ${openId !== "operational" ? "collapsed" : ""}`}>
          <div className="settings-d3-body-inner">
            <div className="row g-3">
              <div className="col-12 col-sm-6"><label className="form-label small mb-1" style={{ color: "var(--settings-text-secondary)" }}>Contract Expiration (Days)</label><input type="number" className="form-control form-control-sm" style={{ borderColor: "var(--settings-border)" }} /></div>
              <div className="col-12 col-sm-6"><label className="form-label small mb-1" style={{ color: "var(--settings-text-secondary)" }}>Production Start (Days)</label><input type="number" className="form-control form-control-sm" style={{ borderColor: "var(--settings-border)" }} /></div>
              <div className="col-12 col-sm-6"><label className="form-label small mb-1" style={{ color: "var(--settings-text-secondary)" }}>Production End (Days)</label><input type="number" className="form-control form-control-sm" style={{ borderColor: "var(--settings-border)" }} /></div>
              <div className="col-12 col-sm-6"><label className="form-label small mb-1" style={{ color: "var(--settings-text-secondary)" }}>Hunter Days</label><input type="number" className="form-control form-control-sm" style={{ borderColor: "var(--settings-border)" }} /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="settings-d3-section">
        <button type="button" className="settings-d3-accordion-btn" onClick={() => toggle("locations")} aria-expanded={openId === "locations"}>
          <span>Locations</span>
          <svg className="settings-d3-chevron" style={{ transform: openId === "locations" ? "rotate(180deg)" : undefined }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </button>
        <div className={`settings-d3-accordion-body ${openId !== "locations" ? "collapsed" : ""}`}>
          <div className="settings-d3-body-inner">
            <div className="table-responsive">
              <table className="table table-sm table-hover small">
                <thead className="table-light"><tr><th className="fw-semibold">Branch ID</th><th className="fw-semibold">Branch Name</th><th className="fw-semibold">Code</th><th className="fw-semibold">Address</th><th className="fw-semibold">City</th><th className="fw-semibold">State</th><th className="fw-semibold">Zip</th><th className="fw-semibold">Status</th><th className="fw-semibold">Actions</th></tr></thead>
                <tbody><tr><td>CB0001</td><td>Klaus Larsen Roofing LLC</td><td>CTNWH</td><td>29 Northridge Drive</td><td>North Windham</td><td>CT</td><td>06256</td><td><span className="badge bg-success">Active</span></td><td><button type="button" className="btn btn-link btn-sm p-0 me-2" style={{ color: "var(--settings-primary)" }}>Edit</button><button type="button" className="btn btn-link btn-sm p-0 text-danger">Delete</button></td></tr></tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="settings-d3-section">
        <button type="button" className="settings-d3-accordion-btn" onClick={() => toggle("departments")} aria-expanded={openId === "departments"}>
          <span>Departments</span>
          <svg className="settings-d3-chevron" style={{ transform: openId === "departments" ? "rotate(180deg)" : undefined }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </button>
        <div className={`settings-d3-accordion-body ${openId !== "departments" ? "collapsed" : ""}`}>
          <div className="settings-d3-body-inner">
            <div className="d-flex justify-content-between mb-4"><h3 className="h6 fw-bold mb-0" style={{ color: "var(--settings-text)" }}>Departments</h3><button type="button" className="btn btn-primary-saas">Add New</button></div>
            <div className="table-responsive">
              <table className="table table-sm table-hover small">
                <thead className="table-light"><tr><th className="fw-semibold">ID</th><th className="fw-semibold">Name</th><th className="fw-semibold">Status</th><th className="fw-semibold">Actions</th></tr></thead>
                <tbody><tr><td>ED0002</td><td>Accounting</td><td><span className="badge bg-success">Active</span></td><td><button type="button" className="btn btn-link btn-sm p-0 me-2" style={{ color: "var(--settings-primary)" }}>Edit</button><button type="button" className="btn btn-link btn-sm p-0 text-danger">Delete</button></td></tr><tr><td>ED0003</td><td>Marketing</td><td><span className="badge bg-success">Active</span></td><td><button type="button" className="btn btn-link btn-sm p-0 me-2" style={{ color: "var(--settings-primary)" }}>Edit</button><button type="button" className="btn btn-link btn-sm p-0 text-danger">Delete</button></td></tr></tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="settings-d3-section">
        <button type="button" className="settings-d3-accordion-btn" onClick={() => toggle("zipcodes")} aria-expanded={openId === "zipcodes"}>
          <span>Zipcodes</span>
          <svg className="settings-d3-chevron" style={{ transform: openId === "zipcodes" ? "rotate(180deg)" : undefined }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </button>
        <div className={`settings-d3-accordion-body ${openId !== "zipcodes" ? "collapsed" : ""}`}>
          <div className="settings-d3-body-inner">
            <div className="d-flex gap-2 mb-4"><input type="search" placeholder="Search zipcode..." className="form-control form-control-sm" style={{ maxWidth: 280, borderColor: "var(--settings-border)" }} /><button type="button" className="btn btn-sm btn-outline-secondary">Clear</button></div>
            <div className="table-responsive">
              <table className="table table-sm table-hover small">
                <thead className="table-light"><tr><th className="fw-semibold">Branch ID</th><th className="fw-semibold">County</th><th className="fw-semibold">City</th><th className="fw-semibold">State</th><th className="fw-semibold">Zip</th><th className="fw-semibold">Tax Total</th></tr></thead>
                <tbody><tr><td>CB0001</td><td>Fairfield</td><td>Bridgeport</td><td>CT</td><td>06601</td><td>0.0635</td></tr></tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="settings-d3-section">
        <button type="button" className="settings-d3-accordion-btn" onClick={() => toggle("integrations")} aria-expanded={openId === "integrations"}>
          <span>Integrations</span>
          <svg className="settings-d3-chevron" style={{ transform: openId === "integrations" ? "rotate(180deg)" : undefined }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </button>
        <div className={`settings-d3-accordion-body ${openId !== "integrations" ? "collapsed" : ""}`}>
          <div className="settings-d3-body-inner">
            <div className="d-flex justify-content-end mb-4"><button type="button" className="btn btn-primary-saas">+ Add Configuration</button></div>
            <div className="table-responsive">
              <table className="table table-sm table-hover small">
                <thead className="table-light"><tr><th className="fw-semibold">ID</th><th className="fw-semibold">Server URL</th><th className="fw-semibold">Username</th><th className="fw-semibold">Database</th><th className="fw-semibold">Status</th><th className="fw-semibold">Actions</th></tr></thead>
                <tbody><tr><td>1</td><td>klauslarsen.app</td><td>jim.t@klauslarsen.com</td><td>KLroofing</td><td><span className="badge bg-success">Active</span></td><td><button type="button" className="btn btn-link btn-sm p-0" style={{ color: "var(--settings-primary)" }}>Edit</button><button type="button" className="btn btn-link btn-sm p-0 text-danger">Delete</button></td></tr></tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="settings-d3-section">
        <button type="button" className="settings-d3-accordion-btn" onClick={() => toggle("email")} aria-expanded={openId === "email"}>
          <span>Email</span>
          <svg className="settings-d3-chevron" style={{ transform: openId === "email" ? "rotate(180deg)" : undefined }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </button>
        <div className={`settings-d3-accordion-body ${openId !== "email" ? "collapsed" : ""}`}>
          <div className="settings-d3-body-inner">
            <h3 className="h6 fw-semibold mb-4" style={{ color: "var(--settings-text)" }}>Supervisor</h3>
            <div className="row g-3"><div className="col-12 col-sm-6"><label className="form-label small mb-1" style={{ color: "var(--settings-text-secondary)" }}>Accounting Manager Email</label><input type="email" defaultValue="jim.t@klauslarsen.com" className="form-control form-control-sm" style={{ borderColor: "var(--settings-border)" }} /></div><div className="col-12 col-sm-6"><label className="form-label small mb-1" style={{ color: "var(--settings-text-secondary)" }}>IT Manager Email</label><input type="email" defaultValue="jim.t@klauslarsen.com" className="form-control form-control-sm" style={{ borderColor: "var(--settings-border)" }} /></div><div className="col-12 col-sm-6"><label className="form-label small mb-1" style={{ color: "var(--settings-text-secondary)" }}>Appointment Manager Email</label><input type="email" defaultValue="charlotte.f@klauslarsen.com" className="form-control form-control-sm" style={{ borderColor: "var(--settings-border)" }} /></div><div className="col-12 col-sm-6"><label className="form-label small mb-1" style={{ color: "var(--settings-text-secondary)" }}>Marketing Manager Email</label><input type="email" defaultValue="stephanie.c@klauslarsen.com" className="form-control form-control-sm" style={{ borderColor: "var(--settings-border)" }} /></div></div>
            <div className="mt-4"><button type="button" className="btn btn-sm text-white" style={{ background: "var(--settings-primary)" }}>Update</button></div>
          </div>
        </div>
      </section>

      <section className="settings-d3-section">
        <button type="button" className="settings-d3-accordion-btn" onClick={() => toggle("payment-obligations")} aria-expanded={openId === "payment-obligations"}>
          <span>Payment Obligations</span>
          <svg className="settings-d3-chevron" style={{ transform: openId === "payment-obligations" ? "rotate(180deg)" : undefined }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </button>
        <div className={`settings-d3-accordion-body ${openId !== "payment-obligations" ? "collapsed" : ""}`}>
          <div className="settings-d3-body-inner">
            <p className="small mb-4" style={{ color: "var(--settings-text-secondary)" }}>Configure payment milestones and percentage allocations</p>
            <div className="row g-3 mb-4">
              <div className="col-12 col-md-4">
                <div className="settings-po-card">
                  <span className="settings-po-label">Total Obligations</span>
                  <span className="settings-po-value">4</span>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="settings-po-card">
                  <span className="settings-po-label">Active</span>
                  <span className="settings-po-value">2</span>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="settings-po-card">
                  <span className="settings-po-label">Total Allocation</span>
                  <span className="settings-po-value text-success">100%</span>
                </div>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-sm table-hover small">
                <thead className="table-light">
                  <tr><th className="fw-semibold">#</th><th className="fw-semibold">Obligation Name</th><th className="fw-semibold">Amount (%)</th><th className="fw-semibold">Status</th><th className="fw-semibold">Actions</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td><td>First Payment</td>
                    <td><span className="settings-po-amount">30%</span></td>
                    <td><span className="settings-po-status-active">active</span></td>
                    <td><button type="button" className="btn btn-link btn-sm p-0 me-1" style={{ color: "var(--settings-primary)" }}>Edit</button><button type="button" className="btn btn-link btn-sm p-0 text-danger">Delete</button></td>
                  </tr>
                  <tr>
                    <td>2</td><td>Project Start</td>
                    <td><span className="settings-po-amount">10%</span></td>
                    <td><span className="settings-po-status-inactive">inactive</span></td>
                    <td><button type="button" className="btn btn-link btn-sm p-0 me-1" style={{ color: "var(--settings-primary)" }}>Edit</button><button type="button" className="btn btn-link btn-sm p-0 text-danger">Delete</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="d-flex justify-content-end align-items-center gap-2 mt-4 pt-4 border-top" style={{ borderColor: "var(--settings-border)" }}>
              <span className="small" style={{ color: "var(--settings-text-secondary)" }}>Total Active Allocation:</span>
              <span className="settings-po-footer-badge">100%</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
