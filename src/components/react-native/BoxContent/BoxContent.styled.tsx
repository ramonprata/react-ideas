/* eslint-disable @typescript-eslint/no-use-before-define */
import { ViewProps } from 'react-native';
import styled, { css } from 'styled-components/native';
import { IPalette } from '~/shared/theme/themeInterface';
import { TStringNumber } from '~/shared/types';

export interface IBoxContentProps extends ViewProps {
  pad?: string;
  marg?: string;
  bg?: keyof IPalette;
  w?: TStringNumber;
  h?: TStringNumber;
  inline?: boolean;
  center?: boolean;
  wrap?: boolean;
  flex?: number;
}

export const BoxContentSC = styled.View<IBoxContentProps>`
  ${({
  theme,
  pad = '0 0 0 0',
  marg = '0 0 0 0',
  bg = 'transparent',
  w = 'auto',
  h = 'auto',
  inline = false,
  center = false,
  wrap = false,
  flex = 0
}) => {
    const [width, height] = buildSize(w, h);
    return {
      padding: buildSpace(pad),
      margin: buildSpace(marg),
      'background-color': theme.palette[bg],
      width,
      height,
      ...(flex && { flex }),
      'flex-direction': inline ? 'row' : 'column',
      ...(center && {
        justifyContent: 'center',
        alignItems: 'center'
      }),
      ...(wrap && {
        'flex-wrap': 'wrap'
      })
    };
  }}
`;

export interface IBoxSpaceProps extends IBoxContentProps {
  space?: 'between' | 'around' | 'evenly';
  justify?: 'start' | 'end' | 'center';
}

export const BoxSpaceSC = styled(BoxContentSC) <IBoxSpaceProps>`
  ${({ space, justify }) => {
    return {
      ...(space && { justifyContent: `space-${space}` }),
      ...(justify && { justifyContent: `flex-${justify}` })
    };
  }}
`;

export const buildSize = (w: IBoxContentProps['w'], h: IBoxContentProps['h']) => {
  const sizes = [w, h];
  return sizes.map((s) => {
    if (s !== 'auto') {
      if (typeof s === 'string') {
        if (s.includes('%') || s.includes('px')) {
          return s;
        }
        return `${s}px`;
      }
      if (typeof s === 'number') {
        return `${s}px`;
      }
    }
    return s;
  });
};
export const buildSpace = (spacings: string) => {
  const splitedSpaces = spacings.split(' ');
  const spacingns = splitedSpaces.map((s) => `${s}px`).join(' ');
  return spacingns;
};
