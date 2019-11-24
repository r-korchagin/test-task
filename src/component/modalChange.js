import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { observer } from "mobx-react";

import modalStore from '../store/modalStore';
import taskList from '../store/taskListStore';

const ChangeModal = () => {
  const [showSave, setSave] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const showChangeModal = () => {
        setName(taskList.getTaskNameByID(modalStore.changeID));
        setDescription(taskList.getTaskDescriptionByID(modalStore.changeID));
  }

  const closeForm = () => {
    modalStore.closeChangeTaskModal();
  };

  const saveTask = () => {
    taskList.changeTask(modalStore.changeID, name, description)  
    modalStore.closeChangeTaskModal();
  };

  const onChangeName = event => {
    setName(event.target.value);
    setSave(name.length > 0 && description.length > 0);
  };

  const onChangeDescription = event => {
    setDescription(event.target.value);
    setSave(name.length > 0 && description.length > 0);
  };

  return (
    <Modal show={modalStore.changeTaskModal} onShow={showChangeModal} onHide={closeForm} animation={true}>
      <Modal.Header closeButton>
        <Modal.Title>Change Task</Modal.Title>
      </Modal.Header>
      <Form className="form">
        <Modal.Body>
          <Form.Group>
            <label>Name:</label>
            <input
              className="form-control"
              type="text" 
              value={name}
              onChange={onChangeName}
            />
          </Form.Group>
          <Form.Group>
            <label>Description:</label>
            <textarea
              className="form-control"
              rows="3"
              value={description}
              onChange={onChangeDescription}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeForm}>
            Cancel
          </Button>
          <Button variant="secondary" disabled={!showSave} onClick={saveTask}>
            Save
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default observer(ChangeModal);