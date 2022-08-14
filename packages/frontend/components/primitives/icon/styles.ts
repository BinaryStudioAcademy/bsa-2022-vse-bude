import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const icon = ({ iconSizes }: Theme) => css`
  &[data-size='lg'] {
    font-size: ${iconSizes.lg};
  }
  &[data-size='md'] {
    font-size: ${iconSizes.md};
  }
  &[data-size='sm'] {
    font-size: ${iconSizes.sm};
  }
  &[data-size='xs'] {
    font-size: ${iconSizes.xs};
  }
`;
