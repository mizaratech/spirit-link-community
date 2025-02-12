
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Prayer = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Demandes de prière</h1>
          <p className="text-muted-foreground">
            Partagez vos intentions et priez pour les autres
          </p>
        </div>
        <Button>Nouvelle demande</Button>
      </div>
      <div className="grid gap-4">
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Prière pour la guérison</CardTitle>
                  <CardDescription>Par Marie • il y a 1h</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  Je prie
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                "Seigneur, je vous prie pour la guérison de ma mère qui est
                malade..."
              </p>
              <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                <span>12 personnes prient</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Prayer;
