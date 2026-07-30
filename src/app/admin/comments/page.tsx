import CommentsView from "@/features/Admin/comments/CommentsView";
import { comments } from "@/lib/mock-data";

export default function CommentsPage() {
  return <CommentsView comments={comments} />;
}
