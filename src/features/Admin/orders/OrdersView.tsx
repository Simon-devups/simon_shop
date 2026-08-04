"use client";

import { useState } from "react";
import { Download, X } from "lucide-react";
import PageHeader from "@/components/admin/ui/PageHeader";
import OrdersKpiRow from "./OrdersKpiRow";
import OrdersTable from "./OrdersTable";
import OrderTimeline from "./OrderTimeline";
import OrderCustomerCard from "./OrderCustomerCard";
import OrderInvoiceCard from "./OrderInvoiceCard";
import type { RecentOrder } from "@/constants/types";

export default function OrdersView({ orders }: { orders: RecentOrder[] }) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedOrder = orders.find((o) => o.id === selectedId) ?? null;

  return (
    <div>
      <PageHeader
        title="سفارش‌ها"
        subtitle="مدیریت و پیگیری سفارش‌های ثبت شده"
        actions={
          <button className="btn btn-secondary">
            <Download size={15} /> خروجی Excel
          </button>
        }
      />

      <div style={{ marginBottom: 18 }}>
        <OrdersKpiRow orders={orders} />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: selectedOrder ? "1fr 340px" : "1fr",
          gap: 18,
          alignItems: "start",
        }}
      >
        <div className="table-wrap fade-up">
          <OrdersTable orders={orders} selectedId={selectedId} onSelect={setSelectedId} />
        </div>

        {selectedOrder && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button className="icon-btn" onClick={() => setSelectedId(null)} title="بستن">
                <X size={16} />
              </button>
            </div>
            <OrderTimeline order={selectedOrder} />
            <OrderCustomerCard order={selectedOrder} />
            <OrderInvoiceCard order={selectedOrder} />
          </div>
        )}
      </div>
    </div>
  );
}
