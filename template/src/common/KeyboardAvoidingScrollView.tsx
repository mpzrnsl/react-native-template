/**
 * ProjectName
 *
 * Keyboard Avoiding ScrollView
 *
 * Author: Phia Nasol
 *
 */

import React, { PropsWithChildren } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ScrollViewProps,
  StyleProp,
  ViewStyle
} from "react-native";

import styles from "@core/styles";

export interface KeyboardAvoidingScrollViewProps {
  /** Styling for Component container. */
  containerStyle?: StyleProp<ViewStyle>;

  /** Styling for Component content container. */
  contentContainerStyle?: StyleProp<ViewStyle>;

  /** Properties for Scroll View component. */
  scrollViewProps?: ScrollViewProps;
}

const KeyboardAvoidingScrollView: React.FC<
  PropsWithChildren<KeyboardAvoidingScrollViewProps>
> = ({ children, containerStyle, contentContainerStyle, scrollViewProps }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[styles.container, containerStyle]}>
      <ScrollView
        bounces={false}
        contentContainerStyle={[styles.scrollContainer, contentContainerStyle]}
        contentInsetAdjustmentBehavior="always"
        overScrollMode="always"
        showsVerticalScrollIndicator
        {...scrollViewProps}>
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

KeyboardAvoidingScrollView.displayName = "KeyboardAvoidingScrollView";

export default KeyboardAvoidingScrollView;
