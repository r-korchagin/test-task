import { observable, 
    computed, 
    action, 
    decorate } from "mobx";

    class ModalStore {
        constructor(){
            this.newTaskModal = false;
            this.changeTaskModal = false;
            this.changeID = 0;
        }

        get isNewTaskModal() {
            return this.newTaskModal;
          }

        get isChangeTaskModal() {
            return this.changeTaskModal;
        }

        get getChangeID() {
          return this.changeID;
        }
        
        openNewTaskModal() {
            this.newTaskModal = true;
          }
    
        closeNewTaskModal() {
            this.newTaskModal = false;
          }

        openChangeTaskModal(id) {
          this.changeTaskModal = true;
          this.changeID = id;
        }

        closeChangeTaskModal() {
          this.changeTaskModal = false;
        }

      }
    
      decorate(ModalStore, {
        newTaskModal: observable,
        changeTaskModal: observable,
        changeID:observable,
        getChangeID: computed,
        isNewTaskModal: computed,
        isChangeTaskModal: computed,
        openNewTaskModal: action,
        closeNewTaskModal: action,
        openChangeTaskModal: action,
        closeChangeTaskModal: action,
      });
    
      const modalStore = new ModalStore();
    
export default modalStore;    