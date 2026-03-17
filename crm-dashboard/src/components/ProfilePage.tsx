"use client";

import type { ProfileLayout } from "../types";
import ProfileDesign1 from "./profile/ProfileDesign1";
import ProfileDesign2 from "./profile/ProfileDesign2";
import ProfileDesign3 from "./profile/ProfileDesign3";

interface ProfilePageProps {
  layout: ProfileLayout;
  visible: boolean;
}

export default function ProfilePage({ layout, visible }: ProfilePageProps) {
  return (
    <div id="profile-page" className={`profile-page-wrapper ${visible ? "" : "d-none"}`}>
      {layout === "profile-design1" && <ProfileDesign1 />}
      {layout === "profile-design2" && <ProfileDesign2 />}
      {layout === "profile-design3" && <ProfileDesign3 />}
    </div>
  );
}
