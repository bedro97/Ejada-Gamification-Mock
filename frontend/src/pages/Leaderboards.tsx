import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Trophy, Medal, Award, Star, Crown, Target } from "lucide-react";
import { LeaderboardTable } from "@/components/leaderboards/LeaderboardTable";
import { LeaderboardFilters } from "@/components/leaderboards/LeaderboardFilters";
import { useQuery } from '@tanstack/react-query';

const fetchLeaderboard = async (period: string) => {
  const res = await fetch(`http://localhost:8080/api/leaderboard?period=${period}`);
  return res.json();
};

const Leaderboards = () => {
  const [timeframe, setTimeframe] = useState("month");
  const [category, setCategory] = useState("points");

  const { data: leaderboard = [], isLoading } = useQuery({
    queryKey: ['leaderboard', timeframe],
    queryFn: () => fetchLeaderboard(timeframe),
  });

  // Optionally, you can map leaderboard data to include rank, etc.
  const leaderboardWithRank = leaderboard.map((user: any, idx: number) => ({
    ...user,
    rank: idx + 1,
    change: 0, // Placeholder, backend can provide this in the future
    avatar: "",
    badges: user.badges ?? 0,
    level: user.level ?? 1,
  }));

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
          <LeaderboardTable users={leaderboardWithRank} category={category} />
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
                {leaderboardWithRank.slice(0, 3).map((user, index) => {
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

          {/* Competition Stats and Rising Stars can be enhanced to use leaderboard data */}
        </div>
      </div>
    </div>
  );
};

export default Leaderboards;