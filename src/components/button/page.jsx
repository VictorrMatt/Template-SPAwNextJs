import { Button, ButtonH3 } from "./styles";

function CardButton(props) {
  return (
    <Button>
      <ButtonH3>{props.button_text}</ButtonH3>
    </Button>
  );
}

export default CardButton;
