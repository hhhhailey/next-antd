import React from "react";
import styled from "styled-components";
import Image from "next/image";
import CheckArrowSvg from "assets/icons/arrow-check.svg";
import CssFilterConverter from "css-filter-converter";

interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  hasBg?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({ hasBg, ...props }) => {
  const hexTofilter = CssFilterConverter.hexToFilter(
    hasBg ? "#fff" : "#3f1294"
  );

  return (
    <StyledCheckbox checked={props.checked}>
      <input {...props} type="checkbox" hidden />
      {props.checked && <CheckArrowSvg />}
    </StyledCheckbox>
  );
};

export default Checkbox;

Checkbox.defaultProps = {
  hasBg: true,
};

const StyledCheckbox = styled.label<{ checked?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  background-color: ${(p) => (p.checked ? "#3f1294" : "#CBCEDC")};
  border-radius: 50%;
  cursor: pointer;

  svg {
    path {
      fill: #fff;
    }
  }
`;

const StyledCheckedIcon = styled(Image)<{ filter?: string }>`
  object-fit: scale-down;
  filter: ${(p) => p.filter};
`;
