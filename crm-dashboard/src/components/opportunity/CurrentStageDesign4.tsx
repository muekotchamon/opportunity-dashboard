"use client";

import { useState } from "react";
import styles from "./CurrentStageDesign4.module.css";

const STAGES = [
  { label: "Initial", date: "Sep 28" },
  { label: "Set", date: "Oct 02" },
  { label: "Run", date: "Oct 02" },
  { label: "sold", date: "Oct 10" },
  { label: "Closed", date: null },
] as const;

const JOBS_DATA = [
  { id: "J1", name: "Roof Replacement", phase: "Project Start", pct: 35, pctRed: true, totalValue: 1326.05, paid: 397.82, remaining: 928.23 },
  { id: "J2", name: "Gutter Replacement", phase: "Contracted", pct: 12, pctRed: false, totalValue: 8200, paid: 2460, remaining: 5740 },
] as const;

function formatMoney(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 }).format(n);
}

export default function CurrentStageDesign4() {
  const [projectsVisible, setProjectsVisible] = useState(true);
  const jobsTotal = JOBS_DATA.reduce((sum, j) => sum + j.totalValue, 0);

  return (
    <section id="headerProgressDesign4" className={`${styles.card} h-100 ${projectsVisible ? styles.cardDropdownVisible : ""}`}>
      {/* Top: Opportunity Flow */}
      <div className={styles.topSection}>
        <div className={styles.paragraph}>
          <span className={styles.opportunityFlowLabel}>Opportunity Flow</span>
          <div className={styles.activeBadge}>
            <span className={styles.activeBadgeText}>Active</span>
          </div>
        </div>
        <div className={styles.flowContainer}>
          <div className={styles.progressLineBg} aria-hidden />
          <div className={styles.progressLineActive} aria-hidden />
          <div className={styles.stages}>
            {STAGES.map((s, i) => (
              <div key={s.label} className={styles.stage}>
                <div
                  className={`${styles.stageCircle} ${
                    i < 4 ? styles.stageCircleDone : styles.stageCircleCurrent
                  }`}
                >
                  {i < 4 && <div className={styles.checkIcon} />}
                </div>
                <span className={`${styles.stageLabel} ${i === 4 ? styles.stageLabelCurrent : ""}`}>
                  {s.label}
                </span>
                {s.date && (
                  <span className={styles.stageDate}>{s.date}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Middle: PROJECTS (2 Jobs) — คลิกโชว์แล้วลอยเหนือ card อื่น */}
      <div className={styles.projectsDropdownWrap}>
        <button
          type="button"
          className={styles.middleSection}
          onClick={() => setProjectsVisible((v) => !v)}
          aria-expanded={projectsVisible}
          aria-controls="opportunity-flow-projects"
        >
          <span className={styles.projectsTitleWrap}>
            <span className={styles.projectsHeaderIcon}>
              <i className="bi bi-diagram-2" style={{ fontSize: "12px", color: "#f20d0d" }} aria-hidden />
            </span>
            <p className={styles.projectsTitle}>
              <span className={styles.projectsTitleGray}>PROJECTS </span>
              <span className={styles.projectsTitleRed}>(2 Jobs)</span>
            </p>
          </span>
          <span className={styles.projectsRightGroup}>
            <span className={styles.projectsCardTotal}>
              Total {formatMoney(jobsTotal)}
            </span>
            <span className={styles.projectsToggle} aria-hidden>
              <i className={`bi ${projectsVisible ? "bi-chevron-down" : "bi-chevron-right"}`} />
            </span>
          </span>
        </button>

        {/* Jobs — เมื่อโชว์จะลอยเหนือ card อื่น */}
        <div
          id="opportunity-flow-projects"
          className={`${styles.jobsSection} ${projectsVisible ? styles.jobsSectionFloating : ""}`}
          hidden={!projectsVisible}
        >
        {JOBS_DATA.map((job, index) => (
          <div
            key={job.id}
            className={index > 0 ? `${styles.jobRow} ${styles.jobRow2}` : styles.jobRow}
          >
            <div className={styles.jobRowHeader}>
              <div className={styles.jobTitleWrap}>
                <p className={styles.jobIdLabel}>
                  <span className={styles.jobIdLabelBold}>{job.id}: </span>
                  <span className={styles.jobIdLabelBold}>{job.name}</span>
                </p>
                <p className={styles.jobPhase}>{job.phase}</p>
              </div>
              <div className={styles.jobHeaderRight}>
                <div className={styles.jobValueSummary}>
                  <span className={styles.jobValueSummaryLabel}>
                    Total Value
                    <i className="bi bi-arrow-down-up" aria-hidden />
                  </span>
                  <span className={styles.jobValueSummaryTotal}>{formatMoney(job.totalValue)}</span>
                  <span className={styles.jobValueSummaryPaid}>{formatMoney(job.paid)} Paid</span>
                  <span className={styles.jobValueSummaryRemaining}>{formatMoney(job.remaining)} Remaining</span>
                </div>
                <div className={job.pctRed ? `${styles.jobPct} ${styles.jobPctRed}` : `${styles.jobPct} ${styles.jobPctGray}`}>
                  {job.pct}%
                </div>
              </div>
            </div>
            <div className={styles.progressBar}>
              <div className={styles.progressBarFill} style={{ width: `${job.pct}%` }} />
            </div>
            <div className={styles.miniStepFlow}>
              <div className={styles.miniStep}>
                <div className={styles.miniStepContent}>
                  <i className="bi bi-check-circle" style={{ fontSize: "12px", color: "#f20d0d" }} aria-hidden />
                  <span className={`${styles.miniStepLabel} ${styles.miniStepLabelMuted}`}>Contracted</span>
                </div>
                <span className={styles.miniStepDate}>{index === 0 ? "Oct 12" : "Oct 14"}</span>
              </div>
              <div className={styles.miniStep}>
                <div className={styles.miniStepContent}>
                  <div className={`${styles.miniStepDot} ${index === 0 ? styles.miniStepDotActive : styles.miniStepDotInactive}`} />
                  <span className={`${styles.miniStepLabel} ${index === 0 ? styles.miniStepLabelBold : styles.miniStepLabelMuted}`}>
                    {index === 0 ? "Start" : "Contracted"}
                  </span>
                </div>
                <span className={`${styles.miniStepDate} ${index === 0 ? styles.miniStepDateDim : ""}`}>
                  {index === 0 ? "Oct 15" : "--"}
                </span>
              </div>
              <div className={`${styles.miniStep} ${styles.miniStepOpacity}`}>
                <div className={styles.miniStepContent}>
                  <div className={`${styles.miniStepDot} ${styles.miniStepDotInactive}`} />
                  <span className={`${styles.miniStepLabel} ${styles.miniStepLabelMuted}`}>End</span>
                </div>
                <span className={styles.miniStepDate}>--</span>
              </div>
              <div className={`${styles.miniStep} ${styles.miniStepOpacity}`}>
                <div className={styles.miniStepContent}>
                  <div className={`${styles.miniStepDot} ${styles.miniStepDotInactive}`} />
                  <span className={`${styles.miniStepLabel} ${styles.miniStepLabelMuted}`}>Closed</span>
                </div>
                <span className={styles.miniStepDate}>--</span>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>

      {/* Footer: Avatars + VIEW FULL TIMELINE */}
      <div className={styles.footerAction}>
        <div className={styles.avatars}>
          <div className={styles.avatar}>
            <img src="https://i.pravatar.cc/48?img=33" alt="Owner" width={24} height={24} />
          </div>
          <div className={styles.avatarOverlap}>
            <div className={styles.avatar}>
              <img src="https://i.pravatar.cc/48?img=44" alt="Contributor" width={24} height={24} />
            </div>
          </div>
        </div>
        <button type="button" className={styles.viewTimelineBtn}>
          <span className={styles.viewTimelineText}>VIEW FULL TIMELINE</span>
          <i className="bi bi-arrow-right-short" style={{ fontSize: "1.25rem", color: "#f20d0d" }} aria-hidden />
        </button>
      </div>
    </section>
  );
}
