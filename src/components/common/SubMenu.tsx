import Container from './Container';
import TextBox from './TextBox';
import Button from './Button';
import { useCallback, useEffect } from 'react';
import { useMotionAnimate } from 'motion-hooks';

type SubMenuProps = {
  isShowing: boolean;
  header: string;
  cancelBtnText: string;
  confirmBtnText: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const SubMenu = ({
  isShowing,
  header,
  cancelBtnText,
  confirmBtnText,
  onCancel,
  onConfirm,
}: SubMenuProps) => {
  const { play: showAnimation } = useMotionAnimate(
    `#submenu-container`,
    { transform: 'translateX(0)' },
    {
      duration: 0.2,
      easing: 'linear',
    }
  );

  const { play: closeAnimation } = useMotionAnimate(
    `#submenu-container`,
    { transform: 'translateX(-100%)' },
    {
      duration: 0.2,
      easing: 'linear',
    }
  );

  const confirmBtnHandler = useCallback(() => {
    closeAnimation().then(() => onConfirm());
  }, [onConfirm, closeAnimation]);

  const cancelBtnHandler = useCallback(() => {
    closeAnimation().then(() => onCancel());
  }, [onCancel, closeAnimation]);

  useEffect(() => {
    isShowing && void showAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShowing]);

  return (
    isShowing && (
      <Container classes="w-full h-full fixed inset-0 ">
        <Container classes="w-screen fixed inset-0 opacity-50 bg-black" />
        <Container
          id="submenu-container"
          classes="flex items-center w-screen h-266px bg-semi-dark fixed inset-0 justify-center my-auto flex-col translate-x-full"
        >
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
    )
  );
};

export default SubMenu;
