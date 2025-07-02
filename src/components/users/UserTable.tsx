import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Eye, Award, TrendingUp } from "lucide-react";

interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
  level: number;
  points: number;
  badges: number;
  joinDate: string;
  lastActive: string;
  status: string;
  progress: number;
}

interface UserTableProps {
  users: User[];
  onUserSelect: (user: User) => void;
}

export const UserTable = ({ users, onUserSelect }: UserTableProps) => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>Level</TableHead>
            <TableHead>Points</TableHead>
            <TableHead>Badges</TableHead>
            <TableHead>Progress</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Last Active</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <span className="font-medium">{user.level}</span>
                </div>
              </TableCell>
              <TableCell>
                <span className="font-medium">{user.points.toLocaleString()}</span>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  <Award className="h-4 w-4 text-primary" />
                  <span>{user.badges}</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="space-y-1">
                  <Progress value={user.progress} className="w-16" />
                  <span className="text-xs text-muted-foreground">{user.progress}%</span>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant={user.status === "active" ? "default" : "secondary"}>
                  {user.status}
                </Badge>
              </TableCell>
              <TableCell>
                <span className="text-sm text-muted-foreground">
                  {new Date(user.lastActive).toLocaleDateString()}
                </span>
              </TableCell>
              <TableCell className="text-right">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onUserSelect(user)}
                >
                  <Eye className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};