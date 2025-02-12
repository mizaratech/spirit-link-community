
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Témoignages</h1>
          <p className="text-muted-foreground">
            Partagez vos expériences spirituelles
          </p>
        </div>
        <Button>Partager un témoignage</Button>
      </div>
      <div className="grid gap-6">
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle>Mon chemin de foi</CardTitle>
              <CardDescription>Par Pierre • il y a 3j</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                "Je voudrais partager avec vous comment Dieu a transformé ma vie..."
              </p>
              <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                <span>23 commentaires</span>
                <span>156 lectures</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
