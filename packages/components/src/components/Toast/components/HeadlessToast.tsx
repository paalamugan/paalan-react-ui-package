import type { FC } from 'react';
import type { ToastT } from '../types';

import { Box, Text } from '../../../base';

interface HeadlessToastProps {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  id: ToastT['id'];
  toast: { dismiss: (id: ToastT['id']) => void };
}
export const HeadlessToast: FC<HeadlessToastProps> = ({ title, description, id, toast }) => {
  return (
    <Box className="toast-headless">
      <Text className="toast-headless-title">{title}</Text>
      {description && <Text className="toast-headless-description">{description}</Text>}
      <button className="toast-headless-close" onClick={() => toast.dismiss(id)}>
        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
          <path d="M2.96967 2.96967C3.26256 2.67678 3.73744 2.67678 4.03033 2.96967L8 6.939L11.9697 2.96967C12.2626 2.67678 12.7374 2.67678 13.0303 2.96967C13.3232 3.26256 13.3232 3.73744 13.0303 4.03033L9.061 8L13.0303 11.9697C13.2966 12.2359 13.3208 12.6526 13.1029 12.9462L13.0303 13.0303C12.7374 13.3232 12.2626 13.3232 11.9697 13.0303L8 9.061L4.03033 13.0303C3.73744 13.3232 3.26256 13.3232 2.96967 13.0303C2.67678 12.7374 2.67678 12.2626 2.96967 11.9697L6.939 8L2.96967 4.03033C2.7034 3.76406 2.6792 3.3474 2.89705 3.05379L2.96967 2.96967Z"></path>
        </svg>
      </button>
    </Box>
  );
};
