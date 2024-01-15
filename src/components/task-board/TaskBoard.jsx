import { useState } from 'react';
import TaskActionbar from './TaskActionbar';
import TaskSearchBox from './TaskSearchBox';
import TaskTable from './TaskTable';
import TaskModal from './TaskModal';

export default function TaskBoard() {
   const [isOpen, setIsOpen] = useState(false);
   const [modalType, setModalType] = useState('add');
   const [tasks, setTasks] = useState([
      {
         id: crypto.randomUUID(),
         title: 'Integration API',
         description: 'Connect an existing API to a third-party database...',
         tags: ['Web', 'Python', 'API'],
         priority: 'high',
         isFavourite: true,
      },
   ]);

   const [searchString, setSearchString] = useState('');

   let searchedTasks = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchString.toLowerCase())
   );

   const [localEditTask, setLocalEditTask] = useState({});

   const onModalSubmit = (newTask, type) => {
      if (type === 'add') setTasks([...tasks, newTask]);
      if (type === 'edit')
         setTasks(
            tasks.map((task) => {
               if (task.id === newTask.id) return newTask;
               else return task;
            })
         );
   };

   const handleEdit = (editTask) => {
      setLocalEditTask(editTask);
   };

   const handleDelete = (id) => {
      setTasks(tasks.filter((task) => task.id !== id));
   };

   const handleDeleteAll = () => {
      setTasks([]);
   };

   const handleFavourite = (id) => {
      setTasks(
         tasks.map((task) => {
            if (task.id === id)
               return { ...task, isFavourite: !task.isFavourite };
            else return task;
         })
      );
   };

   const handleSearch = (search) => setSearchString(search);

   return (
      <>
         {isOpen && (
            <TaskModal
               setIsOpen={setIsOpen}
               type={modalType}
               onModalSubmit={onModalSubmit}
               editTask={localEditTask}
            />
         )}
         <section className="mb-20" id="tasks">
            <div className="container mx-auto">
               <TaskSearchBox onSearch={handleSearch} />
               <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                  <TaskActionbar
                     setIsOpen={setIsOpen}
                     setModalType={setModalType}
                     onClickDeleteAll={handleDeleteAll}
                  />
                  <TaskTable
                     tasks={searchedTasks}
                     setModalType={setModalType}
                     setIsOpen={setIsOpen}
                     onEdit={handleEdit}
                     onClickDelete={handleDelete}
                     onClickFavourite={handleFavourite}
                  />
               </div>
            </div>
         </section>
      </>
   );
}
