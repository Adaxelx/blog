import { formatDate } from "@/lib/date";
import { Typography } from "./typography";

export const Date = ({ date }: { date: string }) => {
  return (
    <Typography as="time" className="self-end" variant="secondary">
      {formatDate(date)}
    </Typography>
  );
};
