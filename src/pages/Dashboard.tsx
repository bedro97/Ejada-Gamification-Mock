import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Award, TrendingUp, Star, Target } from "lucide-react";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { ProgressChart } from "@/components/dashboard/ProgressChart";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Users",
      value: "2,847",
      change: "+12.3%",
      trend: "up" as const,
      icon: Users,
    },
    {
      title: "Badges Awarded",
      value: "1,249",
      change: "+8.7%",
      trend: "up" as const,
      icon: Award,
    },
    {
      title: "Active Challenges",
      value: "23",
      change: "+2",
      trend: "up" as const,
      icon: Target,
    },
    {
      title: "Avg User Level",
      value: "4.2",
      change: "+0.3",
      trend: "up" as const,
      icon: TrendingUp,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">
          Monitor your gamification platform performance
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ProgressChart />
        </div>
        <div>
          <RecentActivity />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5" />
              Top Badges
            </CardTitle>
            <CardDescription>Most awarded badges this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "First Steps", count: 145, type: "bronze" },
                { name: "Team Player", count: 89, type: "silver" },
                { name: "Goal Crusher", count: 67, type: "gold" },
                { name: "Streak Master", count: 45, type: "platinum" },
              ].map((badge, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Star className="h-4 w-4 text-primary" />
                    <span className="font-medium">{badge.name}</span>
                    <Badge variant="secondary">{badge.type}</Badge>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {badge.count} awarded
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Platform Health</CardTitle>
            <CardDescription>System status and metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Badge Processing</span>
                <Badge variant="default">Healthy</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>User Analytics</span>
                <Badge variant="default">Operational</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Leaderboard Updates</span>
                <Badge variant="default">Active</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>API Response Time</span>
                <Badge variant="secondary">142ms</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;