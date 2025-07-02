import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, TrendingUp, TrendingDown, Minus } from "lucide-react";

interface User {
  id: number;
  name: string;
  avatar: string;
  points: number;
  badges: number;
  level: number;
  rank: number;
  change: number;
}

interface LeaderboardTableProps {
  users: User[];
  category: string;
}

export const LeaderboardTable = ({ users, category }: LeaderboardTableProps) => {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Trophy className="h-5 w-5 text-yellow-500" />;
      case 2: return <Medal className="h-5 w-5 text-gray-400" />;
      case 3: return <Award className="h-5 w-5 text-amber-600" />;
      default: return <span className="font-bold text-muted-foreground">#{rank}</span>;
    }
  };

  const getChangeIcon = (change: number) => {
    if (change > 0) return <TrendingUp className="h-4 w-4 text-green-600" />;
    if (change < 0) return <TrendingDown className="h-4 w-4 text-red-600" />;
    return <Minus className="h-4 w-4 text-muted-foreground" />;
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-16">Rank</TableHead>
            <TableHead>User</TableHead>
            <TableHead>Level</TableHead>
            <TableHead>Points</TableHead>
            <TableHead>Badges</TableHead>
            <TableHead>Change</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id} className={user.rank <= 3 ? "bg-muted/30" : ""}>
              <TableCell>
                <div className="flex items-center justify-center">
                  {getRankIcon(user.rank)}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <span className="font-medium">{user.name}</span>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="outline">{user.level}</Badge>
              </TableCell>
              <TableCell>
                <span className="font-bold">{user.points.toLocaleString()}</span>
              </TableCell>
              <TableCell>
                <span>{user.badges}</span>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  {getChangeIcon(user.change)}
                  <span className={`text-sm ${
                    user.change > 0 ? "text-green-600" : 
                    user.change < 0 ? "text-red-600" : "text-muted-foreground"
                  }`}>
                    {user.change > 0 ? `+${user.change}` : user.change === 0 ? "-" : user.change}
                  </span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};