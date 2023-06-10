import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';
import { ToastContext } from '../ToastProvider/ToastProvider';

export const VARIANT_INFO = {
  notice: {
    styles: styles.notice,
    icon: Info,
  },
  warning: {
    styles: styles.warning,
    icon: AlertTriangle,
  },
  success: {
    styles: styles.success,
    icon: CheckCircle,
  },
  error: {
    styles: styles.error,
    icon: AlertOctagon,
  },
};
export const DEFAULT_VARIANT = 'notice';


function Toast({id, variant, message}) {
  const { closeToast } = React.useContext(ToastContext);

  if (!Object.keys(VARIANT_INFO).includes(variant)) {
    throw new Error(`Unknown variant provided ${variant}`)
  }

  const Icon = VARIANT_INFO[variant].icon;
  const CN = VARIANT_INFO[variant].styles;

  return (
    <div className={`${styles.toast} ${CN}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        {message}
      </p>
      <VisuallyHidden>Dismiss message</VisuallyHidden>
      <button className={styles.closeButton} onClick={() => closeToast(id)} aria-label='Dismiss message' aria-live='off'>
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
