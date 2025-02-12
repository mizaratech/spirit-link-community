
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Profile = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col items-center sm:flex-row sm:items-start gap-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
            <div className="text-center sm:text-left flex-1">
              <h1 className="text-2xl font-bold">Jean Pierre</h1>
              <p className="text-muted-foreground">@jeanpierre</p>
              <p className="mt-2 max-w-2xl">
                "La foi est la ferme assurance des choses qu'on espère, la
                démonstration de celles qu'on ne voit pas." - Hébreux 11:1
              </p>
              <Button className="mt-4" variant="outline">
                Éditer le profil
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="posts">
        <TabsList>
          <TabsTrigger value="posts">Publications</TabsTrigger>
          <TabsTrigger value="testimonials">Témoignages</TabsTrigger>
          <TabsTrigger value="prayers">Prières</TabsTrigger>
        </TabsList>
        <TabsContent value="posts" className="space-y-4">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardHeader>
                <CardDescription>Il y a 2h</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  "Que la grâce du Seigneur Jésus-Christ soit avec vous tous!"
                </p>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        <TabsContent value="testimonials">
          <p className="text-muted-foreground">Aucun témoignage pour le moment</p>
        </TabsContent>
        <TabsContent value="prayers">
          <p className="text-muted-foreground">
            Aucune demande de prière pour le moment
          </p>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Profile;
