"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Download, Upload } from "lucide-react";
import PageHeader from "@/components/admin/ui/PageHeader";
import Pagination from "@/components/admin/ui/Pagination";
import ProductsToolbar from "./ProductsToolbar";
import ProductsBulkActionsBar from "./ProductsBulkActionsBar";
import ProductsTable from "./ProductsTable";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/constants/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";


export default function ProductsView({ products ,pages }: { pages:number , products: Product[] }) {
  const [selected, setSelected] = useState<string[]>([]);
  // const [currentPage,setCurrentPage] = useState(1)
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("page", page.toString());

    router.push(`${pathname}?${params.toString()}`);
  };

  const toggle = (id: string) =>
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  const toggleAll = () =>
    setSelected(selected.length === products.length ? [] : products.map((p) => p.id));

  return (
    <div>
      <PageHeader
        title="محصولات"
        subtitle={
          <>
            مدیریت محصولات فروشگاه — <span className="num-fa">{formatPrice(products.length)}</span> محصول
          </>
        }
        actions={
          <>
            <button className="btn btn-secondary">
              <Upload size={15} /> ورود گروهی
            </button>
            <button className="btn btn-secondary">
              <Download size={15} /> خروجی Excel
            </button>
            <Link href="/admin/products/new" className="btn btn-primary">
              <Plus size={16} /> افزودن محصول
            </Link>
          </>
        }
      />

      {selected.length > 0 && (
        <ProductsBulkActionsBar count={selected.length} onCancel={() => setSelected([])} />
      )}

      <div className="table-wrap fade-up">
        <ProductsToolbar />
        <ProductsTable products={products} selected={selected} onToggle={toggle} onToggleAll={toggleAll} />
        <div className="table-footer">
          <div>
            نمایش <strong className="num-fa">۱</strong> تا{" "}
            <strong className="num-fa">{products.length}</strong> از{" "}
            <strong className="num-fa">{formatPrice(1248)}</strong> نتیجه
          </div>
          <Pagination currentPage={Number(searchParams.get("page") ?? 1)} totalPages={pages} onPageChange={handlePageChange}/>
        </div>
      </div>
    </div>
  );
}
