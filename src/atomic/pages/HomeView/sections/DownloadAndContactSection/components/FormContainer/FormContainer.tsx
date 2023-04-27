import { Button, ComponentContainer, Input } from "./styles";

export default function FormContainer() {
  return (
    <ComponentContainer>
      <Input placeholder="Digite seu email" />

      <Button>Quero me cadastrar</Button>
    </ComponentContainer>
  );
}
