import React from "react";
import styled from "styled-components";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Task from "./task";

const Container = styled.div`
  margin: 5px;
  border: 1px solid;
  background-color: ${(props) => props.backgroundColor || "white"};
  border-radius: 15px;
  width: 250px;

  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  text-align: center;
`;

const TaskList = styled.div`
  margin: 5px;
  padding: 0 8px;
  flex-grow: 1;
  min-height: 100px;
`;

function InnerList({ tasks }) {
  return tasks.map((task, index) => (
    <Task key={task.id} task={task} index={index} />
  ));
}

export default function Column({ column, tasks, index }) {
  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided) => (
        <Container
          {...provided.draggableProps}
          ref={provided.innerRef}
          backgroundColor={column.backgroundColor}
        >
          <Title {...provided.dragHandleProps}>{column.title}</Title>
          <Droppable droppableId={column.id} type="task">
            {(provided, snapshot) => (
              <TaskList
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                <InnerList tasks={tasks} />
                {provided.placeholder}
              </TaskList>
            )}
          </Droppable>
        </Container>
      )}
    </Draggable>
  );
}
