
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Messages = () => {
  return (
    <div className="flex h-[80vh]">
      <Card className="w-80 flex-shrink-0 mr-4">
        <CardContent className="p-4">
          <Input placeholder="Rechercher une conversation..." className="mb-4" />
          <ScrollArea className="h-[calc(80vh-100px)]">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 hover:bg-accent rounded-lg cursor-pointer"
              >
                <Avatar>
                  <AvatarImage src={`https://github.com/shadcn.png`} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex-1 overflow-hidden">
                  <p className="font-medium">Contact {i}</p>
                  <p className="text-sm text-muted-foreground truncate">
                    Dernier message...
                  </p>
                </div>
              </div>
            ))}
          </ScrollArea>
        </CardContent>
      </Card>

      <Card className="flex-1">
        <CardContent className="p-4 h-full flex flex-col">
          <div className="flex items-center gap-3 p-3 border-b">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">Contact 1</p>
              <p className="text-sm text-muted-foreground">En ligne</p>
            </div>
          </div>

          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`flex ${
                    i % 2 === 0 ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[70%] p-3 rounded-lg ${
                      i % 2 === 0
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    <p>Message {i}</p>
                    <p className="text-xs mt-1 opacity-70">14:30</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="mt-4 flex gap-2">
            <Input placeholder="Écrivez votre message..." />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Messages;
