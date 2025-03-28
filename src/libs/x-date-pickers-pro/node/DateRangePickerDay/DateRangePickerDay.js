"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateRangePickerDay = void 0;
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _clsx = _interopRequireDefault(require("clsx"));
var _styles = require("@mui/material/styles");
var _utils = require("@mui/utils");
var _internals = require("@mui/x-date-pickers/internals");
var _PickersDay = require("@mui/x-date-pickers/PickersDay");
var _dateRangePickerDayClasses = require("./dateRangePickerDayClasses");
var _jsxRuntime = require("react/jsx-runtime");
const _excluded = ["className", "day", "outsideCurrentMonth", "isEndOfHighlighting", "isEndOfPreviewing", "isHighlighting", "isPreviewing", "isStartOfHighlighting", "isStartOfPreviewing", "selected", "isVisuallySelected", "sx", "draggable", "isFirstVisibleCell", "isLastVisibleCell"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const useUtilityClasses = ownerState => {
  const {
    isHighlighting,
    outsideCurrentMonth,
    isStartOfHighlighting,
    isStartOfMonth,
    isEndOfHighlighting,
    isEndOfMonth,
    isPreviewing,
    isStartOfPreviewing,
    isEndOfPreviewing,
    isFirstVisibleCell,
    isLastVisibleCell,
    isHiddenDayFiller,
    selected,
    classes
  } = ownerState;
  const slots = {
    root: ['root', isHighlighting && 'rangeIntervalDayHighlight', isStartOfHighlighting && 'rangeIntervalDayHighlightStart', isEndOfHighlighting && 'rangeIntervalDayHighlightEnd', outsideCurrentMonth && 'outsideCurrentMonth', isStartOfMonth && 'startOfMonth', isEndOfMonth && 'endOfMonth', isFirstVisibleCell && 'firstVisibleCell', isLastVisibleCell && 'lastVisibleCell', isHiddenDayFiller && 'hiddenDayFiller'],
    rangeIntervalPreview: ['rangeIntervalPreview', isPreviewing && 'rangeIntervalDayPreview', (isStartOfPreviewing || isStartOfMonth) && 'rangeIntervalDayPreviewStart', (isEndOfPreviewing || isEndOfMonth) && 'rangeIntervalDayPreviewEnd'],
    day: ['day', !selected && 'notSelectedDate', !isHighlighting && 'dayOutsideRangeInterval', !selected && isHighlighting && 'dayInsideRangeInterval']
  };
  return (0, _utils.unstable_composeClasses)(slots, _dateRangePickerDayClasses.getDateRangePickerDayUtilityClass, classes);
};
const endBorderStyle = {
  borderTopRightRadius: '50%',
  borderBottomRightRadius: '50%'
};
const startBorderStyle = {
  borderTopLeftRadius: '50%',
  borderBottomLeftRadius: '50%'
};
const DateRangePickerDayRoot = (0, _styles.styled)('div', {
  name: 'MuiDateRangePickerDay',
  slot: 'Root',
  overridesResolver: (_, styles) => [{
    [`&.${_dateRangePickerDayClasses.dateRangePickerDayClasses.rangeIntervalDayHighlight}`]: styles.rangeIntervalDayHighlight
  }, {
    [`&.${_dateRangePickerDayClasses.dateRangePickerDayClasses.rangeIntervalDayHighlightStart}`]: styles.rangeIntervalDayHighlightStart
  }, {
    [`&.${_dateRangePickerDayClasses.dateRangePickerDayClasses.rangeIntervalDayHighlightEnd}`]: styles.rangeIntervalDayHighlightEnd
  }, {
    [`&.${_dateRangePickerDayClasses.dateRangePickerDayClasses.firstVisibleCell}`]: styles.firstVisibleCell
  }, {
    [`&.${_dateRangePickerDayClasses.dateRangePickerDayClasses.lastVisibleCell}`]: styles.lastVisibleCell
  }, {
    [`&.${_dateRangePickerDayClasses.dateRangePickerDayClasses.startOfMonth}`]: styles.startOfMonth
  }, {
    [`&.${_dateRangePickerDayClasses.dateRangePickerDayClasses.endOfMonth}`]: styles.endOfMonth
  }, {
    [`&.${_dateRangePickerDayClasses.dateRangePickerDayClasses.outsideCurrentMonth}`]: styles.outsideCurrentMonth
  }, {
    [`&.${_dateRangePickerDayClasses.dateRangePickerDayClasses.hiddenDayFiller}`]: styles.hiddenDayFiller
  }, styles.root]
})(({
  theme,
  ownerState
}) => ownerState.isHiddenDayFiller ? {} : (0, _extends2.default)({
  [`&:first-of-type .${_dateRangePickerDayClasses.dateRangePickerDayClasses.rangeIntervalDayPreview}`]: (0, _extends2.default)({}, startBorderStyle, {
    borderLeftColor: (theme.vars || theme).palette.divider
  }),
  [`&:last-of-type .${_dateRangePickerDayClasses.dateRangePickerDayClasses.rangeIntervalDayPreview}`]: (0, _extends2.default)({}, endBorderStyle, {
    borderRightColor: (theme.vars || theme).palette.divider
  })
}, ownerState.isHighlighting && {
  borderRadius: 0,
  color: (theme.vars || theme).palette.primary.contrastText,
  backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.focusOpacity})` : (0, _styles.alpha)(theme.palette.primary.main, theme.palette.action.focusOpacity),
  '&:first-of-type': startBorderStyle,
  '&:last-of-type': endBorderStyle
}, (ownerState.isStartOfHighlighting || ownerState.isFirstVisibleCell) && (0, _extends2.default)({}, startBorderStyle, {
  paddingLeft: 0
}), (ownerState.isEndOfHighlighting || ownerState.isLastVisibleCell) && (0, _extends2.default)({}, endBorderStyle, {
  paddingRight: 0
})));
DateRangePickerDayRoot.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  ownerState: _propTypes.default.object.isRequired
};
const DateRangePickerDayRangeIntervalPreview = (0, _styles.styled)('div', {
  name: 'MuiDateRangePickerDay',
  slot: 'RangeIntervalPreview',
  overridesResolver: (_, styles) => [{
    [`&.${_dateRangePickerDayClasses.dateRangePickerDayClasses.rangeIntervalDayPreview}`]: styles.rangeIntervalDayPreview
  }, {
    [`&.${_dateRangePickerDayClasses.dateRangePickerDayClasses.rangeIntervalDayPreviewStart}`]: styles.rangeIntervalDayPreviewStart
  }, {
    [`&.${_dateRangePickerDayClasses.dateRangePickerDayClasses.rangeIntervalDayPreviewEnd}`]: styles.rangeIntervalDayPreviewEnd
  }, styles.rangeIntervalPreview]
})(({
  theme,
  ownerState
}) => (0, _extends2.default)({
  // replace default day component margin with transparent border to avoid jumping on preview
  border: '2px solid transparent'
}, ownerState.isPreviewing && !ownerState.isHiddenDayFiller && (0, _extends2.default)({
  borderRadius: 0,
  border: `2px dashed ${(theme.vars || theme).palette.divider}`,
  borderLeftColor: 'transparent',
  borderRightColor: 'transparent'
}, (ownerState.isStartOfPreviewing || ownerState.isFirstVisibleCell) && (0, _extends2.default)({
  borderLeftColor: (theme.vars || theme).palette.divider
}, startBorderStyle), (ownerState.isEndOfPreviewing || ownerState.isLastVisibleCell) && (0, _extends2.default)({
  borderRightColor: (theme.vars || theme).palette.divider
}, endBorderStyle))));
DateRangePickerDayRangeIntervalPreview.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  ownerState: _propTypes.default.object.isRequired
};
const DateRangePickerDayDay = (0, _styles.styled)(_PickersDay.PickersDay, {
  name: 'MuiDateRangePickerDay',
  slot: 'Day',
  overridesResolver: (_, styles) => [{
    [`&.${_dateRangePickerDayClasses.dateRangePickerDayClasses.dayInsideRangeInterval}`]: styles.dayInsideRangeInterval
  }, {
    [`&.${_dateRangePickerDayClasses.dateRangePickerDayClasses.dayOutsideRangeInterval}`]: styles.dayOutsideRangeInterval
  }, {
    [`&.${_dateRangePickerDayClasses.dateRangePickerDayClasses.notSelectedDate}`]: styles.notSelectedDate
  }, styles.day]
})(({
  ownerState
}) => (0, _extends2.default)({
  // Required to overlap preview border
  transform: 'scale(1.1)',
  '& > *': {
    transform: 'scale(0.9)'
  }
}, ownerState.draggable && {
  cursor: 'grab'
}, ownerState.draggable && {
  touchAction: 'none'
}));
const DateRangePickerDayRaw = /*#__PURE__*/React.forwardRef(function DateRangePickerDay(inProps, ref) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'MuiDateRangePickerDay'
  });
  const {
      className,
      day,
      outsideCurrentMonth,
      isHighlighting,
      isPreviewing,
      selected = false,
      isVisuallySelected,
      sx,
      draggable,
      isFirstVisibleCell,
      isLastVisibleCell
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const utils = (0, _internals.useUtils)();
  const isEndOfMonth = utils.isSameDay(day, utils.endOfMonth(day));
  const isStartOfMonth = utils.isSameDay(day, utils.startOfMonth(day));
  const shouldRenderHighlight = isHighlighting && !outsideCurrentMonth;
  const shouldRenderPreview = isPreviewing && !outsideCurrentMonth;
  const ownerState = (0, _extends2.default)({}, props, {
    selected,
    isStartOfMonth,
    isEndOfMonth,
    draggable,
    isFirstVisibleCell,
    isLastVisibleCell,
    isHiddenDayFiller: outsideCurrentMonth && !other.showDaysOutsideCurrentMonth
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(DateRangePickerDayRoot, {
    className: (0, _clsx.default)(classes.root, className),
    ownerState: ownerState,
    sx: sx,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(DateRangePickerDayRangeIntervalPreview, {
      className: classes.rangeIntervalPreview,
      ownerState: ownerState,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(DateRangePickerDayDay, (0, _extends2.default)({}, other, {
        ref: ref,
        disableMargin: true,
        day: day,
        selected: isVisuallySelected,
        outsideCurrentMonth: outsideCurrentMonth,
        className: classes.day,
        ownerState: ownerState,
        draggable: draggable,
        isFirstVisibleCell: isFirstVisibleCell,
        isLastVisibleCell: isLastVisibleCell
      }))
    })
  });
});
process.env.NODE_ENV !== "production" ? DateRangePickerDayRaw.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.shape({
    current: _propTypes.default.shape({
      focusVisible: _propTypes.default.func.isRequired
    })
  })]),
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: _propTypes.default.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: _propTypes.default.object,
  className: _propTypes.default.string,
  component: _propTypes.default.elementType,
  /**
   * The date to show.
   */
  day: _propTypes.default.any.isRequired,
  /**
   * If `true`, renders as disabled.
   * @default false
   */
  disabled: _propTypes.default.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: _propTypes.default.bool,
  /**
   * If `true`, days are rendering without margin. Useful for displaying linked range of days.
   * @default false
   */
  disableMargin: _propTypes.default.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: _propTypes.default.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: _propTypes.default.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: _propTypes.default.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: _propTypes.default.string,
  isAnimating: _propTypes.default.bool,
  /**
   * Set to `true` if the `day` is the end of a highlighted date range.
   */
  isEndOfHighlighting: _propTypes.default.bool.isRequired,
  /**
   * Set to `true` if the `day` is the end of a previewing date range.
   */
  isEndOfPreviewing: _propTypes.default.bool.isRequired,
  /**
   * If `true`, day is the first visible cell of the month.
   * Either the first day of the month or the first day of the week depending on `showDaysOutsideCurrentMonth`.
   */
  isFirstVisibleCell: _propTypes.default.bool.isRequired,
  /**
   * Set to `true` if the `day` is in a highlighted date range.
   */
  isHighlighting: _propTypes.default.bool.isRequired,
  /**
   * If `true`, day is the last visible cell of the month.
   * Either the last day of the month or the last day of the week depending on `showDaysOutsideCurrentMonth`.
   */
  isLastVisibleCell: _propTypes.default.bool.isRequired,
  /**
   * Set to `true` if the `day` is in a preview date range.
   */
  isPreviewing: _propTypes.default.bool.isRequired,
  /**
   * Set to `true` if the `day` is the start of a highlighted date range.
   */
  isStartOfHighlighting: _propTypes.default.bool.isRequired,
  /**
   * Set to `true` if the `day` is the start of a previewing date range.
   */
  isStartOfPreviewing: _propTypes.default.bool.isRequired,
  /**
   * Indicates if the day should be visually selected.
   */
  isVisuallySelected: _propTypes.default.bool,
  onDaySelect: _propTypes.default.func.isRequired,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: _propTypes.default.func,
  onMouseEnter: _propTypes.default.func,
  /**
   * If `true`, day is outside of month and will be hidden.
   */
  outsideCurrentMonth: _propTypes.default.bool.isRequired,
  /**
   * If `true`, renders as selected.
   * @default false
   */
  selected: _propTypes.default.bool,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: _propTypes.default.bool,
  style: _propTypes.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object, _propTypes.default.bool])), _propTypes.default.func, _propTypes.default.object]),
  /**
   * @default 0
   */
  tabIndex: _propTypes.default.number,
  /**
   * If `true`, renders as today date.
   * @default false
   */
  today: _propTypes.default.bool,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: _propTypes.default.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.shape({
    current: _propTypes.default.shape({
      pulsate: _propTypes.default.func.isRequired,
      start: _propTypes.default.func.isRequired,
      stop: _propTypes.default.func.isRequired
    })
  })])
} : void 0;

/**
 * Demos:
 *
 * - [DateRangePicker](https://mui.com/x/react-date-pickers/date-range-picker/)
 *
 * API:
 *
 * - [DateRangePickerDay API](https://mui.com/x/api/date-pickers/date-range-picker-day/)
 */
const DateRangePickerDay = exports.DateRangePickerDay = /*#__PURE__*/React.memo(DateRangePickerDayRaw);