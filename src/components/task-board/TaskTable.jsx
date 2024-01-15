import TaskItem from './TaskItem';
import TaskTableHeader from './TaskTableHeader';
import NoTaskFound from './NoTaskFound';

export default function TaskTable({
   tasks,
   setModalType,
   setIsOpen,
   onEdit,
   onClickDelete,
   onClickFavourite,
}) {
   return (
      <div>
         {tasks.length > 0 ? (
            <table className="table-fixed overflow-auto xl:w-full">
               <TaskTableHeader />
               <tbody>
                  {tasks.map((task) => (
                     <TaskItem
                        key={task.id}
                        task={task}
                        setModalType={setModalType}
                        setIsOpen={setIsOpen}
                        onEdit={onEdit}
                        onClickDelete={onClickDelete}
                        onClickFavourite={onClickFavourite}
                     />
                  ))}
               </tbody>
            </table>
         ) : (
            <NoTaskFound />
         )}
      </div>
   );
}
