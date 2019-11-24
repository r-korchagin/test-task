import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { observer } from "mobx-react";

import modalStore from '../store/modalStore';
import taskList from '../store/taskListStore';

const CreateModal = () => {
  const [showSave, setSave] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const closeForm = () => {
    modalStore.closeNewTaskModal();
  };

  const saveTask = () => {
    taskList.addNewTask({ 
        id:taskList.getTaskCount + 1,
        name:name,
        description:description
    })  
    modalStore.closeNewTaskModal();
  };

  const onChangeName = event => {
    setName(event.target.value);
    setSave(event.target.value > 0 && description.length > 0);
  };

  const onChangeDescription = event => {
    setDescription(event.target.value);
    setSave(name.length > 0 && event.target.value.length > 0);
  };

  return (
    <Modal show={modalStore.newTaskModal} onHide={closeForm} animation={true}>
      <Modal.Header closeButton>
        <Modal.Title>New Task</Modal.Title>
      </Modal.Header>
      <Form className="form">
        <Modal.Body>
          <Form.Group>
            <label>Name:</label>
            <input
              className="form-control"
              type="text"
              onChange={onChangeName}
            />
          </Form.Group>
          <Form.Group>
            <label>Description:</label>
            <textarea
              className="form-control"
              rows="3"
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

export default observer(CreateModal);
