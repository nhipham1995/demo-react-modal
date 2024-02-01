import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { faX } from '@fortawesome/free-solid-svg-icons'
import styles from './styles.module.css'

export const Modal = ({
  isOpen,
  onClose,
  isCloseBtn,
  backgroundColor,
  textColor,
  closeText,
  children
}) => {
  const [prepareClose, setPrepareClose] = useState(false)

  const onCloseHandler = () => {
    setPrepareClose(true)
    setTimeout(() => {
      onClose(false)
      setPrepareClose(false)
    }, 800)
  }

  return (
    isOpen && (
      <div
        className={[
          styles.modal,
          styles.modalFadeIn,
          prepareClose && styles.modalFadeOut
        ].join(' ')}
        onClick={onCloseHandler}
      >
        <div
          className={styles.modalContent}
          style={{
            backgroundColor: backgroundColor,
            borderColor: backgroundColor,
            color: textColor
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <span
              className={
                closeText && isCloseBtn !== false
                  ? [styles.close, styles.doubleClose].join(' ')
                  : [styles.close, styles.simpleClose].join(' ')
              }
              onClick={onCloseHandler}
            >
              {isCloseBtn !== false && (
                <FontAwesomeIcon icon={faX} style={{ paddingTop: '8px' }} />
              )}
              <p>{closeText}</p>
            </span>
          </div>

          <div className={styles.content}> {children}</div>
        </div>
      </div>
    )
  )
}
