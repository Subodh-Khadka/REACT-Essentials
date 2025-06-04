export default function Tabs({ children, buttons, ButtonContainer = "menu" }) {
  //   const ButtonContainer = ButtonsContainer;
  return (
    <ButtonContainer>
      <menu>{buttons}</menu>
      {children}
    </ButtonContainer>
  );
}
