import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface LeaderboardFiltersProps {
  timeframe: string;
  category: string;
  onTimeframeChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
}

export const LeaderboardFilters = ({
  timeframe,
  category,
  onTimeframeChange,
  onCategoryChange
}: LeaderboardFiltersProps) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex gap-6">
          <div className="space-y-2">
            <Label>Time Period</Label>
            <Select value={timeframe} onValueChange={onTimeframeChange}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="quarter">This Quarter</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
                <SelectItem value="all">All Time</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label>Category</Label>
            <Select value={category} onValueChange={onCategoryChange}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="points">Total Points</SelectItem>
                <SelectItem value="badges">Badge Count</SelectItem>
                <SelectItem value="level">User Level</SelectItem>
                <SelectItem value="streak">Login Streak</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};