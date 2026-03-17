"use client";

import { useState } from "react";

type ProfileSection = "basic" | "job" | "asset" | "document";

export default function ProfileDesign1() {
  const [section, setSection] = useState<ProfileSection>("basic");

  return (
    <div id="profile-design1" data-profile-panel className="profile-design1-root">
      <section className="profile-card p-4 p-lg-5 mb-0" style={{ padding: "1.5rem" }}>
        <div className="d-flex flex-wrap align-items-start gap-4" style={{ gap: "1.5rem" }}>
          <div className="position-relative flex-shrink-0">
            <div className="rounded-circle overflow-hidden bg-secondary" style={{ width: 96, height: 96 }}>
              <img id="profile-avatar-d1" src="https://i.pravatar.cc/150?u=employee" alt="Avatar" className="w-100 h-100 object-fit-cover" />
            </div>
            <label className="position-absolute bottom-0 end-0 rounded-2 d-flex align-items-center justify-content-center shadow cursor-pointer text-white" style={{ width: 32, height: 32, background: "var(--profile-primary)" }}>
              <input type="file" accept="image/*" className="visually-hidden" aria-label="Upload photo" />
              <i className="bi bi-camera" />
            </label>
          </div>
          <div className="min-w-0 flex-grow-1">
            <h2 className="fw-semibold mb-1" style={{ color: "var(--profile-text)", fontSize: "1.25rem" }}>Alex Johnson</h2>
            <p className="small mb-0 mt-1" style={{ color: "var(--profile-text-secondary)" }}>Senior Sales Representative</p>
            <div className="d-flex flex-wrap gap-3 mt-3 small" style={{ color: "var(--profile-text-secondary)", gap: "1.5rem" }}>
              <span>alex.johnson@company.com</span>
              <span>(555) 987-6543</span>
            </div>
            <div className="mt-3 pt-3 border-top small" style={{ borderColor: "var(--profile-border)" }}>
              <p className="fw-medium mb-1" style={{ color: "var(--profile-text)" }}>Bio</p>
              <p className="mb-0" style={{ color: "var(--profile-text-secondary)", lineHeight: 1.5 }}>Senior sales professional with 8+ years of experience. Passionate about building client relationships and driving growth. Based in San Francisco.</p>
            </div>
            <div className="mt-4">
              <button type="button" className="btn btn-primary-saas">Edit Profile</button>
            </div>
          </div>
        </div>
      </section>
      <div className="d-flex gap-1 profile-inner-tabs-wrap mb-4 mt-4">
        <button
          type="button"
          className={`profile-inner-tab ${section === "basic" ? "profile-inner-active" : ""}`}
          onClick={() => setSection("basic")}
        >
          Basic Information
        </button>
        <button
          type="button"
          className={`profile-inner-tab ${section === "job" ? "profile-inner-active" : ""}`}
          onClick={() => setSection("job")}
        >
          Job Information
        </button>
        <button
          type="button"
          className={`profile-inner-tab ${section === "asset" ? "profile-inner-active" : ""}`}
          onClick={() => setSection("asset")}
        >
          Asset
        </button>
        <button
          type="button"
          className={`profile-inner-tab ${section === "document" ? "profile-inner-active" : ""}`}
          onClick={() => setSection("document")}
        >
          Document
        </button>
      </div>

      {section === "basic" && (
        <div data-profile-section-content="basic" className="profile-card" style={{ padding: "1.5rem" }}>
          {/* Basic Information — form fields row 1–6 */}
          <div className="row profile-form-grid g-3">
            <div className="col-12 col-sm-6">
              <label className="form-label small mb-1" style={{ color: "var(--profile-text-secondary)" }}>First Name</label>
              <input type="text" defaultValue="Alex" className="form-control form-control-sm" style={{ borderColor: "var(--profile-border)" }} />
            </div>
            <div className="col-12 col-sm-6">
              <label className="form-label small mb-1" style={{ color: "var(--profile-text-secondary)" }}>Last Name</label>
              <input type="text" defaultValue="Johnson" className="form-control form-control-sm" style={{ borderColor: "var(--profile-border)" }} />
            </div>
            <div className="col-12 col-sm-6">
              <label className="form-label small mb-1" style={{ color: "var(--profile-text-secondary)" }}>Mobile</label>
              <input type="tel" defaultValue="(555) 987-6543" className="form-control form-control-sm" style={{ borderColor: "var(--profile-border)" }} />
            </div>
            <div className="col-12 col-sm-6">
              <label className="form-label small mb-1" style={{ color: "var(--profile-text-secondary)" }}>Address 1</label>
              <input type="text" defaultValue="123 Main St" className="form-control form-control-sm" style={{ borderColor: "var(--profile-border)" }} />
            </div>
            <div className="col-12 col-sm-6">
              <label className="form-label small mb-1" style={{ color: "var(--profile-text-secondary)" }}>Address 2</label>
              <input type="text" placeholder="Apt, suite, etc." className="form-control form-control-sm" style={{ borderColor: "var(--profile-border)" }} />
            </div>
            <div className="col-12 col-sm-6">
              <label className="form-label small mb-1" style={{ color: "var(--profile-text-secondary)" }}>Date of Birth</label>
              <div className="input-group input-group-sm">
                <input type="text" defaultValue="15/05/1990" className="form-control" style={{ borderColor: "var(--profile-border)" }} />
                <span className="input-group-text bg-white" style={{ borderColor: "var(--profile-border)" }}><i className="bi bi-calendar3 text-secondary" /></span>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <label className="form-label small mb-1" style={{ color: "var(--profile-text-secondary)" }}>City</label>
              <input type="text" defaultValue="San Francisco" className="form-control form-control-sm" style={{ borderColor: "var(--profile-border)" }} />
            </div>
            <div className="col-12 col-sm-6">
              <label className="form-label small mb-1" style={{ color: "var(--profile-text-secondary)" }}>State</label>
              <input type="text" defaultValue="CA" className="form-control form-control-sm" style={{ borderColor: "var(--profile-border)" }} />
            </div>
            <div className="col-12 col-sm-6">
              <label className="form-label small mb-1" style={{ color: "var(--profile-text-secondary)" }}>Personal Email</label>
              <input type="email" defaultValue="alex.personal@gmail.com" className="form-control form-control-sm" style={{ borderColor: "var(--profile-border)" }} />
            </div>
            <div className="col-12 col-sm-6">
              <label className="form-label small mb-1" style={{ color: "var(--profile-text-secondary)" }}>Zip</label>
              <input type="text" defaultValue="94102" className="form-control form-control-sm" style={{ borderColor: "var(--profile-border)" }} />
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <label className="form-label small mb-1" style={{ color: "var(--profile-text-secondary)" }}>Shirt Size</label>
              <div className="d-flex flex-wrap gap-3 pt-1">
                {(["S", "M", "L", "XL", "2XL"] as const).map((size) => (
                  <label key={size} className="form-check form-check-inline small">
                    <input type="radio" name="shirt-d1" value={size} className="form-check-input" defaultChecked={size === "M"} />
                    <span className="form-check-label">{size}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-top" style={{ borderColor: "var(--profile-border)" }}>
            <h4 className="small fw-semibold text-uppercase mb-3" style={{ color: "var(--profile-text)" }}>Emergency Contact</h4>
            <div className="row g-3">
              <div className="col-12 col-sm-6"><label className="form-label small mb-1" style={{ color: "var(--profile-text-secondary)" }}>Name</label><input type="text" defaultValue="Jane Johnson" className="form-control form-control-sm" style={{ borderColor: "var(--profile-border)" }} /></div>
              <div className="col-12 col-sm-6"><label className="form-label small mb-1" style={{ color: "var(--profile-text-secondary)" }}>Relationship</label><input type="text" defaultValue="Spouse" className="form-control form-control-sm" style={{ borderColor: "var(--profile-border)" }} /></div>
              <div className="col-12 col-sm-6"><label className="form-label small mb-1" style={{ color: "var(--profile-text-secondary)" }}>Address 1</label><input type="text" defaultValue="123 Main St" className="form-control form-control-sm" style={{ borderColor: "var(--profile-border)" }} /></div>
              <div className="col-12 col-sm-6"><label className="form-label small mb-1" style={{ color: "var(--profile-text-secondary)" }}>Phone</label><input type="tel" defaultValue="(555) 111-2222" className="form-control form-control-sm" style={{ borderColor: "var(--profile-border)" }} /></div>
              <div className="col-12 col-sm-6"><label className="form-label small mb-1" style={{ color: "var(--profile-text-secondary)" }}>State</label><input type="text" defaultValue="CA" className="form-control form-control-sm" style={{ borderColor: "var(--profile-border)" }} /></div>
              <div className="col-12 col-sm-6"><label className="form-label small mb-1" style={{ color: "var(--profile-text-secondary)" }}>City</label><input type="text" defaultValue="San Francisco" className="form-control form-control-sm" style={{ borderColor: "var(--profile-border)" }} /></div>
              <div className="col-12 col-sm-6"><label className="form-label small mb-1" style={{ color: "var(--profile-text-secondary)" }}>Zip</label><input type="text" defaultValue="94102" className="form-control form-control-sm" style={{ borderColor: "var(--profile-border)" }} /></div>
            </div>
          </div>
          <div className="d-flex gap-2 mt-5 pt-4">
            <button type="button" className="btn btn-primary-saas">Save</button>
            <button type="button" className="btn btn-neutral-saas">Cancel</button>
          </div>
        </div>
      )}

      {section === "job" && (
        <div data-profile-section-content="job" className="profile-card" style={{ padding: "1.5rem" }}>
          <p className="small mb-3" style={{ color: "var(--profile-text-secondary)" }}>Job information is read-only (except Bio)</p>
          <div className="row g-3">
            <div className="col-12 col-sm-6 col-md-4">
              <label className="form-label small mb-0" style={{ color: "var(--profile-text-secondary)" }}>Date of Hire</label>
              <input type="date" defaultValue="2019-03-01" readOnly className="form-control form-control-sm bg-light" style={{ borderColor: "var(--profile-border)", color: "var(--profile-text-secondary)" }} />
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <label className="form-label small mb-0" style={{ color: "var(--profile-text-secondary)" }}>Title</label>
              <input type="text" defaultValue="Senior Sales Representative" readOnly className="form-control form-control-sm bg-light" style={{ borderColor: "var(--profile-border)", color: "var(--profile-text-secondary)" }} />
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <label className="form-label small mb-0" style={{ color: "var(--profile-text-secondary)" }}>Department</label>
              <select disabled className="form-select form-select-sm bg-light" style={{ borderColor: "var(--profile-border)" }}><option>Sales</option><option>Marketing</option><option>Operations</option><option>HR</option></select>
            </div>
            <div className="col-12">
              <label className="form-label small mb-1" style={{ color: "var(--profile-text-secondary)" }}>Bio</label>
              <textarea className="form-control form-control-sm" rows={4} placeholder="Tell us about yourself..." defaultValue="Senior sales professional with 8+ years of experience. Passionate about building client relationships and driving growth. Based in San Francisco." style={{ borderColor: "var(--profile-border)", resize: "vertical" }} />
            </div>
          </div>
        </div>
      )}

      {section === "asset" && (
        <div data-profile-section-content="asset" className="profile-card" style={{ padding: "1.5rem" }}>
          <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
            <div>
              <h3 className="h6 fw-semibold mb-1" style={{ color: "var(--profile-text)" }}>Company Assets</h3>
              <p className="small mb-0" style={{ color: "var(--profile-text-secondary)" }}>Assets assigned to this employee (e.g. iPad, laptop).</p>
            </div>
            <button type="button" className="btn btn-primary-saas" data-bs-toggle="modal" data-bs-target="#profileAssetModal1">
              <i className="bi bi-plus-lg" /> Add
            </button>
          </div>
          <div className="table-responsive table-documents-wrap">
            <table className="table table-documents">
              <thead>
                <tr>
                  <th className="fw-semibold small" style={{ width: 72 }}>Image</th>
                  <th className="fw-semibold small">Asset</th>
                  <th className="fw-semibold small">Asset ID / Serial</th>
                  <th className="fw-semibold small">Assigned To</th>
                  <th className="fw-semibold small">Date Assigned</th>
                  <th className="fw-semibold small">Status</th>
                  <th className="fw-semibold small">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="align-middle">
                    <img src="https://placehold.co/56x56/e5e7eb/6b7280?text=iPad" alt="iPad" className="rounded" style={{ width: 56, height: 56, objectFit: "cover" }} />
                  </td>
                  <td>iPad</td>
                  <td>IPD-2024-001</td>
                  <td>Alex Johnson</td>
                  <td>Mar 1, 2025</td>
                  <td><span className="badge bg-success">In use</span></td>
                  <td>
                    <button type="button" className="doc-action-link me-2">Edit</button>
                    <span className="text-muted" style={{ fontSize: "0.875rem" }}>|</span>
                    <button type="button" className="doc-action-link ms-2 text-danger">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <img src="https://placehold.co/56x56/e5e7eb/6b7280?text=MB" alt="Laptop" className="rounded" style={{ width: 56, height: 56, objectFit: "cover" }} />
                  </td>
                  <td>Laptop</td>
                  <td>MBP-2023-042</td>
                  <td>Alex Johnson</td>
                  <td>Jan 15, 2025</td>
                  <td><span className="badge bg-success">In use</span></td>
                  <td>
                    <button type="button" className="doc-action-link me-2">Edit</button>
                    <span className="text-muted" style={{ fontSize: "0.875rem" }}>|</span>
                    <button type="button" className="doc-action-link ms-2 text-danger">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Add Asset Modal */}
          <div className="modal fade" id="profileAssetModal1" tabIndex={-1} aria-labelledby="profileAssetModal1Label" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content" style={{ borderColor: "var(--profile-border)" }}>
                <div className="modal-header border-bottom" style={{ borderColor: "var(--profile-border)" }}>
                  <h5 className="modal-title fw-semibold small" id="profileAssetModal1Label" style={{ color: "var(--profile-text)" }}>Add Asset</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                  <div className="row g-3">
                    <div className="col-12">
                      <label className="form-label small mb-1" style={{ color: "var(--profile-text-secondary)" }}>Image</label>
                      <input type="file" accept="image/*" className="form-control form-control-sm" style={{ borderColor: "var(--profile-border)" }} />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label small mb-1" style={{ color: "var(--profile-text-secondary)" }}>Asset</label>
                      <input type="text" className="form-control form-control-sm" placeholder="e.g. iPad, Laptop" style={{ borderColor: "var(--profile-border)" }} />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label small mb-1" style={{ color: "var(--profile-text-secondary)" }}>Asset ID / Serial</label>
                      <input type="text" className="form-control form-control-sm" placeholder="e.g. IPD-2024-001" style={{ borderColor: "var(--profile-border)" }} />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label small mb-1" style={{ color: "var(--profile-text-secondary)" }}>Assigned To</label>
                      <input type="text" className="form-control form-control-sm" placeholder="Employee name" style={{ borderColor: "var(--profile-border)" }} />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label small mb-1" style={{ color: "var(--profile-text-secondary)" }}>Date Assigned</label>
                      <input type="date" className="form-control form-control-sm" style={{ borderColor: "var(--profile-border)" }} />
                    </div>
                    <div className="col-12">
                      <label className="form-label small mb-1" style={{ color: "var(--profile-text-secondary)" }}>Status</label>
                      <select className="form-select form-select-sm" style={{ borderColor: "var(--profile-border)" }}>
                        <option value="In use">In use</option>
                        <option value="Returned">Returned</option>
                        <option value="Maintenance">Maintenance</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="modal-footer border-top" style={{ borderColor: "var(--profile-border)" }}>
                  <button type="button" className="btn btn-neutral-saas" data-bs-dismiss="modal">Cancel</button>
                  <button type="button" className="btn btn-primary-saas">Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {section === "document" && (
        <div data-profile-section-content="document" className="profile-card" style={{ padding: "1.5rem" }}>
          <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
            <h3 className="h6 fw-semibold mb-0" style={{ color: "var(--profile-text)" }}>Documents</h3>
            <label className="btn btn-primary-saas documents-upload-btn">
              <input type="file" className="visually-hidden" multiple />
              <i className="bi bi-cloud-arrow-up" /> Upload File
            </label>
          </div>
          <div className="table-responsive table-documents-wrap">
            <table className="table table-documents">
              <thead>
                <tr>
                  <th></th>
                  <th>File Name</th>
                  <th>Type</th>
                  <th>Size</th>
                  <th>Upload Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><input type="checkbox" className="form-check-input" /></td>
                  <td>ID_Card.pdf</td>
                  <td>PDF</td>
                  <td>245 KB</td>
                  <td>Mar 10, 2026</td>
                  <td>
                    <button type="button" className="doc-action-link me-2">Download</button>
                    <span className="text-muted" style={{ fontSize: "0.875rem" }}>|</span>
                    <button type="button" className="doc-action-link ms-2">Edit</button>
                  </td>
                </tr>
                <tr>
                  <td><input type="checkbox" className="form-check-input" /></td>
                  <td>Degree_Certificate.pdf</td>
                  <td>PDF</td>
                  <td>512 KB</td>
                  <td>Mar 12, 2026</td>
                  <td>
                    <button type="button" className="doc-action-link me-2">Download</button>
                    <span className="text-muted" style={{ fontSize: "0.875rem" }}>|</span>
                    <button type="button" className="doc-action-link ms-2">Edit</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
