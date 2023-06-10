import React from 'react';

import Button from '../Button';
import ToastShelf from '../ToastShelf';
import { ToastContext } from '../ToastProvider';
import { VARIANT_INFO, DEFAULT_VARIANT } from '../Toast';
import styles from './ToastPlayground.module.css';

const DEFAULT_MESSAGE = '';

function ToastPlayground() {
  const [variant, setVariant] = React.useState(DEFAULT_VARIANT);
  const [message, setMessage] = React.useState(DEFAULT_MESSAGE);

  const  {addNewToast}  = React.useContext(ToastContext);

  const addToast = (event) => {
    event.preventDefault();

    addNewToast({
      variant,
      message,
    })

    setVariant(DEFAULT_VARIANT);
    setMessage(DEFAULT_MESSAGE);   
  }

  return (

    <form className={styles.wrapper} onSubmit={addToast}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <div className={styles.controlsWrapper}>
        <ToastShelf  />

        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput} value={message} onChange={(event) => setMessage(event.target.value)} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {Object.keys(VARIANT_INFO).map(option => {
              return (
                <React.Fragment key={option}>
                  <label htmlFor={`variant-${option}`}>
                  <input
                    id={`variant-${option}`}
                    type="radio"
                    name="variant"
                    value={variant}
                    checked={option===variant}
                    onChange={() => setVariant(option)}
              />
                {option}
              </label>
            </React.Fragment>
              )
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ToastPlayground;
