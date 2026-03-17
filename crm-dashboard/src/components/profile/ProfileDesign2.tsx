"use client";

export default function ProfileDesign2() {
  return (
    <div id="profile-design2" data-profile-panel className="profile-design2-root">
      <aside>
        <section className="profile-card h-fit" style={{ padding: "1.5rem" }}>
          <div className="d-flex flex-column align-items-center text-center">
            <div className="position-relative mb-4">
              <div className="rounded-circle overflow-hidden bg-secondary" style={{ width: 112, height: 112 }}>
                <img id="profile-avatar-d2" src="https://i.pravatar.cc/150?u=employee" alt="Avatar" className="w-100 h-100 object-fit-cover" />
              </div>
              <label className="position-absolute d-flex align-items-center justify-content-center text-white cursor-pointer rounded-3" style={{ width: 36, height: 36, background: "var(--profile-primary)", bottom: -4, right: -4 }}>
                <input type="file" accept="image/*" className="visually-hidden" aria-label="Upload photo" />
                <i className="bi bi-camera-fill" style={{ fontSize: "1.25rem" }} />
              </label>
            </div>
            <h2 className="fw-semibold mb-1" style={{ color: "var(--profile-text)", fontSize: "1.125rem" }}>Alex Johnson</h2>
            <p className="small mb-0 mt-1" style={{ color: "var(--profile-text-secondary)" }}>Senior Sales Representative</p>
            <div className="mt-4 w-100 text-start small">
              <div className="d-flex align-items-center gap-2 mb-2" style={{ color: "var(--profile-text-secondary)" }}>
                <i className="bi bi-envelope flex-shrink-0" style={{ color: "var(--profile-primary)" }} /> alex.johnson@company.com
              </div>
              <div className="d-flex align-items-center gap-2" style={{ color: "var(--profile-text-secondary)" }}>
                <i className="bi bi-telephone flex-shrink-0" style={{ color: "var(--profile-primary)" }} /> (555) 987-6543
              </div>
            </div>
            <button type="button" className="btn btn-primary-saas mt-4 w-100">Edit Profile</button>
          </div>
        </section>
      </aside>
      <div className="min-w-0">
        <section className="profile-card mb-4" style={{ padding: "1.5rem" }}>
          <h3 className="fw-semibold mb-4" style={{ color: "var(--profile-text)", fontSize: "0.875rem" }}>Basic Information</h3>
          <div className="row g-3">
            <div className="col-12 col-sm-6 col-md-4"><label className="form-label small mb-0" style={{ color: "var(--profile-text-secondary)" }}>First Name</label><input type="text" defaultValue="Alex" className="form-control form-control-sm" style={{ borderColor: "var(--profile-border)" }} /></div>
            <div className="col-12 col-sm-6 col-md-4"><label className="form-label small mb-0" style={{ color: "var(--profile-text-secondary)" }}>Last Name</label><input type="text" defaultValue="Johnson" className="form-control form-control-sm" style={{ borderColor: "var(--profile-border)" }} /></div>
            <div className="col-12 col-sm-6 col-md-4"><label className="form-label small mb-0" style={{ color: "var(--profile-text-secondary)" }}>Date of Birth</label><input type="date" defaultValue="1990-05-15" className="form-control form-control-sm" style={{ borderColor: "var(--profile-border)" }} /></div>
            <div className="col-12 col-sm-6 col-md-4"><label className="form-label small mb-0" style={{ color: "var(--profile-text-secondary)" }}>Mobile</label><input type="tel" defaultValue="(555) 987-6543" className="form-control form-control-sm" style={{ borderColor: "var(--profile-border)" }} /></div>
            <div className="col-12 col-sm-6 col-md-8"><label className="form-label small mb-0" style={{ color: "var(--profile-text-secondary)" }}>Address 1</label><input type="text" defaultValue="123 Main St" className="form-control form-control-sm" style={{ borderColor: "var(--profile-border)" }} /></div>
            <div className="col-12"><label className="form-label small mb-0" style={{ color: "var(--profile-text-secondary)" }}>Address 2</label><input type="text" placeholder="Apt, suite" className="form-control form-control-sm" style={{ borderColor: "var(--profile-border)" }} /></div>
            <div className="col-12 col-sm-6 col-md-4"><label className="form-label small mb-0" style={{ color: "var(--profile-text-secondary)" }}>City</label><input type="text" defaultValue="San Francisco" className="form-control form-control-sm" style={{ borderColor: "var(--profile-border)" }} /></div>
            <div className="col-12 col-sm-6 col-md-4"><label className="form-label small mb-0" style={{ color: "var(--profile-text-secondary)" }}>State</label><input type="text" defaultValue="CA" className="form-control form-control-sm" style={{ borderColor: "var(--profile-border)" }} /></div>
            <div className="col-12 col-sm-6 col-md-4"><label className="form-label small mb-0" style={{ color: "var(--profile-text-secondary)" }}>Zip</label><input type="text" defaultValue="94102" className="form-control form-control-sm" style={{ borderColor: "var(--profile-border)" }} /></div>
            <div className="col-12 col-sm-6 col-md-8"><label className="form-label small mb-0" style={{ color: "var(--profile-text-secondary)" }}>Personal Email</label><input type="email" defaultValue="alex.personal@gmail.com" className="form-control form-control-sm" style={{ borderColor: "var(--profile-border)" }} /></div>
            <div className="col-12 col-sm-6 col-md-4"><label className="form-label small mb-0" style={{ color: "var(--profile-text-secondary)" }}>Shirt Size</label><div className="d-flex flex-wrap gap-3 pt-1">{["S", "M", "L", "XL"].map((s) => (<label key={s} className="form-check form-check-inline small"><input type="radio" name="shirt-d2" value={s} className="form-check-input" defaultChecked={s === "M"} /><span className="form-check-label">{s}</span></label>))}</div></div>
          </div>
          <div className="mt-4 pt-4 border-top" style={{ borderColor: "var(--profile-border)" }}>
            <h4 className="small fw-semibold text-uppercase mb-3" style={{ color: "var(--profile-text-secondary)" }}>Emergency Contact</h4>
            <div className="row g-3">
              <div className="col-12 col-sm-6 col-md-4"><label className="form-label small mb-0" style={{ color: "var(--profile-text-secondary)" }}>Name</label><input type="text" defaultValue="Jane Johnson" className="form-control form-control-sm" style={{ borderColor: "var(--profile-border)" }} /></div>
              <div className="col-12 col-sm-6 col-md-4"><label className="form-label small mb-0" style={{ color: "var(--profile-text-secondary)" }}>Relationship</label><input type="text" defaultValue="Spouse" className="form-control form-control-sm" style={{ borderColor: "var(--profile-border)" }} /></div>
              <div className="col-12 col-sm-6 col-md-4"><label className="form-label small mb-0" style={{ color: "var(--profile-text-secondary)" }}>Phone</label><input type="tel" defaultValue="(555) 111-2222" className="form-control form-control-sm" style={{ borderColor: "var(--profile-border)" }} /></div>
              <div className="col-12 col-sm-6 col-md-8"><label className="form-label small mb-0" style={{ color: "var(--profile-text-secondary)" }}>Address 1</label><input type="text" defaultValue="123 Main St" className="form-control form-control-sm" style={{ borderColor: "var(--profile-border)" }} /></div>
              <div className="col-12 col-sm-6 col-md-4"><label className="form-label small mb-0" style={{ color: "var(--profile-text-secondary)" }}>City</label><input type="text" defaultValue="San Francisco" className="form-control form-control-sm" style={{ borderColor: "var(--profile-border)" }} /></div>
              <div className="col-12 col-sm-6 col-md-4"><label className="form-label small mb-0" style={{ color: "var(--profile-text-secondary)" }}>State</label><input type="text" defaultValue="CA" className="form-control form-control-sm" style={{ borderColor: "var(--profile-border)" }} /></div>
              <div className="col-12 col-sm-6 col-md-4"><label className="form-label small mb-0" style={{ color: "var(--profile-text-secondary)" }}>Zip</label><input type="text" defaultValue="94102" className="form-control form-control-sm" style={{ borderColor: "var(--profile-border)" }} /></div>
            </div>
          </div>
        </section>
        <section className="profile-card mb-4" style={{ padding: "1.5rem" }}>
          <h3 className="fw-semibold mb-4" style={{ color: "var(--profile-text)", fontSize: "0.875rem" }}>Job Information</h3>
          <p className="small mb-3" style={{ color: "var(--profile-text-secondary)" }}>Job information is read-only (except Bio)</p>
          <div className="row g-3">
            <div className="col-12 col-sm-6 col-md-4"><label className="form-label small mb-0" style={{ color: "var(--profile-text-secondary)" }}>Date of Hire</label><input type="date" defaultValue="2019-03-01" readOnly className="form-control form-control-sm bg-light" style={{ borderColor: "var(--profile-border)" }} /></div>
            <div className="col-12 col-sm-6 col-md-4"><label className="form-label small mb-0" style={{ color: "var(--profile-text-secondary)" }}>Title</label><input type="text" defaultValue="Senior Sales Representative" readOnly className="form-control form-control-sm bg-light" style={{ borderColor: "var(--profile-border)" }} /></div>
            <div className="col-12 col-sm-6 col-md-4"><label className="form-label small mb-0" style={{ color: "var(--profile-text-secondary)" }}>Department</label><select disabled className="form-select form-select-sm bg-light" style={{ borderColor: "var(--profile-border)" }}><option>Sales</option><option>Marketing</option><option>Operations</option></select></div>
            <div className="col-12"><label className="form-label small mb-0" style={{ color: "var(--profile-text-secondary)" }}>Bio</label><textarea className="form-control form-control-sm" rows={4} placeholder="Tell us about yourself..." defaultValue="Senior sales professional with 8+ years of experience." style={{ borderColor: "var(--profile-border)" }}></textarea></div>
          </div>
        </section>
        <section className="profile-card mb-4" style={{ padding: "1.5rem" }}>
          <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
            <div>
              <h3 className="fw-semibold mb-1" style={{ color: "var(--profile-text)", fontSize: "0.875rem" }}>Asset</h3>
              <p className="small mb-0" style={{ color: "var(--profile-text-secondary)" }}>Company assets assigned to this employee (e.g. iPad, laptop).</p>
            </div>
            <button type="button" className="btn btn-primary-saas" data-bs-toggle="modal" data-bs-target="#profileAssetModal2">
              <i className="bi bi-plus-lg" /> Add
            </button>
          </div>
          <div className="table-responsive table-documents-wrap">
            <table className="table table-documents">
              <thead>
                <tr><th className="fw-semibold small" style={{ width: 72 }}>Image</th><th className="fw-semibold small">Asset</th><th className="fw-semibold small">Asset ID / Serial</th><th className="fw-semibold small">Assigned To</th><th className="fw-semibold small">Date Assigned</th><th className="fw-semibold small">Status</th><th className="fw-semibold small">Action</th></tr>
              </thead>
              <tbody>
                <tr><td className="align-middle"><img src="https://placehold.co/56x56/e5e7eb/6b7280?text=iPad" alt="iPad" className="rounded" style={{ width: 56, height: 56, objectFit: "cover" }} /></td><td>iPad</td><td>IPD-2024-001</td><td>Alex Johnson</td><td>Mar 1, 2025</td><td><span className="badge bg-success">In use</span></td><td><button type="button" className="doc-action-link me-2">Edit</button><span className="text-muted" style={{ fontSize: "0.875rem" }}>|</span><button type="button" className="doc-action-link ms-2 text-danger">Delete</button></td></tr>
                <tr><td className="align-middle"><img src="https://placehold.co/56x56/e5e7eb/6b7280?text=MB" alt="Laptop" className="rounded" style={{ width: 56, height: 56, objectFit: "cover" }} /></td><td>Laptop</td><td>MBP-2023-042</td><td>Alex Johnson</td><td>Jan 15, 2025</td><td><span className="badge bg-success">In use</span></td><td><button type="button" className="doc-action-link me-2">Edit</button><span className="text-muted" style={{ fontSize: "0.875rem" }}>|</span><button type="button" className="doc-action-link ms-2 text-danger">Delete</button></td></tr>
              </tbody>
            </table>
          </div>
          <div className="modal fade" id="profileAssetModal2" tabIndex={-1} aria-labelledby="profileAssetModal2Label" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content" style={{ borderColor: "var(--profile-border)" }}>
                <div className="modal-header border-bottom" style={{ borderColor: "var(--profile-border)" }}>
                  <h5 className="modal-title fw-semibold small" id="profileAssetModal2Label" style={{ color: "var(--profile-text)" }}>Add Asset</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                  <div className="row g-3">
                    <div className="col-12"><label className="form-label small mb-1" style={{ color: "var(--profile-text-secondary)" }}>Image</label><input type="file" accept="image/*" className="form-control form-control-sm" style={{ borderColor: "var(--profile-border)" }} /></div>
                    <div className="col-12 col-md-6"><label className="form-label small mb-1" style={{ color: "var(--profile-text-secondary)" }}>Asset</label><input type="text" className="form-control form-control-sm" placeholder="e.g. iPad, Laptop" style={{ borderColor: "var(--profile-border)" }} /></div>
                    <div className="col-12 col-md-6"><label className="form-label small mb-1" style={{ color: "var(--profile-text-secondary)" }}>Asset ID / Serial</label><input type="text" className="form-control form-control-sm" placeholder="e.g. IPD-2024-001" style={{ borderColor: "var(--profile-border)" }} /></div>
                    <div className="col-12 col-md-6"><label className="form-label small mb-1" style={{ color: "var(--profile-text-secondary)" }}>Assigned To</label><input type="text" className="form-control form-control-sm" placeholder="Employee name" style={{ borderColor: "var(--profile-border)" }} /></div>
                    <div className="col-12 col-md-6"><label className="form-label small mb-1" style={{ color: "var(--profile-text-secondary)" }}>Date Assigned</label><input type="date" className="form-control form-control-sm" style={{ borderColor: "var(--profile-border)" }} /></div>
                    <div className="col-12"><label className="form-label small mb-1" style={{ color: "var(--profile-text-secondary)" }}>Status</label><select className="form-select form-select-sm" style={{ borderColor: "var(--profile-border)" }}><option value="In use">In use</option><option value="Returned">Returned</option><option value="Maintenance">Maintenance</option></select></div>
                  </div>
                </div>
                <div className="modal-footer border-top" style={{ borderColor: "var(--profile-border)" }}>
                  <button type="button" className="btn btn-neutral-saas" data-bs-dismiss="modal">Cancel</button>
                  <button type="button" className="btn btn-primary-saas">Save</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="profile-card mb-4" style={{ padding: "1.5rem" }}>
          <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
            <h3 className="fw-semibold mb-0" style={{ color: "var(--profile-text)", fontSize: "1rem" }}>Documents</h3>
            <label className="btn btn-primary-saas documents-upload-btn"><input type="file" className="visually-hidden" multiple /><i className="bi bi-cloud-arrow-up" /> Upload File</label>
          </div>
          <div className="table-responsive table-documents-wrap">
            <table className="table table-documents">
              <thead>
                <tr><th></th><th>File Name</th><th>Type</th><th>Size</th><th>Upload Date</th><th>Action</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><input type="checkbox" className="form-check-input" /></td><td>ID_Card.pdf</td><td>PDF</td><td>245 KB</td><td>Mar 10, 2026</td>
                  <td><button type="button" className="doc-action-link me-2">Download</button><span className="text-muted" style={{ fontSize: "0.875rem" }}>|</span><button type="button" className="doc-action-link ms-2">Edit</button></td>
                </tr>
                <tr>
                  <td><input type="checkbox" className="form-check-input" /></td><td>Degree_Certificate.pdf</td><td>PDF</td><td>512 KB</td><td>Mar 12, 2026</td>
                  <td><button type="button" className="doc-action-link me-2">Download</button><span className="text-muted" style={{ fontSize: "0.875rem" }}>|</span><button type="button" className="doc-action-link ms-2">Edit</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <div className="d-flex gap-3">
          <button type="button" className="btn btn-primary-saas">Save changes</button>
          <button type="button" className="btn btn-neutral-saas">Cancel</button>
        </div>
      </div>
    </div>
  );
}
