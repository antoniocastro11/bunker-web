import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <div className="w-full h-screen">
      <div className="grid grid-cols-2 min-h-screen">
        <div className="p-10 border flex flex-col justify-center">
          imagem vai aqui
        </div>
        <div className="p-10 flex flex-col justify-center">
          <div className="mb-10 text-center text-2xl font-bold">
            <h1>bem vindo de volta,</h1>
            <h2>suas ideias sentiram sua falta</h2>
          </div>

          <div className="flex flex-col gap-4 mb-6">
            <Input placeholder="email" />
            <Input placeholder="senha" type="password" />
            <Button>Entrar</Button>
          </div>

          <div className=" mt-10 text-center">
            <Button variant="ghost"> não tem uma conta? registre-se</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
