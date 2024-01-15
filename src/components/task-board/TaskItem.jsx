export default function TaskItem({
   task,
   setModalType,
   setIsOpen,
   onEdit,
   onClickDelete,
   onClickFavourite,
}) {
   const { title, description, tags, priority, isFavourite, id } = task;
   const tagBackground = [
      '#00D991A1',
      '#1C92FFB0',
      '#FE1A1AB5',
      '#BD560BB2',
      '#00B2D9CC',
      '#8407E6A8',
      '#07AC67D6',
      '#2F43F8BF',
      '#AE6D0BDB',
      '#10FBEDB2',
   ];

   return (
      <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
         <td>
            <button onClick={() => onClickFavourite(id)}>
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-star"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="yellow"
                  fill={isFavourite ? 'yellow' : 'none'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
               >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
               </svg>
            </button>
         </td>
         <td>{title}</td>
         <td>
            <div>{description}</div>
         </td>
         <td>
            <ul className="flex justify-center gap-1.5 flex-wrap">
               {tags.map((tag, i) => (
                  <li key={i}>
                     <span
                        style={{
                           background:
                              tagBackground[
                                 Math.round(
                                    Math.random() * (tagBackground.length - 1)
                                 )
                              ],
                        }}
                        className="inline-block h-5 whitespace-nowrap rounded-[45px] px-2.5 text-sm capitalize text-[#F4F5F6]"
                     >
                        {tag}
                     </span>
                  </li>
               ))}
            </ul>
         </td>
         <td className="text-center">{priority}</td>
         <td>
            <div className="flex items-center justify-center space-x-3">
               <button
                  onClick={() => onClickDelete(id)}
                  className="text-red-500"
               >
                  Delete
               </button>
               <button
                  onClick={() => {
                     setModalType('edit');
                     setIsOpen(true);
                     onEdit(task);
                  }}
                  className="text-blue-500"
               >
                  Edit
               </button>
            </div>
         </td>
      </tr>
   );
}
