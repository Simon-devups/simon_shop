"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Info,
  Image as ImageIcon,
  DollarSign,
  ListTree,
  FolderTree,
  Search,
  Truck,
  Save,
  Eye,
} from "lucide-react";
import PageHeader from "@/components/admin/ui/PageHeader";
import VerticalTabs, { type VerticalTabItem } from "@/components/admin/ui/VerticalTabs";
import CompletionTipBanner from "./CompletionTipBanner";
import BasicInfoSection from "./BasicInfoSection";
import ImagesSection from "./ImagesSection";
import PriceInventorySection from "./PriceInventorySection";
import SpecsSection from "./SpecsSection";
import CategoryBrandSection from "./CategoryBrandSection";
import SeoSection from "./SeoSection";
import ShippingSection from "./ShippingSection";

const tabs: VerticalTabItem[] = [
  { id: "basic", label: "اطلاعات اصلی", icon: Info },
  { id: "images", label: "تصاویر", icon: ImageIcon },
  { id: "price", label: "قیمت و موجودی", icon: DollarSign },
  { id: "specs", label: "مشخصات فنی", icon: ListTree },
  { id: "category", label: "دسته‌بندی و برند", icon: FolderTree },
  { id: "seo", label: "سئو", icon: Search },
  { id: "shipping", label: "حمل و نقل", icon: Truck },
];

export default function ProductCreateView() {
  const [active, setActive] = useState("basic");
  const router = useRouter();

  const renderSection = () => {
    switch (active) {
      case "basic":
        return <BasicInfoSection />;
      case "images":
        return <ImagesSection />;
      case "price":
        return <PriceInventorySection />;
      case "specs":
        return <SpecsSection />;
      case "category":
        return <CategoryBrandSection />;
      case "seo":
        return <SeoSection />;
      case "shipping":
        return <ShippingSection />;
      default:
        return null;
    }
  };

  return (
    <div>
      <PageHeader
        title="افزودن محصول جدید"
        subtitle="اطلاعات محصول را در بخش‌های زیر تکمیل کنید"
        actions={
          <>
            <button className="btn btn-secondary" onClick={() => router.push("/admin/products")}>
              انصراف
            </button>
            <button className="btn btn-secondary">
              <Eye size={15} /> پیش‌نمایش
            </button>
            <button className="btn btn-primary" onClick={() => router.push("/admin/products")}>
              <Save size={16} /> ذخیره محصول
            </button>
          </>
        }
      />

      <CompletionTipBanner />

      <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 18, alignItems: "start" }}>
        <VerticalTabs items={tabs} active={active} onChange={setActive} heading="بخش‌های محصول" />
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>{renderSection()}</div>
      </div>
    </div>
  );
}
