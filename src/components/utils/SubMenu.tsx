import Container from "./Container";
import TextBox from "./TextBox";
import Button from "./Button";
import { useCallback } from "react";

type SubMenuProps = {
  header: string;
  cancelBtnText: string;
  confirmBtnText: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const SubMenu = ({
  header,
  cancelBtnText,
  confirmBtnText,
  onCancel,
  onConfirm,
}: SubMenuProps) => {
  const confirmBtnHandler = useCallback(() => {
    onConfirm();
  }, [onConfirm]);

  const cancelBtnHandler = useCallback(() => {
    onCancel();
  }, [onCancel]);

  return (
    <Container classes="w-full h-full fixed inset-0 ">
      <Container classes="w-screen fixed inset-0 opacity-50 bg-black" />
      <Container classes="flex items-center w-screen h-266px bg-semi-dark fixed inset-0 justify-center my-auto flex-col">
        <Container
          classes={`flex items-center text-sm-custom text-silver mb-24px font-bold text-xl-custom justify-center `}
        >
          <TextBox
            classes={`text-ml-custom sm:text-xl-custom mb-24px font-bold text-silver mb-0`}
          >
            {header}
          </TextBox>
        </Container>

        <Container classes="flex justify-center">
          <Button
            classes={`w-76px h-52px bg-silver hover:bg-silver-light text-dark mr-16px shadow-sm-silver-custom`}
            primary={false}
            type="button"
            text={cancelBtnText}
            onClick={cancelBtnHandler}
          />
          <Button
            classes={`w-146px h-52px bg-orange hover:bg-orange-light text-dark shadow-sm-orange-custom`}
            primary={false}
            type="button"
            text={confirmBtnText}
            onClick={confirmBtnHandler}
          />
        </Container>
      </Container>
    </Container>
  );
};

export default SubMenu;
