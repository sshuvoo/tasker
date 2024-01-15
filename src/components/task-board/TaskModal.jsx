import { useState } from 'react';

export default function TaskModal({
   setIsOpen,
   type,
   onModalSubmit,
   editTask,
}) {
   const [newTask, setNewTask] = useState(
      type === 'add'
         ? {
              id: crypto.randomUUID(),
              title: '',
              description: '',
              tags: [],
              priority: '',
              isFavourite: false,
           }
         : editTask
   );

   const handleChange = (e) => {
      setNewTask({
         ...newTask,
         [e.target.name]:
            e.target.name === 'tags'
               ? e.target.value.split(',')
               : e.target.value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      onModalSubmit(newTask, type);
      setIsOpen(false);
   };

   return (
      <>
         <span
            onClick={() => setIsOpen(false)}
            className="fixed block inset-0 bg-black w-full h-full z-50 bg-opacity-50"
         ></span>
         <form
            onSubmit={handleSubmit}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:p-11 z-50"
         >
            <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
               {type === 'add' ? 'Add New Task' : 'Edit Task'}
            </h2>

            {/* <!-- inputs --> */}
            <div className="space-y-9 text-white lg:space-y-10">
               {/* <!-- title --> */}
               <div className="space-y-2 lg:space-y-3">
                  <label htmlFor="title">Title</label>
                  <input
                     className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                     type="text"
                     name="title"
                     id="title"
                     required
                     value={newTask.title}
                     onChange={handleChange}
                  />
               </div>
               {/* <!-- description --> */}
               <div className="space-y-2 lg:space-y-3">
                  <label htmlFor="description">Description</label>
                  <textarea
                     className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
                     type="text"
                     name="description"
                     id="description"
                     required
                     value={newTask.description}
                     onChange={handleChange}
                  ></textarea>
               </div>
               {/* <!-- input group --> */}
               <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
                  {/* <!-- tags --> */}
                  <div className="space-y-2 lg:space-y-3">
                     <label htmlFor="tags">Tags</label>
                     <input
                        className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                        type="text"
                        name="tags"
                        id="tags"
                        required
                        value={newTask.tags.join(',')}
                        onChange={handleChange}
                     />
                  </div>
                  {/* <!-- priority --> */}
                  <div className="space-y-2 lg:space-y-3">
                     <label htmlFor="priority">Priority</label>
                     <select
                        className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                        name="priority"
                        id="priority"
                        required
                        value={newTask.priority}
                        onChange={handleChange}
                     >
                        <option value="">Select Priority</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                     </select>
                  </div>
               </div>
            </div>
            {/* <!-- inputs ends --> */}
            <div className="mt-16 flex justify-between lg:mt-20">
               <button
                  onClick={() => setIsOpen(false)}
                  type="button"
                  className="rounded bg-rose-600 px-4 py-2 text-white transition-all hover:opacity-80"
               >
                  Close
               </button>
               <button
                  type="submit"
                  className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
               >
                  {type === 'add' ? 'Create new Task' : 'Update Task'}
               </button>
            </div>
         </form>
      </>
   );
}
