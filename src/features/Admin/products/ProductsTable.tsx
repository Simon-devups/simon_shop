import { Eye, Edit3, Trash2, MoreHorizontal } from "lucide-react";
import Image from "next/image";
import Badge from "@/components/admin/ui/Badge";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/constants/types";
import { getProductsForAdmin } from "@/lib/Admin/products/getProducts";

interface ProductsTableProps {
  products: Product[];
  selected: string[];
  onToggle: (id: string) => void;
  onToggleAll: () => void;
}

export default function ProductsTable({products, selected, onToggle, onToggleAll }: ProductsTableProps) {
  const allSelected = selected.length === products.length && products.length > 0;

  return (
    <div style={{ overflowX: "auto" }}>
      <table className="t">
        <thead>
          <tr>
            <th style={{ width: 40 }}>
              <input type="checkbox" checked={allSelected} onChange={onToggleAll} />
            </th>
            <th>تصویر</th>
            <th>نام محصول</th>
            <th>دسته‌بندی</th>
            <th>برند</th>
            <th>قیمت</th>
            <th>موجودی</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>
                <input type="checkbox" checked={selected.includes(p.id)} onChange={() => onToggle(p.id)} />
              </td>
              <td>
                <div className="product-thumb">
                  <Image
                    src={p.imageUrl}
                    alt={p.name}
                    width={50}
                    height={50}
                  />
                </div>
              </td>
              <td>
                <div className="cell-strong" style={{ marginBottom: 2 }}>
                  {p.name}
                </div>
                <div className="cell-muted num-fa">{p.sku}-{p.id.toString()}</div>
              </td>
              <td>
                <Badge variant="neutral" dot={false}>
                  {p.category}
                </Badge>
              </td>
              <td>{p.brand}</td>
              <td>
                <span className="cell-amount num-fa">{formatPrice(p.price)}</span>
              </td>
              <td>
                {p.stock === 0 ? (
                  <Badge variant="danger">ناموجود</Badge>
                ) : p.stock < 30 ? (
                  <span style={{ color: "var(--warning)", fontWeight: 700, fontSize: 13 }} className="num-fa">
                    {formatPrice(p.stock)}
                  </span>
                ) : (
                  <span style={{ fontWeight: 600 }} className="num-fa">
                    {formatPrice(p.stock)}
                  </span>
                )}
              </td>
              <td>
                {p.status === true ? (
                  <Badge variant="success" pulse>
                    فعال
                  </Badge>
                ) : (
                  <Badge variant="danger">ناموجود</Badge>
                )}
              </td>
              <td>
                <div className="actions">
                  <button className="icon-btn" title="مشاهده">
                    <Eye size={14} />
                  </button>
                  <button className="icon-btn" title="ویرایش">
                    <Edit3 size={14} />
                  </button>
                  <button className="icon-btn" title="حذف" style={{ color: "var(--danger)" }}>
                    <Trash2 size={14} />
                  </button>
                  <button className="icon-btn" title="بیشتر">
                    <MoreHorizontal size={14} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
