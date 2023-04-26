import Link from "next/link";
import { ReactNode } from "react";
import { Label } from "./styles";
import { useRouter } from "next/router";

interface IProps {
  children: ReactNode;
  href: string;
}

export default function HeaderLink(props: IProps) {
  const { asPath } = useRouter();

  console.log(`asPath: ${asPath}`);
  console.log(`href: ${props.href}`);

  return (
    <Link href={props.href}>
      <Label isCurrentPath={asPath === props.href}>{props.children}</Label>
    </Link>
  );
}
