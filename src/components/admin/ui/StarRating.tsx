import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  max?: number;
  size?: number;
}

export default function StarRating({ rating, max = 5, size = 13 }: StarRatingProps) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {Array.from({ length: max }, (_, i) => i + 1).map((i) => (
        <Star
          key={i}
          size={size}
          fill={i <= rating ? "#ffa502" : "transparent"}
          color={i <= rating ? "#ffa502" : "#dcdde1"}
        />
      ))}
    </div>
  );
}
