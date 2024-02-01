import React, { useState } from 'react'

import { Modal } from 'demo-react-modal'
import 'demo-react-modal/dist/index.css'

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const onCloseHandler = () => {
    setIsModalOpen(false)
  }
  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onClose={onCloseHandler}
        // isCloseBtn={true}
        closeText={'Close'}
        backgroundColor={'blue'}
        textColor={'darkred'}
      >
        <p>
          Employee Created!This HTML file is a template. If you open it directly
          in the browser, you will see an empty page. You can add webfonts, meta
          tags, or analytics to this file. The build step will place the bundled
          scripts into the tag. To begin the development, run `npm start` or
          `yarn start`. To create a production bundle, use `npm run build` or
          `yarn build`.This HTML file is a template. If you open it directly in
          the browser, you will see an empty page. You can add webfonts, meta
          tags, or analytics to this file. The build step will place the bundled
          scripts into the tag. To begin the development, run `npm start` or
          `yarn start`. To create a production bundle, use `npm run build` or
          `yarn build`.This HTML file is a template. If you open it directly in
          the browser, you will see an empty page. You can add webfonts, meta
          tags, or analytics to this file. The build step will place the bundled
          scripts into thetag. To begin the development, run `npm start` or
          `yarn start`. To create a production bundle, use `npm run build` or
          `yarn build`. `yarn build`.This HTML file is a template. If you open
          it directly in the browser, you will see an empty page. You can add
          webfonts, meta tags, or analytics to this file. The build step will
          place the bundled scripts into the tag. To begin the development, run
          `npm start` or `yarn start`. To create a production bundle, use `npm
          run build` or `yarn build`.This HTML file is a template. If you open
          it directly in the browser, you will see an empty page. You can add
          webfonts, meta tags, or analytics to this file. The build step will
          place the bundled scripts into thetag. To begin the development, run
          `npm start` or `yarn start`. To create a production bundle, use `npm
          run build` or `yarn build`.
          <span onClick={onCloseHandler} className='close-text'>
            Close
          </span>
        </p>
      </Modal>
      <button onClick={() => setIsModalOpen(!isModalOpen)}>Open Modal</button>
    </div>
  )
}

export default App
