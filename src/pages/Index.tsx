
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <div className="space-y-4 max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Bienvenue sur Spirit Link
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
          Rejoignez notre communauté chrétienne vibrante. Partagez votre foi,
          échangez des prières et grandissez ensemble dans la grâce.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Button size="lg" onClick={() => navigate("/login")}>
            Se connecter
          </Button>
          <Button size="lg" variant="outline" onClick={() => navigate("/login")}>
            Créer un compte
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
