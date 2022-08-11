import { toast, ToastOptions, TypeOptions } from 'react-toastify';

import styles from './styles.module.scss';
import 'react-toastify/dist/ReactToastify.css';

const notification = (massage: string, title: string) => (
  <>
    <div className={styles['notify-wrap']}>
      <div className={styles.type}>{title}!</div>
      <span className={styles.message}>{massage}</span>
    </div>
  </>
);

const notify = (
  type: TypeOptions,
  massage: string,
  toastId: string | null = null,
) => {
  const toastOptions: ToastOptions = {
    className: styles['notify-container'],
    position: 'bottom-right',
    type,
  };

  if (toastId) {
    toastOptions.toastId = toastId;
  }

  return toast(notification(massage, type), toastOptions);
};

export default notify;
