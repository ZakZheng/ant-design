import { TextStyle, ViewStyle } from 'react-native';
import { Theme } from '../../style';
export interface ModalStyle {
    container: ViewStyle;
    wrap: ViewStyle;
    popupContainer: ViewStyle;
    innerContainer: ViewStyle;
    popupSlideUp: ViewStyle;
    popupSlideDown: ViewStyle;
    footer: ViewStyle;
    header: TextStyle;
    body: ViewStyle;
    maskClosable: ViewStyle;
    closeWrap: ViewStyle;
    close: TextStyle;
    buttonGroupH: ViewStyle;
    buttonGroupV: ViewStyle;
    buttonWrapH: ViewStyle;
    buttonWrapV: ViewStyle;
    buttonText: TextStyle;
    operationContainer: ViewStyle;
    operationBody: ViewStyle;
    buttonTextOperation: TextStyle;
}
declare const _default: (theme: Theme) => {
    container: import("react-native").RegisteredStyle<ViewStyle>;
    wrap: import("react-native").RegisteredStyle<ViewStyle>;
    popupContainer: import("react-native").RegisteredStyle<ViewStyle>;
    innerContainer: import("react-native").RegisteredStyle<ViewStyle>;
    popupSlideUp: import("react-native").RegisteredStyle<ViewStyle>;
    popupSlideDown: import("react-native").RegisteredStyle<ViewStyle>;
    footer: import("react-native").RegisteredStyle<ViewStyle>;
    header: import("react-native").RegisteredStyle<TextStyle>;
    body: import("react-native").RegisteredStyle<ViewStyle>;
    maskClosable: import("react-native").RegisteredStyle<ViewStyle>;
    closeWrap: import("react-native").RegisteredStyle<ViewStyle>;
    close: import("react-native").RegisteredStyle<TextStyle>;
    buttonGroupH: import("react-native").RegisteredStyle<ViewStyle>;
    buttonGroupV: import("react-native").RegisteredStyle<ViewStyle>;
    buttonWrapH: import("react-native").RegisteredStyle<ViewStyle>;
    buttonWrapV: import("react-native").RegisteredStyle<ViewStyle>;
    buttonText: import("react-native").RegisteredStyle<TextStyle>;
    operationContainer: import("react-native").RegisteredStyle<ViewStyle>;
    operationBody: import("react-native").RegisteredStyle<ViewStyle>;
    buttonTextOperation: import("react-native").RegisteredStyle<TextStyle>;
};
export default _default;