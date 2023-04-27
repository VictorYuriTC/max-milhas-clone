import { TbMenu2, TbUserCircle } from "react-icons/tb";
import { ComponentContainer, SvgContainer } from "./styles";

export default function UserMenuElement() {
  return (
    <ComponentContainer>
      <SvgContainer>
        <TbMenu2
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </SvgContainer>

      <SvgContainer>
        <TbUserCircle
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </SvgContainer>
    </ComponentContainer>
  );
}
