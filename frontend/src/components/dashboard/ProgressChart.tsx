import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export const ProgressChart = () => {
  const data = [
    { name: "Jan", users: 400, badges: 240 },
    { name: "Feb", users: 500, badges: 300 },
    { name: "Mar", users: 620, badges: 380 },
    { name: "Apr", users: 780, badges: 450 },
    { name: "May", users: 920, badges: 520 },
    { name: "Jun", users: 1100, badges: 650 },
    { name: "Jul", users: 1280, badges: 780 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Platform Growth</CardTitle>
        <CardDescription>User engagement and badge awards over time</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="users" 
              stroke="hsl(var(--primary))" 
              strokeWidth={2}
              name="Active Users"
            />
            <Line 
              type="monotone" 
              dataKey="badges" 
              stroke="hsl(var(--secondary))" 
              strokeWidth={2}
              name="Badges Awarded"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};