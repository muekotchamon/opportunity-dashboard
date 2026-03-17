"use client";

import type { Layout } from "../../types";
import OpportunityHeader from "./OpportunityHeader";
import Design1 from "./Design1";
import Design2 from "./Design2";
import Design3 from "./Design3";
import Design4 from "./Design4";

interface OpportunityPageProps {
  layout: Layout;
}

export default function OpportunityPage({ layout }: OpportunityPageProps) {
  return (
    <div id="opportunity-page">
      <OpportunityHeader layout={layout} />
      <Design1Wrapper active={layout === "design1"} />
      <Design2Wrapper active={layout === "design2"} />
      <Design3Wrapper active={layout === "design3"} />
      <Design4Wrapper active={layout === "design4"} />
    </div>
  );
}

function Design1Wrapper({ active }: { active: boolean }) {
  return (
    <div className={active ? "opportunity-design-active" : "d-none"}>
      <Design1 />
    </div>
  );
}

function Design2Wrapper({ active }: { active: boolean }) {
  return (
    <div className={active ? "opportunity-design-active" : "d-none"}>
      <Design2 />
    </div>
  );
}

function Design3Wrapper({ active }: { active: boolean }) {
  return (
    <div className={active ? "opportunity-design-active" : "d-none"}>
      <Design3 />
    </div>
  );
}

function Design4Wrapper({ active }: { active: boolean }) {
  return (
    <div className={active ? "opportunity-design-active" : "d-none"}>
      <Design4 />
    </div>
  );
}
