"use client";

type Page = "opportunity" | "profile" | "settings";
type Layout = "design1" | "design2" | "design3" | "design4";
type ProfileLayout = "profile-design1" | "profile-design2" | "profile-design3";
type SettingsLayout = "settings-design1" | "settings-design2" | "settings-design3";

interface HeaderProps {
  page: Page;
  layout: Layout;
  profileLayout: ProfileLayout;
  settingsLayout: SettingsLayout;
  onPageChange: (p: Page) => void;
  onLayoutChange: (l: Layout) => void;
  onProfileLayoutChange: (l: ProfileLayout) => void;
  onSettingsLayoutChange: (l: SettingsLayout) => void;
}

export default function Header({
  page,
  layout,
  profileLayout,
  settingsLayout,
  onPageChange,
  onLayoutChange,
  onProfileLayoutChange,
  onSettingsLayoutChange,
}: HeaderProps) {
  return (
    <header className="app-header sticky top-0 z-50">
      <div className="container-fluid" style={{ maxWidth: 1600, paddingLeft: "1.25rem", paddingRight: "1.25rem", paddingTop: "1rem", paddingBottom: "1rem" }}>
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
          <div className="d-flex align-items-center gap-3">
            <div
              className="rounded-3 d-flex align-items-center justify-content-center text-white fw-bold"
              style={{ width: 36, height: 36, background: "var(--primary)" }}
            >
              O
            </div>
            <div>
              <h1 className="h5 fw-semibold text-body mb-0 lh-tight">
                Opportunity Dashboard
              </h1>
              <p className="text-muted small mb-0">CRM · Single view</p>
            </div>
          </div>

          <nav className="d-flex align-items-center gap-3 flex-wrap" role="tablist">
            <div className="d-flex gap-1 border-bottom border-secondary pb-0">
              <button
                type="button"
                role="tab"
                aria-selected={page === "opportunity"}
                data-page="opportunity"
                className={`page-tab px-4 py-2 rounded text-decoration-none small fw-medium border-0 bg-transparent ${
                  page === "opportunity" ? "page-tab-active" : ""
                }`}
                onClick={() => onPageChange("opportunity")}
              >
                Opportunity
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={page === "profile"}
                data-page="profile"
                className={`page-tab px-4 py-2 rounded text-decoration-none small fw-medium border-0 bg-transparent ${
                  page === "profile" ? "page-tab-active" : ""
                }`}
                onClick={() => onPageChange("profile")}
              >
                Profile
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={page === "settings"}
                data-page="settings"
                className={`page-tab px-4 py-2 rounded text-decoration-none small fw-medium border-0 bg-transparent ${
                  page === "settings" ? "page-tab-active" : ""
                }`}
                onClick={() => onPageChange("settings")}
              >
                Company Info
              </button>
            </div>

            <div
              id="opportunity-design-nav"
              className={`d-flex gap-1 rounded-3 p-1 ${page === "opportunity" ? "" : "d-none"}`}
              style={{ background: "var(--surface-100)" }}
              role="tablist"
            >
              {(["design1", "design2", "design3", "design4"] as const).map(
                (id) => (
                  <button
                    key={id}
                    type="button"
                    role="tab"
                    aria-selected={layout === id}
                    data-layout={id}
                    className={`layout-tab px-4 py-2 rounded-2 small fw-medium border-0 ${
                      layout === id ? "tab-active" : ""
                    }`}
                    onClick={() => onLayoutChange(id)}
                  >
                    Design {id.replace("design", "")}
                  </button>
                )
              )}
            </div>

            <div
              id="profile-design-nav"
              className={`d-flex gap-1 rounded-3 p-1 ${page === "profile" ? "" : "d-none"}`}
              style={{ background: "var(--surface-100)" }}
              role="tablist"
            >
              {(["profile-design1", "profile-design2", "profile-design3"] as const).map(
                (id) => (
                  <button
                    key={id}
                    type="button"
                    className={`profile-layout-tab px-4 py-2 rounded-2 small fw-medium border ${
                      profileLayout === id
                        ? "profile-tab-active bg-white border-secondary shadow-sm"
                        : "border-transparent"
                    }`}
                    style={
                      profileLayout === id
                        ? { color: "var(--primary)" }
                        : { color: "#64748b" }
                    }
                    onClick={() => onProfileLayoutChange(id)}
                  >
                    Design {id.replace("profile-design", "")}
                  </button>
                )
              )}
            </div>

            <div
              id="settings-design-nav"
              className={`d-flex gap-1 rounded-3 p-1 ${page === "settings" ? "" : "d-none"}`}
              style={{ background: "var(--surface-100)" }}
              role="tablist"
            >
              {(["settings-design1", "settings-design2", "settings-design3"] as const).map(
                (id) => (
                  <button
                    key={id}
                    type="button"
                    className={`settings-layout-tab px-4 py-2 rounded-2 small fw-medium border ${
                      settingsLayout === id
                        ? "settings-tab-active bg-white border-secondary shadow-sm"
                        : "border-transparent"
                    }`}
                    style={
                      settingsLayout === id
                        ? { color: "var(--settings-primary)" }
                        : { color: "#6B7280" }
                    }
                    onClick={() => onSettingsLayoutChange(id)}
                  >
                    Design {id.replace("settings-design", "")}
                  </button>
                )
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
