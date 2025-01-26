import { ReactElement } from 'react';
import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';
// import { $styles } from "../theme"
// import { Icon, IconTypes } from "./Icon"
// import { Text, TextProps } from './Text';
import {
  ExtendedEdge,
  useSafeAreaInsetsStyle,
} from '../../utils/useSafeAreaInsetsStyle.ts';
import Colors from '../../styles/Colors.ts';
import { IconTypes } from '../icon/icons';
import { IconComponent } from '../icon/IconComponent.tsx';

export interface HeaderProps {
  titleMode?: 'center' | 'flex';
  titleStyle?: StyleProp<TextStyle>;
  titleContainerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  backgroundColor?: string;
  title?: string;
  leftIcon?: IconTypes;
  leftIconColor?: string;
  leftText?: string;
  LeftActionComponent?: ReactElement;
  onLeftPress?: TouchableOpacityProps['onPress'];
  rightIcon?: IconTypes;
  rightIconColor?: string;
  rightText?: string;
  RightActionComponent?: ReactElement;
  onRightPress?: TouchableOpacityProps['onPress'];
  safeAreaEdges?: ExtendedEdge[];
}

interface HeaderActionProps {
  backgroundColor?: string;
  icon?: IconTypes;
  iconColor?: string;
  text?: string;
  onPress?: TouchableOpacityProps['onPress'];
  ActionComponent?: ReactElement;
}

export function Header(props: HeaderProps) {
  const {
    backgroundColor = Colors.background,
    LeftActionComponent,
    leftIcon,
    leftIconColor,
    leftText,
    onLeftPress,
    onRightPress,
    RightActionComponent,
    rightIcon,
    rightIconColor,
    rightText,
    safeAreaEdges = ['top'],
    title,
    titleMode = 'center',
    titleContainerStyle: $titleContainerStyleOverride,
    style: $styleOverride,
    titleStyle: $titleStyleOverride,
    containerStyle: $containerStyleOverride,
  } = props;

  const $containerInsets = useSafeAreaInsetsStyle(safeAreaEdges);

  return (
    <View
      style={[
        $container,
        $containerInsets,
        { backgroundColor },
        $containerStyleOverride,
      ]}
    >
      <View style={[{ flexDirection: 'row' }, $wrapper, $styleOverride]}>
        <HeaderAction
          text={leftText}
          icon={leftIcon}
          iconColor={leftIconColor}
          onPress={onLeftPress}
          backgroundColor={backgroundColor}
          ActionComponent={LeftActionComponent}
        />

        {!!title && (
          <View
            style={[
              titleMode === 'center' && $titleWrapperCenter,
              titleMode === 'flex' && $titleWrapperFlex,
              $titleContainerStyleOverride,
            ]}
            pointerEvents="none"
          >
            {/*<Text*/}
            {/*  weight="medium"*/}
            {/*  size="md"*/}
            {/*  text={title}*/}
            {/*  style={[$title, $titleStyleOverride]}*/}
            {/*/>*/}
            <Text style={[$title, $titleStyleOverride]}>{title}</Text>
          </View>
        )}

        <HeaderAction
          text={rightText}
          icon={rightIcon}
          iconColor={rightIconColor}
          onPress={onRightPress}
          backgroundColor={backgroundColor}
          ActionComponent={RightActionComponent}
        />
      </View>
    </View>
  );
}

function HeaderAction(props: HeaderActionProps) {
  const { backgroundColor, icon, text, onPress, ActionComponent, iconColor } =
    props;

  const content = text;

  if (ActionComponent) return ActionComponent;

  if (content) {
    return (
      <TouchableOpacity
        style={[$actionTextContainer, { backgroundColor }]}
        onPress={onPress}
        disabled={!onPress}
        activeOpacity={0.8}
      >
        <Text style={$actionText}>{content}</Text>
        {/*<Text weight="medium" size="md" text={content} style={$actionText} />*/}
      </TouchableOpacity>
    );
  }

  if (icon) {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <IconComponent
          icon={icon}
          style={{ tintColor: iconColor }}
          containerStyle={[$actionIconContainer, { backgroundColor }]}
        />
      </TouchableOpacity>
    );
  }

  return <View style={[$actionFillerContainer, { backgroundColor }]} />;
}

const $wrapper: ViewStyle = {
  height: 56,
  alignItems: 'center',
  justifyContent: 'space-between',
};

const $container: ViewStyle = {
  width: '100%',
};

const $title: TextStyle = {
  textAlign: 'center',
};

const $actionTextContainer: ViewStyle = {
  flexGrow: 0,
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  paddingHorizontal: 10,
  zIndex: 2,
};

const $actionText: TextStyle = {
  color: Colors.black,
};

const $actionIconContainer: ViewStyle = {
  flexGrow: 0,
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  paddingHorizontal: 10,
  zIndex: 2,
};

const $actionFillerContainer: ViewStyle = {
  width: 16,
};

const $titleWrapperCenter: ViewStyle = {
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
  position: 'absolute',
  paddingHorizontal: 16,
  zIndex: 1,
};

const $titleWrapperFlex: ViewStyle = {
  justifyContent: 'center',
  flexGrow: 1,
};
