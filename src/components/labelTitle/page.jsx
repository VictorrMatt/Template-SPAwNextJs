"use client";

import { Line1, Line2, Line3 } from "@/app/(home)/styles";
import { Holder, Paragraph } from "./styles";

function LabelTitle(props) {
  return (
    <Holder>
      <Line1 />
      <Paragraph {...props}>{props.fw}</Paragraph>
      {props.sw && (
        <>
          <Line1 />
          <Paragraph {...props}>{props.sw}</Paragraph>
        </>
      )}
      {props.large_line ? <Line2 /> : <Line3 />}
    </Holder>
  );
}

export default LabelTitle;
