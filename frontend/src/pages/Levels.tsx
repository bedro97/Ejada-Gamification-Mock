import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const fetchLevels = async () => {
  const res = await fetch('/api/levels');
  return res.json();
};

const Levels = () => {
  const { data: levels = [], isLoading } = useQuery({
    queryKey: ['levels'],
    queryFn: fetchLevels,
  });

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-foreground">Levels</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {levels.map((level: any) => (
          <Card key={level.id}>
            <CardHeader>
              <CardTitle>{level.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Min Points: {level.minPoints}</p>
              <p>Tenant: {level.tenantId}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Levels; 