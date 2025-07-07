import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!message.trim()) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, введите сообщение",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Имитация отправки письма
    setTimeout(() => {
      toast({
        title: "Сообщение отправлено!",
        description:
          "Ваше сообщение успешно отправлено на galya.panina01@mail.ru",
      });
      setMessage("");
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <Card className="w-full max-w-2xl border-0 shadow-none animate-fade-in">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-black rounded-full mb-6">
              <Icon name="Mail" size={24} className="text-white" />
            </div>
            <h1 className="text-3xl font-medium text-black mb-2">
              Связаться с нами
            </h1>
            <p className="text-gray-600">Оставьте ваше сообщение</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Textarea
                placeholder="Введите ваше сообщение..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-[150px] resize-none border-gray-200 focus:border-black focus:ring-0 text-base"
                disabled={isLoading}
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-black hover:bg-gray-800 text-white py-3 text-base font-medium transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Отправка...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Icon name="Send" size={18} />
                  Отправить
                </div>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
