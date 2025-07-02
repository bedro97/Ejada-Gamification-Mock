import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Star, Edit, Trash2 } from "lucide-react";
import { BadgeForm } from "@/components/badges/BadgeForm";
import { BadgeCard } from "@/components/badges/BadgeCard";

const Badges = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedBadge, setSelectedBadge] = useState(null);

  const badges = [
    {
      id: 1,
      name: "First Steps",
      description: "Complete your first task",
      type: "bronze",
      criteria: "Complete 1 task",
      points: 10,
      awarded: 145,
      icon: "🚀",
      active: true,
    },
    {
      id: 2,
      name: "Team Player",
      description: "Collaborate with 5 different users",
      type: "silver",
      criteria: "Collaborate with 5 users",
      points: 25,
      awarded: 89,
      icon: "🤝",
      active: true,
    },
    {
      id: 3,
      name: "Goal Crusher",
      description: "Complete 10 goals in a month",
      type: "gold",
      criteria: "Complete 10 goals in 30 days",
      points: 50,
      awarded: 67,
      icon: "🎯",
      active: true,
    },
    {
      id: 4,
      name: "Streak Master",
      description: "Maintain a 30-day streak",
      type: "platinum",
      criteria: "30 consecutive days of activity",
      points: 100,
      awarded: 45,
      icon: "⚡",
      active: false,
    },
  ];

  const filteredBadges = badges.filter(badge =>
    badge.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    badge.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Badge Management</h1>
          <p className="text-muted-foreground">
            Create and manage achievement badges
          </p>
        </div>
        <Button onClick={() => setIsFormOpen(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Create Badge
        </Button>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search badges..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredBadges.map((badge) => (
          <BadgeCard
            key={badge.id}
            badge={badge}
            onEdit={(badge) => {
              setSelectedBadge(badge);
              setIsFormOpen(true);
            }}
          />
        ))}
      </div>

      {isFormOpen && (
        <BadgeForm
          badge={selectedBadge}
          onClose={() => {
            setIsFormOpen(false);
            setSelectedBadge(null);
          }}
          onSave={(badgeData) => {
            console.log("Saving badge:", badgeData);
            setIsFormOpen(false);
            setSelectedBadge(null);
          }}
        />
      )}
    </div>
  );
};

export default Badges;