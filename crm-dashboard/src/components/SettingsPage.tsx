"use client";

import type { SettingsLayout } from "../types";
import SettingsDesign1 from "./settings/SettingsDesign1";
import SettingsDesign2 from "./settings/SettingsDesign2";
import SettingsDesign3 from "./settings/SettingsDesign3";

interface SettingsPageProps {
  layout: SettingsLayout;
  visible: boolean;
}

export default function SettingsPage({ layout, visible }: SettingsPageProps) {
  return (
    <div id="settings-page" className={`settings-page-wrapper ${visible ? "" : "d-none"}`} style={{ background: "var(--settings-bg)" }}>
      {layout === "settings-design1" && <SettingsDesign1 />}
      {layout === "settings-design2" && <SettingsDesign2 />}
      {layout === "settings-design3" && <SettingsDesign3 />}
    </div>
  );
}
