"use client";

import { useState } from "react";
import PageHeader from "@/components/ui/PageHeader";
import PillTabs from "@/components/ui/PillTabs";
import CommentsKpiRow from "./CommentsKpiRow";
import CommentItem from "./CommentItem";
import type { ProductComment } from "@/constants/types";

type FilterId = "all" | ProductComment["status"];

export default function CommentsView({ comments }: { comments: ProductComment[] }) {
  const [filter, setFilter] = useState<FilterId>("all");

  const tabItems = [
    { id: "all", label: "همه", count: comments.length },
    { id: "pending", label: "در انتظار", count: comments.filter((c) => c.status === "pending").length },
    { id: "approved", label: "تأیید شده", count: comments.filter((c) => c.status === "approved").length },
    { id: "rejected", label: "رد شده", count: comments.filter((c) => c.status === "rejected").length },
  ];

  const filtered = filter === "all" ? comments : comments.filter((c) => c.status === filter);

  return (
    <div>
      <PageHeader title="نظرات" subtitle="بررسی و مدیریت نظرات کاربران روی محصولات" />
      <div style={{ marginBottom: 18 }}>
        <CommentsKpiRow comments={comments} />
      </div>
      <div className="card fade-up">
        <div style={{ padding: "14px 20px 0" }}>
          <PillTabs items={tabItems} active={filter} onChange={(id) => setFilter(id as FilterId)} />
        </div>
        <div className="card-body" style={{ paddingTop: 4 }}>
          {filtered.map((c) => (
            <CommentItem key={c.id} comment={c} />
          ))}
        </div>
      </div>
    </div>
  );
}
