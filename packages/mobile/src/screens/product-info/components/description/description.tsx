import React, { FC } from 'react';
import { DotSvg } from '~/assets/svg/dot';
import { Text, View } from '~/components/components';
import { useCustomTheme } from '~/hooks/hooks';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

const Description: FC = () => {
  const { colors } = useCustomTheme();

  return (
    <View>
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
            Ending on
          </Text>
        </View>
        <Text
          style={[
            globalStyles.fs14,
            styles.description,
            { color: colors.text },
          ]}
        >
          28.09.2022, 12:00 pm
        </Text>
      </View>
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
            Time zone
          </Text>
        </View>
        <Text
          style={[
            globalStyles.fs14,
            styles.description,
            { color: colors.text },
          ]}
        >
          GMT +3
        </Text>
      </View>
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
            The status
          </Text>
        </View>
        <Text
          style={[
            globalStyles.fs14,
            styles.description,
            { color: colors.text },
          ]}
        >
          used
        </Text>
      </View>
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
            Location
          </Text>
        </View>
        <Text
          style={[
            globalStyles.fs14,
            styles.description,
            { color: colors.text },
          ]}
        >
          Ukraine, Kyiv
        </Text>
      </View>
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
            Description
          </Text>
        </View>
        <Text
          style={[
            globalStyles.fs14,
            styles.description,
            { color: colors.text },
          ]}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec ut
          eleifend nunc in eleifend malesuada mauris ornare. Amet sagittis vitae
          a, lorem et nunc eros. Diam, amet, imperdiet in egestas enim fusce.
        </Text>
      </View>
    </View>
  );
};

export { Description };
