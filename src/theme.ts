const indentSmall = '6px';
const indent = '15px';
const fontSize = '48px';

const colorLight = '#FFFFFF';
const colorDark = '#010101';

const indentInner = indent;
const indentInnerLeft = indent;
const indentInnerRight = indent;

const bgColor = colorLight;
const bgColorDark = colorDark;

const fontColor = colorDark;
const fontColorDark = colorLight;

const defaultTheme = {
    indent,
    indentSmall,
    bgColor,
    fontSize,
    fontColor,
    indentInnerLeft,
    indentInnerRight
}

export const theme = {
    default: {
        ...defaultTheme
    },
    dark: {
        ...defaultTheme,
        bgColor: bgColorDark,
        fontColor: fontColorDark,
    }
}