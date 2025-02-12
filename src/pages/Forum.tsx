
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Forum = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Forum</h1>
          <p className="text-muted-foreground">
            Rejoignez les discussions de notre communauté
          </p>
        </div>
        <Button>Nouvelle discussion</Button>
      </div>
      <div className="flex items-center gap-4 mb-6">
        <Input placeholder="Rechercher une discussion..." className="max-w-sm" />
      </div>
      <div className="grid gap-4">
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle>Discussion spirituelle #{i}</CardTitle>
              <CardDescription>Commencée par Jean Dupont • il y a 2h</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                <span>15 réponses</span>
                <span>203 vues</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Forum;
