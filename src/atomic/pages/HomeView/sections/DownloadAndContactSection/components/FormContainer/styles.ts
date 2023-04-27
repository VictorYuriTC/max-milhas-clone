import { Colors } from "@/foundations/Colors/Colors";
import styled from "styled-components";

export const ComponentContainer = styled.div`
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Input = styled.input`
  all: unset;
  padding: 16px;
  border-radius: 12px;

  color: ${Colors.GRAY_400};
  border: 1px solid ${Colors.GRAY_800};

  &:hover {
    color: ${Colors.GRAY_200};
    border-color: ${Colors.GRAY_200};
  }

  &::placeholder {
    color: ${Colors.GRAY_400};
    font-size: calc(15px + 0.25vw);
  }
`;

export const Button = styled.button`
  all: unset;
  padding: 16px;
  text-align: center;
  background-color: ${Colors.SUCCESS_LIGHT};
  border-radius: 12px;

  &:hover {
    background-color: ${Colors.SUCCESS};
  }
`;
