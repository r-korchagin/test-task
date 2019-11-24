import { observable, 
    computed, 
    action, 
    decorate } from "mobx";

const localStorageName = 'myValueInLocalStorage';

    class TaskListStore {
        constructor(){
            this.taskList = 
              JSON.parse(  localStorage.getItem(localStorageName) || '[]' );
        }

        get getTaskList() {
            return this.taskList;
          }

        get getTaskCount() {
            return this.taskList.length;
        }

        getTaskNameByID(id) {
          let task = this.taskList
          .filter(ts=>ts.id===id)[0];
          if (task) return task.name || 'Unknow name';
          return 'Unknow name';
        }

        getTaskDescriptionByID(id) {
          let task = this.taskList
          .filter(ts=>ts.id===id)[0];
          if (task) return task.description || 'Unknow description';
          return 'Unknow description';
        }
        
        saveTaskList(){
            localStorage.setItem(localStorageName,
                JSON.stringify(this.taskList));
            
        }

        addNewTask(task) {
            this.taskList.push(task);
            this.saveTaskList();
          }
    
        removeTaskByID(id) {
            this.taskList = this
              .taskList
              .filter(ts=>ts.id!==id)
              .map( (v,i) => {
                return Object.assign({}, v, {
                  id: i+1
                });
              });
            this.saveTaskList();
          }

        changeTask(id, name, description){
          this.taskList = this
              .taskList
              .map( v => { 
                if (v.id === id) 
                  return Object.assign({}, v, {
                    name: name,
                    description: description
                  });
                return v;
              });
            this.saveTaskList();
        }

      }
    
      decorate(TaskListStore, {
        taskList: observable,
        getTaskList: computed,
        getTaskCount: computed,
        getTaskNameByID: action,
        getTaskDescriptionByID: action,
        addNewTask: action,
        removeTaskByID: action,
      });
    
      const taskList = new TaskListStore();
    
export default taskList;