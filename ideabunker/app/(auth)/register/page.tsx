import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function RegisterPage() {
  return (
    <div className="w-full h-screen">
      <div className="grid grid-cols-2 min-h-screen">
        <div className="p-10 border flex flex-col justify-center">
          imagem vai aqui
        </div>
        <div className="p-10 flex flex-col justify-center">
          <div className="text-2xl font-bold text-center mb-10">
            <h1>o melhor lugar</h1>
            <h2>pra não deixar nenhuma ideia pra trás</h2>
          </div>

          <div className="flex flex-col gap-4 mb-6">
            <Input placeholder="nome completo" />
            <Input placeholder="email" />
            <Input placeholder="senha" type="password" />
            <Button>Entrar</Button>
          </div>

          <div className="text-center mt-10">
            <Button variant="ghost"> já tem uma conta? entrar</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
