import React, { FC } from 'react';
import { useCustomTheme } from '~/hooks/hooks';
import { Text, View, DotSvg } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

type DescriptionInfoProps = {
  title: string;
  description: string;
};

const RenderDescriptionInfo: FC<DescriptionInfoProps> = ({
  title,
  description,
}) => {
  const { colors } = useCustomTheme();

  return (
    <View style={[globalStyles.flexDirectionRow, globalStyles.py2]}>
      <View
        style={[
          styles.title,
          globalStyles.flexDirectionRow,
          globalStyles.alignItemsCenter,
        ]}
      >
        <DotSvg />
        <Text
          style={[
            globalStyles.fs14,
            styles.titleText,
            { color: colors.subtitle },
          ]}
        >
          {title}
        </Text>
      </View>
      <Text
        style={[globalStyles.fs14, styles.description, { color: colors.text }]}
      >
        {description}
      </Text>
    </View>
  );
};

export { RenderDescriptionInfo };
