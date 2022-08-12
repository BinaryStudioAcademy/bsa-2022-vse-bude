import { Icon } from 'components/primitives/icon';
import { IconName } from 'common/enums/icons';
import { ColorPalette } from '@vse-bude/shared';

function Test() {
  const color = ColorPalette.YELLOW_100;

  return (
    <div>
      <Icon icon={IconName.ANGLE_DOWN} color={color} size="lg" />
      <Icon icon={IconName.ANGLE_LEFT} color={color} size="lg" />
      <Icon icon={IconName.ANGLE_RIGHT} color={color} size="lg" />
      <Icon icon={IconName.ANGLE_UP} color={color} size="lg" />
      <Icon icon={IconName.BELL} color={color} size="lg" />
      <Icon icon={IconName.CHECK} color={color} size="lg" />
      <Icon icon={IconName.EYE} color={color} size="lg" />
      <Icon icon={IconName.EYE_SLASH} color={color} size="lg" />
      <Icon icon={IconName.LIST} color={color} size="lg" />
      <Icon icon={IconName.MESSAGE} color={color} size="lg" />
      <Icon icon={IconName.SETTINGS} color={color} size="lg" />
      <Icon icon={IconName.SIGN_OUT} color={color} size="lg" />
      <Icon icon={IconName.STAR} color={color} size="lg" />
      <Icon icon={IconName.SUPPORT} color={color} size="lg" />
      <Icon icon={IconName.USER} color={color} size="lg" />
      <Icon icon={IconName.CAMERA} color={color} size="lg" />
      <Icon icon={IconName.EMAIL} color={color} size="lg" />
      <Icon icon={IconName.PHONE} color={color} size="lg" />
      <Icon icon={IconName.PRIVACY_POLICY} color={color} size="lg" />
    </div>
  );
}

export default Test;
