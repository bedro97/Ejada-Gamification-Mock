import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Trophy, Medal, Award, Star, Crown, Target } from "lucide-react";
import { LeaderboardTable } from "@/components/leaderboards/LeaderboardTable";
import { LeaderboardFilters } from "@/components/leaderboards/LeaderboardFilters";

const Leaderboards = () => {
  const [timeframe, setTimeframe] = useState("month");
  const [category, setCategory] = useState("points");

  const topUsers = [
    {
      id: 1,
      name: "Carol Davis",
      avatar: "",
      points: 2134,
      badges: 18,
      level: 12,
      rank: 1,
      change: 0,
    },
    {
      id: 2,
      name: "Alice Johnson",
      avatar: "",
      points: 1245,
      badges: 12,
      level: 8,
      rank: 2,
      change: 1,
    },
    {
      id: 3,
      name: "Bob Smith",
      avatar: "",
      points: 867,
      badges: 8,
      level: 5,
      rank: 3,
      change: -1,
    },
  ];

  const allUsers = [
    ...topUsers,
    {
      id: 4,
      name: "David Wilson",
      avatar: "",
      points: 456,
      badges: 5,
      level: 3,
      rank: 4,
      change: 2,
    },
    {
      id: 5,
      name: "Emma Brown",
      avatar: "",
      points: 389,
      badges: 4,
      level: 3,
      rank: 5,
      change: -1,
    },
    {
      id: 6,
      name: "Frank Miller",
      avatar: "",
      points: 312,
      badges: 3,
      level: 2,
      rank: 6,
      change: 0,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Leaderboards</h1>
        <p className="text-muted-foreground">
          Track top performers and competition rankings
        </p>
      </div>

      <LeaderboardFilters
        timeframe={timeframe}
        category={category}
        onTimeframeChange={setTimeframe}
        onCategoryChange={setCategory}
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <LeaderboardTable users={allUsers} category={category} />
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Crown className="h-5 w-5 text-yellow-500" />
                Top 3 Champions
              </CardTitle>
              <CardDescription>This {timeframe}'s winners</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topUsers.map((user, index) => {
                  const icons = [Crown, Trophy, Medal];
                  const colors = ["text-yellow-500", "text-gray-400", "text-amber-600"];
                  const Icon = icons[index];
                  
                  return (
                    <div key={user.id} className="flex items-center gap-3">
                      <Icon className={`h-5 w-5 ${colors[index]}`} />
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user.avatar} />
                        <AvatarFallback>
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{user.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {user.points} points
                        </p>
                      </div>
                      <Badge variant="secondary">#{user.rank}</Badge>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Competition Stats
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm">Active Competitors</span>
                  <span className="font-medium">2,847</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Avg Points</span>
                  <span className="font-medium">925</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Top Score</span>
                  <span className="font-medium">2,134</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Competition Rate</span>
                  <span className="font-medium">78%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                Rising Stars
              </CardTitle>
              <CardDescription>Biggest gainers this {timeframe}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { name: "David Wilson", gain: "+156 pts", rank: "+12" },
                  { name: "Emma Brown", gain: "+134 pts", rank: "+8" },
                  { name: "Frank Miller", gain: "+89 pts", rank: "+5" },
                ].map((user, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm font-medium">{user.name}</span>
                    <div className="text-right">
                      <p className="text-xs text-green-600">{user.gain}</p>
                      <p className="text-xs text-muted-foreground">{user.rank}</p>
                    </div>
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

export default Leaderboards;