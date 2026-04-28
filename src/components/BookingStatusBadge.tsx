import { Badge } from "@/components/ui/badge";

type Status = "pending" | "confirmed" | "completed" | "cancelled";

const statusStyles: Record<Status, string> = {
  pending: "bg-highlight/20 text-highlight-foreground border-highlight",
  confirmed: "bg-secondary/20 text-secondary border-secondary",
  completed: "bg-primary/10 text-primary border-primary",
  cancelled: "bg-destructive/20 text-destructive border-destructive",
};

const BookingStatusBadge = ({ status }: { status: Status }) => (
  <Badge variant="outline" className={statusStyles[status]}>
    {status.charAt(0).toUpperCase() + status.slice(1)}
  </Badge>
);

export default BookingStatusBadge;
