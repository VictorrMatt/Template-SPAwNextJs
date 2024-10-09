"use client";

import { Main, Div, H3 } from "./styles";
import { Paragraph } from "../labelTitle/styles";
import LabelTitle from "@/components/labelTitle/page";

function LabelTag(props) {
  return (
    <Main>
      {props.label && <LabelTitle fw={props.label} />}
      <Div>
        <H3>{props.tech}</H3>
        <Paragraph>{props.level}</Paragraph>
      </Div>
    </Main>
  );
}

export default LabelTag;
