"use client";

const tasks = [
  { title: "TEst", done: false, avatar: "https://i.pravatar.cc/150?u=unassigned", alt: "Unassigned" },
  { title: "Follow-up call", done: false, avatar: "https://i.pravatar.cc/150?u=david", alt: "David M." },
  { title: "Send estimate PDF", done: true, avatar: "https://i.pravatar.cc/150?u=unassigned2", alt: "Unassigned" },
];

export default function TasksList() {
  return (
    <ul className="d4-tasks-list list-unstyled mb-0">
      {tasks.map((t, i) => (
        <li key={i} className="d4-task-item">
          <span className={`d4-task-check ${t.done ? "done" : ""}`} aria-hidden>
            {t.done ? (
              <i className="bi bi-check-circle-fill text-success" style={{ fontSize: "1rem" }} />
            ) : (
              <i className="bi bi-circle" style={{ fontSize: "1rem" }} />
            )}
          </span>
          <span className="d4-task-title">{t.title}</span>
          <img
            src={t.avatar}
            alt=""
            className="d4-task-avatar rounded-circle object-fit-cover"
            title={t.alt}
            width={20}
            height={20}
          />
        </li>
      ))}
    </ul>
  );
}
