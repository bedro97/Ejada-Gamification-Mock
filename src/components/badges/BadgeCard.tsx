import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, Star } from "lucide-react";

interface BadgeData {
  id: number;
  name: string;
  description: string;
  type: string;
  criteria: string;
  points: number;
  awarded: number;
  icon: string;
  active: boolean;
}

interface BadgeCardProps {
  badge: BadgeData;
  onEdit: (badge: BadgeData) => void;
}

export const BadgeCard = ({ badge, onEdit }: BadgeCardProps) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "bronze": return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200";
      case "silver": return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";
      case "gold": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "platinum": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <Card className={`relative ${!badge.active ? "opacity-60" : ""}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{badge.icon}</span>
            <div>
              <CardTitle className="text-lg">{badge.name}</CardTitle>
              <Badge className={getTypeColor(badge.type)} variant="secondary">
                {badge.type}
              </Badge>
            </div>
          </div>
          <div className="flex gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onEdit(badge)}
              className="h-8 w-8"
            >
              <Edit className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-destructive hover:text-destructive"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-4">
          {badge.description}
        </CardDescription>
        
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Criteria:</span>
            <span className="font-medium">{badge.criteria}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Points:</span>
            <span className="font-medium">{badge.points}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Awarded:</span>
            <span className="font-medium">{badge.awarded} times</span>
          </div>
        </div>

        {!badge.active && (
          <Badge variant="outline" className="mt-3">
            Inactive
          </Badge>
        )}
      </CardContent>
    </Card>
  );
};