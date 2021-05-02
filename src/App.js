import React, {useState} from 'react';
import Modal from './components/Modal';

function App() {

  const [modalVisible, setModalVisible] = useState(false);

  const handleButtonClick = () => {
    setModalVisible(true);
  }

  return  (
    <>
      <button onClick={handleButtonClick}>Abrir Modal</button>
      <Modal visible={modalVisible} setVisible={setModalVisible}>
       MODAL Components.
      </Modal>
    </>
  );
}

export default App;