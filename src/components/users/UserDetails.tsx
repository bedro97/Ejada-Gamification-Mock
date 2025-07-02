import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Award, Calendar, Mail, TrendingUp, Star } from "lucide-react";

interface UserDetailsProps {
  user: any;
  onBack: () => void;
}

export const UserDetails = ({ user, onBack }: UserDetailsProps) => {
  const userBadges = [
    { name: "First Steps", type: "bronze", earnedAt: "2024-01-20" },
    { name: "Team Player", type: "silver", earnedAt: "2024-02-15" },
    { name: "Goal Crusher", type: "gold", earnedAt: "2024-03-10" },
  ];

  const recentActivity = [
    { action: "Earned badge: Team Player", date: "2024-07-01", points: 25 },
    { action: "Completed challenge", date: "2024-06-28", points: 50 },
    { action: "Leveled up to Level 8", date: "2024-06-25", points: 100 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={onBack}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Users
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <Card>
            <CardHeader className="text-center">
              <Avatar className="h-24 w-24 mx-auto mb-4">
                <AvatarImage src={user.avatar} />
                <AvatarFallback className="text-2xl">
                  {user.name.split(' ').map((n: string) => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <CardTitle>{user.name}</CardTitle>
              <CardDescription>{user.email}</CardDescription>
              <Badge variant={user.status === "active" ? "default" : "secondary"}>
                {user.status}
              </Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>Joined {new Date(user.joinDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>Last active {new Date(user.lastActive).toLocaleDateString()}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <div>
                    <p className="text-2xl font-bold">{user.level}</p>
                    <p className="text-sm text-muted-foreground">Current Level</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-primary" />
                  <div>
                    <p className="text-2xl font-bold">{user.points.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">Total Points</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-2">
                  <Award className="h-4 w-4 text-primary" />
                  <div>
                    <p className="text-2xl font-bold">{user.badges}</p>
                    <p className="text-sm text-muted-foreground">Badges Earned</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Level Progress</CardTitle>
              <CardDescription>Progress toward next level</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Level {user.level}</span>
                  <span>Level {user.level + 1}</span>
                </div>
                <Progress value={user.progress} className="w-full" />
                <p className="text-sm text-muted-foreground">
                  {user.progress}% complete • {100 - user.progress}% remaining
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Earned Badges</CardTitle>
              <CardDescription>All badges earned by this user</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 md:grid-cols-2">
                {userBadges.map((badge, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                    <Award className="h-8 w-8 text-primary" />
                    <div>
                      <p className="font-medium">{badge.name}</p>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{badge.type}</Badge>
                        <span className="text-xs text-muted-foreground">
                          {new Date(badge.earnedAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest actions and achievements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b last:border-0">
                    <div>
                      <p className="font-medium">{activity.action}</p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(activity.date).toLocaleDateString()}
                      </p>
                    </div>
                    <Badge variant="outline">+{activity.points} pts</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};