import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeftIcon } from "lucide-react";

export default function CreateIdea() {
  return (
    <div className="w-full">
      <div className="p-4">
        <Button variant="ghost">
          <ArrowLeftIcon />
          Voltar
        </Button>
      </div>
      <div className="grid grid-cols-2">
        <div className="p-10 flex flex-col justify-center gap-4">
          <Input placeholder="nome do projeto" />
          <Textarea className="h-[400px]" placeholder="descrição do projeto" />
        </div>
        <div className="p-10 flex flex-col gap-4">
          <div className="flex flex-row gap-4">
            <Select>
              <SelectTrigger className="w-full max-w-48">
                <SelectValue placeholder="Selecione o tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Tipo</SelectLabel>
                  <SelectItem value="apple">web</SelectItem>
                  <SelectItem value="banana">mobile</SelectItem>
                  <SelectItem value="blueberry">jogo</SelectItem>
                  <SelectItem value="grapes">automação</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full max-w-48">
                <SelectValue placeholder="Selecione o status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Status</SelectLabel>
                  <SelectItem value="terminado">Terminado</SelectItem>
                  <SelectItem value="ativo">Ativo</SelectItem>
                  <SelectItem value="parado">Parado</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full flex gap-4 justify-center">
            <Button variant="destructive">Cancelar</Button>
            <Button>Confirmar</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
