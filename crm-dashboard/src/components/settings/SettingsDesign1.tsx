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

const NAV_ITEMS: { id: SettingsSection; label: string; icon: string }[] = [
  { id: "company", label: "Company Info", icon: "bi-building" },
  { id: "locations", label: "Locations", icon: "bi-geo-alt" },
  { id: "departments", label: "Departments", icon: "bi-diagram-3" },
  { id: "zipcodes", label: "Zipcodes", icon: "bi-upc" },
  { id: "integrations", label: "Integrations", icon: "bi-puzzle" },
  { id: "email", label: "Email", icon: "bi-envelope" },
  { id: "payment-obligations", label: "Payment Obligations", icon: "bi-credit-card" },
];

export default function SettingsDesign1() {
  const [section, setSection] = useState<SettingsSection>("company");

  return (
    <div id="settings-design1" data-settings-panel className="settings-d1-root">
      {/* old: mb-6 = 1.5rem */}
      <div className="settings-d1-header" style={{ marginBottom: "1.5rem" }}>
        <h1 className="fw-bold mb-1" style={{ color: "var(--settings-text)", fontSize: "1.25rem" }}>Company Info</h1>
        <p className="mb-0" style={{ color: "var(--settings-text-secondary)", fontSize: "0.875rem", marginTop: "0.125rem" }}>Manage your system configuration and preferences</p>
      </div>
      {/* old: grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-6 */}
      <div className="settings-design1-grid">
        {/* old: aside.settings-card.p-4.h-fit */}
        <aside className="settings-d1-aside">
          <nav className="settings-d1-nav" role="tablist">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`settings-nav-item ${section === item.id ? "active" : ""}`}
                data-settings-section={item.id}
                onClick={() => setSection(item.id)}
              >
                <i className={`bi ${item.icon}`} aria-hidden />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>
        <div className="min-w-0">
          {section === "company" && (
            /* old: data-settings-content="company" class="space-y-6" */
            <div data-settings-content="company" className="settings-d1-company-wrap">
              {/* old: section.settings-card.p-6 */}
              <section className="settings-card settings-d1-section">
                <h2 className="settings-d1-section-title">Company Settings</h2>
                {/* old: grid grid-cols-1 sm:grid-cols-2 gap-4 */}
                <div className="settings-d1-form-grid">
                  {/* old: sm:col-span-2 flex items-start gap-4 */}
                  <div className="settings-d1-form-row settings-d1-form-row-span">
                    <label className="settings-d1-logo-box" aria-label="Upload logo">
                      <input type="file" accept="image/*" className="visually-hidden" />
                      <span>Logo</span>
                    </label>
                    <div className="settings-d1-logo-fields">
                      <div className="settings-d1-field">
                        <label>Company Logo URL</label>
                        <input type="url" placeholder="https://..." className="form-control settings-d1-input" style={{ borderColor: "var(--settings-border)" }} />
                      </div>
                      <div className="settings-d1-field">
                        <label>Company Name</label>
                        <input type="text" placeholder="Company name" className="form-control settings-d1-input" style={{ borderColor: "var(--settings-border)" }} />
                      </div>
                    </div>
                  </div>
                  <div className="settings-d1-form-cell">
                    <label>Website</label>
                    <input type="url" className="form-control settings-d1-input" style={{ borderColor: "var(--settings-border)" }} />
                  </div>
                  <div className="settings-d1-form-cell">
                    <label>Phone Number</label>
                    <input type="tel" className="form-control settings-d1-input" style={{ borderColor: "var(--settings-border)" }} />
                  </div>
                  <div className="settings-d1-form-cell settings-d1-form-cell-full">
                    <label>Address</label>
                    <input type="text" className="form-control settings-d1-input" style={{ borderColor: "var(--settings-border)" }} />
                  </div>
                  <div className="settings-d1-form-cell">
                    <label>City</label>
                    <input type="text" className="form-control settings-d1-input" style={{ borderColor: "var(--settings-border)" }} />
                  </div>
                  <div className="settings-d1-form-cell">
                    <label>State</label>
                    <input type="text" className="form-control settings-d1-input" style={{ borderColor: "var(--settings-border)" }} />
                  </div>
                  <div className="settings-d1-form-cell">
                    <label>Postal Code</label>
                    <input type="text" className="form-control settings-d1-input" style={{ borderColor: "var(--settings-border)" }} />
                  </div>
                </div>
              </section>
              <section className="settings-card settings-d1-section">
                <h2 className="settings-d1-section-title">Operational Timelines</h2>
                <div className="settings-d1-form-grid">
                  <div className="settings-d1-form-cell">
                    <label>Contract Expiration (Days)</label>
                    <input type="number" className="form-control settings-d1-input" style={{ borderColor: "var(--settings-border)" }} />
                  </div>
                  <div className="settings-d1-form-cell">
                    <label>Production Start (Days)</label>
                    <input type="number" className="form-control settings-d1-input" style={{ borderColor: "var(--settings-border)" }} />
                  </div>
                  <div className="settings-d1-form-cell">
                    <label>Production End (Days)</label>
                    <input type="number" className="form-control settings-d1-input" style={{ borderColor: "var(--settings-border)" }} />
                  </div>
                  <div className="settings-d1-form-cell">
                    <label>Hunter Days</label>
                    <input type="number" className="form-control settings-d1-input" style={{ borderColor: "var(--settings-border)" }} />
                  </div>
                </div>
              </section>
              <div className="settings-d1-actions">
                <button type="button" className="btn btn-primary-saas">Save changes</button>
              </div>
            </div>
          )}
          {section === "locations" && (
            <div data-settings-content="locations" className="settings-d1-tab-wrap">
              <section className="settings-card settings-d1-section">
                <h2 className="settings-d1-section-title settings-d1-section-title-lg">Locations</h2>
                <div className="table-responsive">
                  <table className="table table-sm settings-d1-table">
                    <thead><tr><th>Branch ID</th><th>Branch Name</th><th>Branch Code</th><th>Address</th><th>City</th><th>State</th><th>Zip</th><th>Website</th><th>Status</th><th>Actions</th></tr></thead>
                    <tbody>
                      <tr><td>CB0001</td><td>Klaus Larsen Roofing LLC</td><td>CTNWH</td><td>29 Northridge Drive</td><td>North Windham</td><td>CT</td><td>06256</td><td>www.klauslarsen.com</td><td><span className="badge bg-success">Active</span></td><td><button type="button" className="btn btn-link btn-sm p-0 me-2 settings-d1-table-link">Edit</button><button type="button" className="btn btn-link btn-sm p-0 text-danger">Delete</button></td></tr>
                      <tr><td>CB0002</td><td>Klaus Larsen Roofing of Hudson Valley</td><td>NYHVN</td><td>—</td><td>—</td><td>NY</td><td>—</td><td>—</td><td><span className="badge bg-success">Active</span></td><td><button type="button" className="btn btn-link btn-sm p-0 me-2 settings-d1-table-link">Edit</button><button type="button" className="btn btn-link btn-sm p-0 text-danger">Delete</button></td></tr>
                      <tr><td>CB0003</td><td>Klaus Larsen Roofing of Columbus</td><td>OHCLB</td><td>—</td><td>—</td><td>OH</td><td>—</td><td>—</td><td><span className="badge bg-danger">Inactive</span></td><td><button type="button" className="btn btn-link btn-sm p-0 me-2 settings-d1-table-link">Edit</button><button type="button" className="btn btn-link btn-sm p-0 text-danger">Delete</button></td></tr>
                      <tr><td>CB0004</td><td>Klaus Larsen Roofing of Boston</td><td>BOSMA</td><td>Boston</td><td>Boston</td><td>MA</td><td>—</td><td>—</td><td><span className="badge bg-danger">Inactive</span></td><td><button type="button" className="btn btn-link btn-sm p-0 me-2 settings-d1-table-link">Edit</button><button type="button" className="btn btn-link btn-sm p-0 text-danger">Delete</button></td></tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          )}
          {section === "departments" && (
            <div data-settings-content="departments" className="settings-d1-tab-wrap">
              <section className="settings-card settings-d1-section">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h2 className="settings-d1-section-title settings-d1-section-title-lg mb-0">Departments</h2>
                  <button type="button" className="btn btn-primary-saas">Add New</button>
                </div>
                <div className="table-responsive">
                  <table className="table table-sm settings-d1-table">
                    <thead><tr><th>Department ID</th><th>Department Name</th><th>Status</th><th>Actions</th></tr></thead>
                    <tbody>
                      <tr><td>ED0002</td><td>Accounting</td><td><span className="badge bg-success">Active</span></td><td><button type="button" className="btn btn-link btn-sm p-0 me-2 settings-d1-table-link">Edit</button><button type="button" className="btn btn-link btn-sm p-0 text-danger">Delete</button></td></tr>
                      <tr><td>ED0003</td><td>Marketing</td><td><span className="badge bg-success">Active</span></td><td><button type="button" className="btn btn-link btn-sm p-0 me-2 settings-d1-table-link">Edit</button><button type="button" className="btn btn-link btn-sm p-0 text-danger">Delete</button></td></tr>
                      <tr><td>ED0004</td><td>Sales</td><td><span className="badge bg-success">Active</span></td><td><button type="button" className="btn btn-link btn-sm p-0 me-2 settings-d1-table-link">Edit</button><button type="button" className="btn btn-link btn-sm p-0 text-danger">Delete</button></td></tr>
                      <tr><td>ED0005</td><td>Production</td><td><span className="badge bg-success">Active</span></td><td><button type="button" className="btn btn-link btn-sm p-0 me-2 settings-d1-table-link">Edit</button><button type="button" className="btn btn-link btn-sm p-0 text-danger">Delete</button></td></tr>
                      <tr><td>ED0006</td><td>Office</td><td><span className="badge bg-success">Active</span></td><td><button type="button" className="btn btn-link btn-sm p-0 me-2 settings-d1-table-link">Edit</button><button type="button" className="btn btn-link btn-sm p-0 text-danger">Delete</button></td></tr>
                      <tr><td>ED0007</td><td>IT</td><td><span className="badge bg-success">Active</span></td><td><button type="button" className="btn btn-link btn-sm p-0 me-2 settings-d1-table-link">Edit</button><button type="button" className="btn btn-link btn-sm p-0 text-danger">Delete</button></td></tr>
                      <tr><td>ED0008</td><td>Executive</td><td><span className="badge bg-success">Active</span></td><td><button type="button" className="btn btn-link btn-sm p-0 me-2 settings-d1-table-link">Edit</button><button type="button" className="btn btn-link btn-sm p-0 text-danger">Delete</button></td></tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          )}
          {section === "zipcodes" && (
            <div data-settings-content="zipcodes" className="settings-d1-tab-wrap">
              <section className="settings-card settings-d1-section">
                <h2 className="settings-d1-section-title settings-d1-section-title-lg">Zipcodes</h2>
                <div className="d-flex gap-2 mb-4">
                  <input type="search" placeholder="Search zipcode..." className="form-control form-control-sm settings-d1-input flex-grow-1" style={{ maxWidth: 400, borderColor: "var(--settings-border)" }} />
                  <button type="button" className="btn btn-sm border" style={{ borderColor: "var(--settings-border)", color: "var(--settings-text)" }}>Clear</button>
                </div>
                <div className="table-responsive">
                  <table className="table table-sm settings-d1-table">
                    <thead><tr><th>Branch ID</th><th>County</th><th>City</th><th>State</th><th>Zip</th><th>FIPS</th><th>Tax County</th><th>Tax State</th><th>Tax Total</th></tr></thead>
                    <tbody>
                      <tr><td>CB0001</td><td>Fairfield</td><td>Bridgeport</td><td>Connecticut</td><td>06601</td><td>09001</td><td>—</td><td>0.0635</td><td>0.0635</td></tr>
                      <tr><td>CB0001</td><td>Fairfield</td><td>Bethel</td><td>Connecticut</td><td>06801</td><td>09001</td><td>—</td><td>0.0635</td><td>0.0635</td></tr>
                      <tr><td>CB0001</td><td>Fairfield</td><td>Botsford</td><td>Connecticut</td><td>06404</td><td>09001</td><td>—</td><td>0.0635</td><td>0.0635</td></tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          )}
          {section === "integrations" && (
            <div data-settings-content="integrations" className="settings-d1-tab-wrap">
              <section className="settings-card settings-d1-section">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h2 className="settings-d1-section-title mb-0">FileMaker Configurations</h2>
                  <button type="button" className="btn btn-primary-saas">+ Add Configuration</button>
                </div>
                <div className="table-responsive">
                  <table className="table table-sm settings-d1-table">
                    <thead><tr><th>ID</th><th>Server URL</th><th>Username</th><th>Database</th><th>Status</th><th>Actions</th></tr></thead>
                    <tbody>
                      <tr><td>1</td><td>klauslarsen.app</td><td>jim.t@klauslarsen.com</td><td>KLroofing</td><td><span className="badge bg-success">Active</span></td><td><button type="button" className="btn btn-link btn-sm p-0 me-2 settings-d1-table-link">Edit</button><button type="button" className="btn btn-link btn-sm p-0 text-danger">Delete</button></td></tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          )}
          {section === "email" && (
            <div data-settings-content="email" className="settings-d1-tab-wrap">
              <section className="settings-card settings-d1-section">
                <h2 className="settings-d1-section-title">Supervisor</h2>
                <div className="row g-4">
                  <div className="col-12 col-sm-6"><label className="form-label small mb-1 fw-medium" style={{ color: "var(--settings-text-secondary)" }}>Accounting Manager Email</label><input type="email" defaultValue="jim.t@klauslarsen.com" className="form-control settings-d1-input" style={{ borderColor: "var(--settings-border)" }} /></div>
                  <div className="col-12 col-sm-6"><label className="form-label small mb-1 fw-medium" style={{ color: "var(--settings-text-secondary)" }}>IT Manager Email</label><input type="email" defaultValue="jim.t@klauslarsen.com" className="form-control settings-d1-input" style={{ borderColor: "var(--settings-border)" }} /></div>
                  <div className="col-12 col-sm-6"><label className="form-label small mb-1 fw-medium" style={{ color: "var(--settings-text-secondary)" }}>Appointment Manager Email</label><input type="email" defaultValue="charlotte.f@klauslarsen.com" className="form-control settings-d1-input" style={{ borderColor: "var(--settings-border)" }} /></div>
                  <div className="col-12 col-sm-6"><label className="form-label small mb-1 fw-medium" style={{ color: "var(--settings-text-secondary)" }}>Marketing Manager Email</label><input type="email" defaultValue="stephanie.c@klauslarsen.com" className="form-control settings-d1-input" style={{ borderColor: "var(--settings-border)" }} /></div>
                </div>
                <div className="mt-4"><button type="button" className="btn btn-primary-saas">Update</button></div>
              </section>
            </div>
          )}
          {section === "payment-obligations" && (
            <div data-settings-content="payment-obligations" className="settings-d1-tab-wrap">
              <section className="settings-card settings-d1-section">
                <h2 className="settings-d1-section-title settings-d1-section-title-lg">Payment Obligations</h2>
                <p className="small mb-4 mt-1" style={{ color: "var(--settings-text-secondary)" }}>Configure payment milestones and percentage allocations</p>
                <div className="d-flex justify-content-end mb-4"><button type="button" className="btn btn-sm border" style={{ borderColor: "var(--settings-border)", color: "var(--settings-text)" }}>+ Add Obligation</button></div>
                <div className="row g-4 mb-4">
                  <div className="col-12 col-sm-4"><div className="settings-po-card"><span className="settings-po-label">Total Obligations</span><span className="settings-po-value">4</span></div></div>
                  <div className="col-12 col-sm-4"><div className="settings-po-card"><span className="settings-po-label">Active</span><span className="settings-po-value">2</span></div></div>
                  <div className="col-12 col-sm-4"><div className="settings-po-card"><span className="settings-po-label">Total Allocation</span><span className="settings-po-value text-success">100%</span></div></div>
                </div>
                <div className="table-responsive">
                  <table className="table table-sm settings-d1-table">
                    <thead><tr><th>#</th><th>Obligation Name</th><th>Description</th><th>Amount (%)</th><th>Status</th><th>Actions</th></tr></thead>
                    <tbody>
                      <tr><td>1</td><td className="fw-medium">First Payment</td><td className="small" style={{ color: "var(--settings-text-secondary)" }}>Initial deposit required upon contract signing</td><td><span className="settings-po-amount">30%</span></td><td><span className="settings-po-status-active">active</span></td><td><button type="button" className="btn btn-link btn-sm p-0 me-1 settings-d1-table-link">Edit</button><button type="button" className="btn btn-link btn-sm p-0 text-danger">Delete</button></td></tr>
                      <tr><td>2</td><td className="fw-medium">Project Start</td><td className="small" style={{ color: "var(--settings-text-secondary)" }}>Payment due when work begins on-site</td><td><span className="settings-po-amount">10%</span></td><td><span className="settings-po-status-inactive">inactive</span></td><td><button type="button" className="btn btn-link btn-sm p-0 me-1 settings-d1-table-link">Edit</button><button type="button" className="btn btn-link btn-sm p-0 text-danger">Delete</button></td></tr>
                      <tr><td>3</td><td className="fw-medium">Progress Payment</td><td className="small" style={{ color: "var(--settings-text-secondary)" }}>50% completion milestone</td><td><span className="settings-po-amount">50%</span></td><td><span className="settings-po-status-inactive">inactive</span></td><td><button type="button" className="btn btn-link btn-sm p-0 me-1 settings-d1-table-link">Edit</button><button type="button" className="btn btn-link btn-sm p-0 text-danger">Delete</button></td></tr>
                      <tr><td>4</td><td className="fw-medium">Final Payment</td><td className="small" style={{ color: "var(--settings-text-secondary)" }}>Final payment made upon project completion and approval.</td><td><span className="settings-po-amount">70%</span></td><td><span className="settings-po-status-active">active</span></td><td><button type="button" className="btn btn-link btn-sm p-0 me-1 settings-d1-table-link">Edit</button><button type="button" className="btn btn-link btn-sm p-0 text-danger">Delete</button></td></tr>
                    </tbody>
                  </table>
                </div>
                <div className="d-flex justify-content-end align-items-center gap-2 mt-4 pt-4 border-top" style={{ borderColor: "var(--settings-border)" }}><span className="small" style={{ color: "var(--settings-text-secondary)" }}>Total Active Allocation:</span><span className="settings-po-footer-badge">100%</span></div>
              </section>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
