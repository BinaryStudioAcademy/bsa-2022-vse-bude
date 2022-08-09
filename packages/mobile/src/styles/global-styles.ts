const DEFAULT_SPACER = 10;
const spacer1 = DEFAULT_SPACER * 1;
const spacer2 = DEFAULT_SPACER * 1.5;
const spacer3 = DEFAULT_SPACER * 2;
const spacer4 = DEFAULT_SPACER * 3;
const spacer5 = DEFAULT_SPACER * 5;
const spacer6 = DEFAULT_SPACER * 7.5;
const spacer7 = DEFAULT_SPACER * 14;

const SPACE_STYLES = {
  px1: {
    paddingHorizontal: spacer2,
  },
  py1: {
    paddingVertical: spacer1,
  },
  py2: {
    paddingVertical: spacer2,
  },
  py3: {
    paddingVertical: spacer6,
  },
  mt1: {
    marginTop: spacer1,
  },
  mt2: {
    marginTop: spacer2,
  },
  mt3: {
    marginTop: spacer3,
  },
  mt4: {
    marginTop: spacer4,
  },
  mt5: {
    marginTop: spacer5,
  },
  mt6: {
    marginTop: spacer7,
  },
  ml1: {
    marginLeft: spacer1,
  },
  ml2: {
    marginLeft: spacer2,
  },
};

const FLEX_BOX_STYLES = {
  flexDirectionRow: {
    flexDirection: 'row',
  },
  flexDirectionColumn: {
    flexDirection: 'column',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  justifyContentSpaceBetween: {
    justifyContent: 'space-between',
  },
};

const FONT_STYLES = {
  fontWeightRegular: {
    fontWeight: '400',
  },
  fontWeightBold: {
    fontWeight: '700',
  },
  fontWeightExtraBold: {
    fontWeight: '800',
  },
  fontWeightSemiBold: {
    fontWeight: '600',
  },
  fontWeightMedium: {
    fontWeight: '500',
  },
  fs12: {
    fontSize: 12,
  },
  fs14: {
    fontSize: 14,
  },
  fs16: {
    fontSize: 16,
  },
  fs18: {
    fontSize: 18,
  },
  fs22: {
    fontSize: 22,
  },
  fs58: {
    fontSize: 58,
  },
};

export const globalStyles = {
  ...SPACE_STYLES,
  ...FLEX_BOX_STYLES,
  ...FONT_STYLES,
};
