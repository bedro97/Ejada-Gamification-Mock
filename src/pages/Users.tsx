import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, UserPlus, Award, TrendingUp, Star } from "lucide-react";
import { UserTable } from "@/components/users/UserTable";
import { UserDetails } from "@/components/users/UserDetails";

const Users = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  const users = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@example.com",
      avatar: "",
      level: 8,
      points: 1245,
      badges: 12,
      joinDate: "2024-01-15",
      lastActive: "2024-07-01",
      status: "active",
      progress: 78,
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob@example.com",
      avatar: "",
      level: 5,
      points: 867,
      badges: 8,
      joinDate: "2024-02-20",
      lastActive: "2024-06-30",
      status: "active",
      progress: 45,
    },
    {
      id: 3,
      name: "Carol Davis",
      email: "carol@example.com",
      avatar: "",
      level: 12,
      points: 2134,
      badges: 18,
      joinDate: "2023-11-10",
      lastActive: "2024-07-02",
      status: "active",
      progress: 92,
    },
    {
      id: 4,
      name: "David Wilson",
      email: "david@example.com",
      avatar: "",
      level: 3,
      points: 456,
      badges: 5,
      joinDate: "2024-05-01",
      lastActive: "2024-06-15",
      status: "inactive",
      progress: 23,
    },
  ];

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (selectedUser) {
    return (
      <UserDetails
        user={selectedUser}
        onBack={() => setSelectedUser(null)}
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">User Management</h1>
          <p className="text-muted-foreground">
            Monitor user progress and engagement
          </p>
        </div>
        <Button>
          <UserPlus className="h-4 w-4 mr-2" />
          Add User
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-primary/10 rounded-full">
                <TrendingUp className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">Avg Level</p>
                <p className="text-2xl font-bold">7.2</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-primary/10 rounded-full">
                <Star className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">Avg Points</p>
                <p className="text-2xl font-bold">925</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-primary/10 rounded-full">
                <Award className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">Avg Badges</p>
                <p className="text-2xl font-bold">10.8</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-primary/10 rounded-full">
                <TrendingUp className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">Active Users</p>
                <p className="text-2xl font-bold">2,437</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
      </div>

      <UserTable
        users={filteredUsers}
        onUserSelect={setSelectedUser}
      />
    </div>
  );
};

export default Users;