"use client";

import { useState } from "react";

type SettingsSection =
  | "company"
  | "locations"
  | "departments"
  | "zipcodes"
  | "integrations"
  | "email"
  | "payment-obligations";

const TABS: { id: SettingsSection; label: string; icon: string }[] = [
  { id: "company", label: "Company Info", icon: "bi-building" },
  { id: "locations", label: "Locations", icon: "bi-geo-alt" },
  { id: "departments", label: "Departments", icon: "bi-diagram-3" },
  { id: "zipcodes", label: "Zipcodes", icon: "bi-upc" },
  { id: "integrations", label: "Integrations", icon: "bi-puzzle" },
  { id: "email", label: "Email", icon: "bi-envelope" },
  { id: "payment-obligations", label: "Payment Obligations", icon: "bi-credit-card" },
];

export default function SettingsDesign2() {
  const [section, setSection] = useState<SettingsSection>("company");

  return (
    <div id="settings-design2" data-settings-panel className="settings-d2-root">
      <div className="settings-d2-header">
        <h1 className="settings-d2-title">Company Info</h1>
        <p className="settings-d2-subtitle">Manage your system configuration and preferences</p>
      </div>
      <div className="settings-d2-tabs-wrap d-flex border-bottom px-4 design3-comm-tabs">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`inner-tab border-0 px-3 py-2 small fw-medium settings-d2-tab ${section === tab.id ? "inner-tab-active active" : ""}`}
            onClick={() => setSection(tab.id)}
          >
            <i className={`bi ${tab.icon}`} aria-hidden />
            {tab.label}
          </button>
        ))}
      </div>

      {section === "company" && (
        <>
          <div data-d2-content="company" className="settings-d2-company-wrap">
            <section className="settings-d2-card">
              <h3 className="settings-d2-card-title">Company Info</h3>
              <div className="settings-d2-space-y-4">
                <div className="settings-d2-logo-row">
                  <label className="settings-d2-logo-box">
                    <input type="file" accept="image/*" className="visually-hidden" aria-hidden />
                    <span>Logo</span>
                  </label>
                  <div className="settings-d2-fields-col">
                    <div>
                      <label className="settings-d2-label">Company Logo URL</label>
                      <input type="url" className="settings-d2-input" />
                    </div>
                    <div>
                      <label className="settings-d2-label">Company Name</label>
                      <input type="text" className="settings-d2-input" />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="settings-d2-label">Website</label>
                  <input type="url" className="settings-d2-input" />
                </div>
                <div>
                  <label className="settings-d2-label">Phone Number</label>
                  <input type="tel" className="settings-d2-input" />
                </div>
              </div>
            </section>
            <section className="settings-d2-card">
              <h3 className="settings-d2-card-title">Address</h3>
              <div className="settings-d2-space-y-4">
                <div>
                  <label className="settings-d2-label">Address</label>
                  <input type="text" className="settings-d2-input" />
                </div>
                <div className="settings-d2-grid-2">
                  <div>
                    <label className="settings-d2-label">City</label>
                    <input type="text" className="settings-d2-input" />
                  </div>
                  <div>
                    <label className="settings-d2-label">State</label>
                    <input type="text" className="settings-d2-input" />
                  </div>
                </div>
                <div>
                  <label className="settings-d2-label">Postal Code</label>
                  <input type="text" className="settings-d2-input" />
                </div>
              </div>
            </section>
          </div>
          <div className="settings-d2-save-row">
            <button type="button" className="settings-d2-btn-primary">Save changes</button>
          </div>
        </>
      )}

      {section === "locations" && (<div data-d2-content="locations"><section className="settings-d2-card"><h2 className="h5 fw-bold mb-4" style={{ color: "var(--settings-text)" }}>Locations</h2><div className="table-responsive"><table className="table table-sm small"><thead className="table-light"><tr><th className="fw-semibold">Branch ID</th><th className="fw-semibold">Branch Name</th><th className="fw-semibold">Code</th><th className="fw-semibold">Address</th><th className="fw-semibold">City</th><th className="fw-semibold">State</th><th className="fw-semibold">Zip</th><th className="fw-semibold">Status</th><th className="fw-semibold">Actions</th></tr></thead><tbody><tr><td>CB0001</td><td>Klaus Larsen Roofing LLC</td><td>CTNWH</td><td>29 Northridge Drive</td><td>North Windham</td><td>CT</td><td>06256</td><td><span className="badge bg-success">Active</span></td><td><button type="button" className="btn btn-link btn-sm p-0 me-2" style={{ color: "var(--settings-primary)" }}>Edit</button><button type="button" className="btn btn-link btn-sm p-0 text-danger">Delete</button></td></tr></tbody></table></div></section></div>)}

      {section === "departments" && (<div data-d2-content="departments"><section className="settings-d2-card"><div className="d-flex justify-content-between mb-4"><h2 className="h5 fw-bold mb-0" style={{ color: "var(--settings-text)" }}>Departments</h2><button type="button" className="btn btn-primary-saas">Add New</button></div><div className="table-responsive"><table className="table table-sm small"><thead className="table-light"><tr><th className="fw-semibold">ID</th><th className="fw-semibold">Name</th><th className="fw-semibold">Status</th><th className="fw-semibold">Actions</th></tr></thead><tbody><tr><td>ED0002</td><td>Accounting</td><td><span className="badge bg-success">Active</span></td><td><button type="button" className="btn btn-link btn-sm p-0 me-2" style={{ color: "var(--settings-primary)" }}>Edit</button><button type="button" className="btn btn-link btn-sm p-0 text-danger">Delete</button></td></tr></tbody></table></div></section></div>)}

      {section === "zipcodes" && (<div data-d2-content="zipcodes"><section className="settings-d2-card"><h2 className="h5 fw-bold mb-4" style={{ color: "var(--settings-text)" }}>Zipcodes</h2><div className="d-flex gap-2 mb-4"><input type="search" placeholder="Search zipcode..." className="form-control form-control-sm" style={{ maxWidth: 280, borderColor: "var(--settings-border)" }} /><button type="button" className="btn btn-sm btn-outline-secondary">Clear</button></div><div className="table-responsive"><table className="table table-sm small"><thead className="table-light"><tr><th className="fw-semibold">Branch ID</th><th className="fw-semibold">County</th><th className="fw-semibold">City</th><th className="fw-semibold">State</th><th className="fw-semibold">Zip</th><th className="fw-semibold">Tax Total</th></tr></thead><tbody><tr><td>CB0001</td><td>Fairfield</td><td>Bridgeport</td><td>CT</td><td>06601</td><td>0.0635</td></tr></tbody></table></div></section></div>)}

      {section === "integrations" && (<div data-d2-content="integrations"><section className="settings-d2-card"><div className="d-flex justify-content-between mb-4"><h2 className="h6 fw-bold mb-0" style={{ color: "var(--settings-text)" }}>FileMaker Configurations</h2><button type="button" className="btn btn-primary-saas">+ Add Configuration</button></div><div className="table-responsive"><table className="table table-sm small"><thead className="table-light"><tr><th className="fw-semibold">ID</th><th className="fw-semibold">Server URL</th><th className="fw-semibold">Username</th><th className="fw-semibold">Database</th><th className="fw-semibold">Status</th><th className="fw-semibold">Actions</th></tr></thead><tbody><tr><td>1</td><td>klauslarsen.app</td><td>jim.t@klauslarsen.com</td><td>KLroofing</td><td><span className="badge bg-success">Active</span></td><td><button type="button" className="btn btn-link btn-sm p-0" style={{ color: "var(--settings-primary)" }}>Edit</button><button type="button" className="btn btn-link btn-sm p-0 text-danger">Delete</button></td></tr></tbody></table></div></section></div>)}

      {section === "email" && (<div data-d2-content="email"><section className="settings-d2-card"><h2 className="h6 fw-bold mb-4" style={{ color: "var(--settings-text)" }}>Supervisor</h2><div className="row g-3"><div className="col-12 col-sm-6"><label className="form-label small mb-1" style={{ color: "var(--settings-text-secondary)" }}>Accounting Manager Email</label><input type="email" defaultValue="jim.t@klauslarsen.com" className="form-control form-control-sm" style={{ borderColor: "var(--settings-border)" }} /></div><div className="col-12 col-sm-6"><label className="form-label small mb-1" style={{ color: "var(--settings-text-secondary)" }}>IT Manager Email</label><input type="email" defaultValue="jim.t@klauslarsen.com" className="form-control form-control-sm" style={{ borderColor: "var(--settings-border)" }} /></div><div className="col-12 col-sm-6"><label className="form-label small mb-1" style={{ color: "var(--settings-text-secondary)" }}>Appointment Manager Email</label><input type="email" defaultValue="charlotte.f@klauslarsen.com" className="form-control form-control-sm" style={{ borderColor: "var(--settings-border)" }} /></div><div className="col-12 col-sm-6"><label className="form-label small mb-1" style={{ color: "var(--settings-text-secondary)" }}>Marketing Manager Email</label><input type="email" defaultValue="stephanie.c@klauslarsen.com" className="form-control form-control-sm" style={{ borderColor: "var(--settings-border)" }} /></div></div><div className="mt-4"><button type="button" className="btn btn-sm text-white" style={{ background: "var(--settings-primary)" }}>Update</button></div></section></div>)}

      {section === "payment-obligations" && (
        <div data-d2-content="payment-obligations">
          <section className="settings-d2-card">
            <h2 className="h5 fw-bold mb-1" style={{ color: "var(--settings-text)" }}>Payment Obligations</h2>
            <p className="small mb-4" style={{ color: "var(--settings-text-secondary)" }}>Configure payment milestones and percentage allocations</p>
            <div className="row g-3 mb-4">
              <div className="col-4">
                <div className="settings-po-card">
                  <span className="settings-po-label">Total Obligations</span>
                  <span className="settings-po-value">4</span>
                </div>
              </div>
              <div className="col-4">
                <div className="settings-po-card">
                  <span className="settings-po-label">Active</span>
                  <span className="settings-po-value">2</span>
                </div>
              </div>
              <div className="col-4">
                <div className="settings-po-card">
                  <span className="settings-po-label">Total Allocation</span>
                  <span className="settings-po-value text-success">100%</span>
                </div>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-sm small">
                <thead className="table-light">
                  <tr>
                    <th className="fw-semibold">#</th>
                    <th className="fw-semibold">Obligation Name</th>
                    <th className="fw-semibold">Amount (%)</th>
                    <th className="fw-semibold">Status</th>
                    <th className="fw-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>First Payment</td>
                    <td><span className="settings-po-amount">30%</span></td>
                    <td><span className="settings-po-status-active">active</span></td>
                    <td>
                      <button type="button" className="btn btn-link btn-sm p-0 me-2" style={{ color: "var(--settings-primary)" }}>Edit</button>
                      <button type="button" className="btn btn-link btn-sm p-0 text-danger">Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Project Start</td>
                    <td><span className="settings-po-amount">10%</span></td>
                    <td><span className="settings-po-status-inactive">inactive</span></td>
                    <td>
                      <button type="button" className="btn btn-link btn-sm p-0 me-2" style={{ color: "var(--settings-primary)" }}>Edit</button>
                      <button type="button" className="btn btn-link btn-sm p-0 text-danger">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="d-flex justify-content-end align-items-center gap-2 mt-4 pt-4 border-top" style={{ borderColor: "var(--settings-border)" }}>
              <span className="small" style={{ color: "var(--settings-text-secondary)" }}>Total Active Allocation:</span>
              <span className="settings-po-footer-badge">100%</span>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
