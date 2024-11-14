import { checkboxAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const baseStyle = definePartsStyle({
  label: {
    flex: '1 1 auto',
    color: 'blackAlpha.600',
    _checked: {
      color: 'blackAlpha.800',
      fontWeight: 'semibold',
    },
  },
});

const sizes = {
  md: definePartsStyle({
    control: defineStyle({
      rounded: '4px',
    }),
    label: {
      ml: 3,
    },
  }),
};

export const checkboxTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: { size: 'md' },
});
