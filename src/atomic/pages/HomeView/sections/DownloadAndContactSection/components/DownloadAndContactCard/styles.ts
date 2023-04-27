import { Colors } from "@/foundations/Colors/Colors";
import styled from "styled-components";

export const ComponentContainer = styled.div`
  border: 1px solid ${Colors.GRAY_800};
  padding: 24px;
  border-radius: 20px;
`;

export const Title = styled.h2`
  color: ${Colors.BLACK};
`;

export const Description = styled.p`
  padding-top: 12px;
  color: ${Colors.DARK};
`;
