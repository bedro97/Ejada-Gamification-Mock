import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: LucideIcon;
}

export const StatsCard = ({ title, value, change, trend, icon: Icon }: StatsCardProps) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center justify-between space-y-0 pb-2">
          <p className="text-sm font-medium text-muted-foreground">
            {title}
          </p>
          <Icon className="h-4 w-4 text-muted-foreground" />
        </div>
        <div>
          <div className="text-2xl font-bold">{value}</div>
          <p className={`text-xs ${
            trend === "up" ? "text-green-600" : "text-red-600"
          }`}>
            {change} from last month
          </p>
        </div>
      </CardContent>
    </Card>
  );
};