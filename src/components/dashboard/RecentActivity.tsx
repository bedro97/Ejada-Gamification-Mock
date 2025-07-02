import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      user: "Alice Johnson",
      action: "earned badge",
      target: "Team Player",
      time: "2 minutes ago",
      type: "badge",
    },
    {
      id: 2,
      user: "Bob Smith",
      action: "reached level",
      target: "5",
      time: "5 minutes ago",
      type: "level",
    },
    {
      id: 3,
      user: "Carol Davis",
      action: "earned badge",
      target: "Goal Crusher",
      time: "10 minutes ago",
      type: "badge",
    },
    {
      id: 4,
      user: "David Wilson",
      action: "joined platform",
      target: "",
      time: "15 minutes ago",
      type: "join",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest user achievements and actions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src="" />
                <AvatarFallback>
                  {activity.user.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm">
                  <span className="font-medium">{activity.user}</span>{" "}
                  {activity.action}{" "}
                  {activity.target && (
                    <Badge variant="secondary" className="text-xs">
                      {activity.target}
                    </Badge>
                  )}
                </p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};