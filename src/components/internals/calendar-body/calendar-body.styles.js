import { css } from '@emotion/core';
import vars from '../../../../materials/custom-properties';
import { getInputStyles } from '../../inputs/styles';

// NOTE: order is important here
// * a disabled-field currently does not display warning/error-states so it takes precedence
// * a readonly-field cannot be changed, but it might be relevant for validation, so error and warning are checked first
// how you can interact with the field is controlled separately by the props, this only influences visuals
const getClearSectionStyles = props => {
  const baseIconStyles = css`
    align-items: center;
    box-sizing: border-box;
    background-color: ${vars.backgroundColorForInput};
    border-bottom: 1px solid ${vars.borderColorForInput};
    border-top: 1px solid ${vars.borderColorForInput};
    height: ${vars.sizeHeightInput};
    display: flex;
    padding: ${vars.spacingXs};
    cursor: pointer;
    outline: 0;
  `;
  if (props.isDisabled) {
    return [
      baseIconStyles,
      css`
        cursor: not-allowed;
        background-color: ${vars.backgroundColorForInputWhenDisabled};
        color: ${vars.fontColorForInputWhenDisabled};
        border-color: ${vars.borderColorForInputWhenDisabled};
      `,
    ];
  }
  if (props.hasError) {
    return [
      baseIconStyles,
      css`
        color: ${vars.fontColorForInputWhenError};
        border-color: ${vars.borderColorForInputWhenError};
      `,
    ];
  }
  if (props.isOpen || props.isFocused) {
    return [
      baseIconStyles,
      css`
        border-color: ${vars.borderColorForInputWhenFocused};
      `,
    ];
  }
  return baseIconStyles;
};

const getCalendarIconContainerStyles = (props, state) => {
  const baseIconStyles = css`
    align-items: center;
    box-sizing: border-box;
    background-color: ${vars.backgroundColorForInput};
    border: 1px solid ${vars.borderColorForInput};
    height: ${vars.sizeHeightInput};
    display: flex;
    padding: ${vars.spacingXs};
    border-top-right-radius: ${vars.borderRadiusForInput};
    border-bottom-right-radius: ${vars.borderRadiusForInput};
    outline: 0;
  `;
  if (props.isDisabled) {
    return [
      baseIconStyles,
      css`
        cursor: not-allowed;
        background-color: ${vars.backgroundColorForInputWhenDisabled};
        color: ${vars.fontColorForInputWhenDisabled};
        border-color: ${vars.borderColorForInputWhenDisabled};
      `,
    ];
  }
  if (props.hasError) {
    return [
      baseIconStyles,
      css`
        color: ${vars.fontColorForInputWhenError};
        border-color: ${vars.borderColorForInputWhenError};
      `,
    ];
  }
  if (props.hasWarning) {
    return [
      baseIconStyles,
      css`
        color: ${vars.fontColorForInputWhenWarning};
        border-color: ${vars.borderColorForInputWhenWarning};
      `,
    ];
  }
  if (props.isOpen || state.isFocused) {
    return [
      baseIconStyles,
      css`
        border-color: ${vars.borderColorForInputWhenFocused};
      `,
    ];
  }
  return baseIconStyles;
};

const getInputContainerStyles = () => css`
  width: 100%;
  align-items: center;
  display: flex;
  font-size: ${vars.fontSizeDefault};
  font-family: inherit;
`;

const getDateTimeInputStyles = (props, state) => {
  const baseStyles = [
    getInputStyles(props),
    css`
      border-radius: ${vars.borderRadiusForInput} 0 0
        ${vars.borderRadiusForInput};
      border-right: none;
      transition: color ${vars.transitionStandard},
        border-color ${vars.transitionStandard};

      &:focus,
      &:active,
      &:focus + *,
      &:active + * {
        border-color: ${vars.borderColorForInputWhenFocused};
        color: ${vars.fontColorForInput};
      }

      &:disabled {
        cursor: not-allowed;
      }

      &:disabled,
      &:read-only {
        background-color: ${vars.backgroundColorForInputWhenDisabled};
        color: ${vars.fontColorForInputWhenDisabled};
        border-color: ${vars.borderColorForInputWhenDisabled};
        opacity: 1; /* fix for mobile safari */
      }
    `,
  ];
  if (props.isOpen || state.isFocused) {
    return [
      ...baseStyles,
      css`
        &,
        & + * {
          border-color: ${vars.borderColorForInputWhenFocused};
          color: ${vars.fontColorForInput};
        }
      `,
    ];
  }
  return baseStyles;
};

export {
  getClearSectionStyles,
  getInputContainerStyles,
  getDateTimeInputStyles,
  getCalendarIconContainerStyles,
};
