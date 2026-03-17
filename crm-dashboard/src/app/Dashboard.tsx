"use client";

import { useState } from "react";
import type { Page, Layout, ProfileLayout, SettingsLayout } from "../types";
import Header from "../components/Header";
import OpportunityPage from "../components/opportunity/OpportunityPage";
import ProfilePage from "../components/ProfilePage";
import SettingsPage from "../components/SettingsPage";

export default function Dashboard() {
  const [page, setPage] = useState<Page>("opportunity");
  const [layout, setLayout] = useState<Layout>("design1");
  const [profileLayout, setProfileLayout] = useState<ProfileLayout>("profile-design1");
  const [settingsLayout, setSettingsLayout] = useState<SettingsLayout>("settings-design1");

  return (
    <>
      <Header
        page={page}
        layout={layout}
        profileLayout={profileLayout}
        settingsLayout={settingsLayout}
        onPageChange={setPage}
        onLayoutChange={setLayout}
        onProfileLayoutChange={setProfileLayout}
        onSettingsLayoutChange={setSettingsLayout}
      />

      <main className="app-main">
        <div id="opportunity-page-wrapper" className={page === "opportunity" ? "" : "d-none"}>
          <OpportunityPage layout={layout} />
        </div>
        <ProfilePage layout={profileLayout} visible={page === "profile"} />
        <SettingsPage layout={settingsLayout} visible={page === "settings"} />
      </main>
    </>
  );
}
