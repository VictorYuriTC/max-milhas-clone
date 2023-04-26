import HeaderLink from "./HeaderLink/HeaderLink";

export default function Header() {
  return (
    <header className="">
      <HeaderLink href="/passagens-aereas">Passagens aéreas</HeaderLink>

      <HeaderLink href="/hotel">Hotéis</HeaderLink>

      <HeaderLink href="/cartao-presente">Cartão presente</HeaderLink>
    </header>
  );
}
