import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const DraggableCategory = ({ category, index, moveCategory }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "category",
    item: { index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [, drop] = useDrop({
    accept: "category",
    hover: (item) => {
      if (item.index !== index) {
        moveCategory(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    <li 
    ref={(node) => drag(drop(node))} key={index} className={` flex h-[2rem] items-center  w-1/2 mb-2 ${isDragging ? "opacity-50" : ""}`}>
      <i className="fa-solid fa-grip bg-white p-1"></i> 
      <span className=' border shadow w-1/3 pl-1 text-left bg-white mx-2'>{category}</span>
      <i className="fa-solid fa-xmark"></i>
    </li>
  )
};

export default DraggableCategory