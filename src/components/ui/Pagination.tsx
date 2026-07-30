"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
}

/** فهرست صفحات را با علامت «...» برای مجموعه‌های بزرگ کوتاه می‌کند */
function buildPageList(current: number, total: number): (number | "...")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const pages = new Set<number>([1, 2, total - 1, total, current - 1, current, current + 1]);
  const sorted = [...pages].filter((p) => p >= 1 && p <= total).sort((a, b) => a - b);

  const result: (number | "...")[] = [];
  sorted.forEach((p, i) => {
    if (i > 0 && p - sorted[i - 1] > 1) result.push("...");
    result.push(p);
  });
  return result;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const go = (page: number) => {
    if (page < 1 || page > totalPages) return;
    onPageChange?.(page);
  };

  const pages = buildPageList(currentPage, totalPages);

  return (
    <div className="pagination">
      <button disabled={currentPage <= 1} onClick={() => go(currentPage - 1)}>
        <ChevronRight size={14} />
      </button>
      {pages.map((p, i) =>
        p === "..." ? (
          <button key={`ellipsis-${i}`} disabled>
            ...
          </button>
        ) : (
          <button key={p} className={p === currentPage ? "active" : ""} onClick={() => go(p)}>
            {p.toLocaleString("fa-IR")}
          </button>
        )
      )}
      <button disabled={currentPage >= totalPages} onClick={() => go(currentPage + 1)}>
        <ChevronLeft size={14} />
      </button>
    </div>
  );
}
