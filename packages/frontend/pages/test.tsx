import { IconName } from '@enums';
import { Icon, IconButton } from '@primitives';

function Test() {
  const size = 'sm';

  return (
    <div>
      IconButton:
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <IconButton icon={IconName.STAR_FULFILLED} color="yellow" />
        <IconButton
          size="sm"
          icon={IconName.STAR_OUTLINED}
          color="white"
          backgroundColor="darkgray"
        />
        <IconButton
          size="sm"
          icon={IconName.STAR_OUTLINED}
          color="black"
          backgroundColor="lightgray"
        />
        <IconButton
          size="sm"
          icon={IconName.BELL}
          color="black"
          backgroundColor="lightgray"
        />
        <IconButton
          size="xs"
          icon={IconName.ANGLE_DOWN}
          color="yellow"
          backgroundColor="lightgray"
        />
        <IconButton
          size="sm"
          icon={IconName.ANGLE_RIGHT}
          color="yellow"
          backgroundColor="darkgray"
        />
        <IconButton
          size="lg"
          icon={IconName.MESSAGE}
          color="green"
          backgroundColor="darkgray"
        />
      </div>
      <br />
      Icon:
      <Icon icon={IconName.ANGLE_DOWN} color="yellow" />
      <Icon icon={IconName.ANGLE_LEFT} color="yellow" size={size} />
      <Icon icon={IconName.ANGLE_RIGHT} color="yellow" size={size} />
      <Icon icon={IconName.ANGLE_UP} color="yellow" size={size} />
      <Icon icon={IconName.BELL} color="yellow" size={size} />
      <Icon icon={IconName.CHECK} color="yellow" size={size} />
      <Icon icon={IconName.EYE} color="yellow" size={size} />
      <Icon icon={IconName.EYE_SLASH} color="yellow" size={size} />
      <Icon icon={IconName.LIST} color="yellow" size={size} />
      <Icon icon={IconName.MESSAGE} color="yellow" size={size} />
      <Icon icon={IconName.SETTINGS} color="yellow" size={size} />
      <Icon icon={IconName.SIGN_OUT} color="yellow" size={size} />
      <Icon icon={IconName.STAR_OUTLINED} color="yellow" size={size} />
      <Icon icon={IconName.STAR_FULFILLED} color="yellow" size={size} />
      <Icon icon={IconName.SUPPORT} color="yellow" size={size} />
      <Icon icon={IconName.USER} color="yellow" size={size} />
      <Icon icon={IconName.CAMERA} color="yellow" size={size} />
      <Icon icon={IconName.EMAIL} color="yellow" size={size} />
      <Icon icon={IconName.PHONE} color="yellow" size={size} />
      <Icon icon={IconName.PRIVACY_POLICY} color="yellow" size={size} />
      <Icon icon={IconName.STOPWATCH} color="yellow" size="sm" />
    </div>
  );
}

export default Test;
