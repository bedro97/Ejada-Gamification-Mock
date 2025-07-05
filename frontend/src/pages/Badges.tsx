import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Star, Edit, Trash2 } from "lucide-react";
import { BadgeForm } from "@/components/badges/BadgeForm";
import { BadgeCard } from "@/components/badges/BadgeCard";
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const Badges = () => {
  const fetchBadges = async () => {
    const res = await fetch(`${process.env.VITE_API_URL}/badges`);
    return res.json();
  };

  const { data: badges = [], isLoading } = useQuery({
    queryKey: ['badges'],
    queryFn: fetchBadges,
  });

  const queryClient = useQueryClient();
  const createBadge = useMutation({
    mutationFn: async (badge) => {
      console.log('Creating badge:', badge);
      const res = await fetch(`${process.env.VITE_API_URL}/badges`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(badge),
      });
      console.log('Response:', res);
      return res.json();
    },
    onSuccess: () => {
      console.log('Badge created successfully');
      queryClient.invalidateQueries({ queryKey: ['badges'] });
    },
    onError: (error) => {
      console.error('Error creating badge:', error);
    },
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedBadge, setSelectedBadge] = useState(null);

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
            console.log('onSave called with:', badgeData);
            createBadge.mutate(badgeData);
            setIsFormOpen(false);
            setSelectedBadge(null);
          }}
        />
      )}
    </div>
  );
};

export default Badges;