import React from "react";
import styled from "styled-components";
import Image from "next/image";
import UnChecked from "assets/icons/un-checked.svg";

type SizeUnion = "sm" | "md";

interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: SizeUnion;
}

export default function Checkbox({ size, ...props }: CheckboxProps) {
  return (
    <StyledCheckbox>
      <input {...props} type={"checkbox"} hidden />
      {props.checked ? (
        <Image src={UnChecked} width={25} height={25} alt={"unchecked icon"} />
      ) : (
        <Image src={UnChecked} width={25} height={25} alt={"unchecked icon"} />
      )}
    </StyledCheckbox>
  );
}

const StyledCheckbox = styled.label``;
