import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  border: 1px solid;
  border-radius: 15px;
  padding: 10px 15px;
  margin-bottom: 10px;
  background-color: ${(props) => (props.isDragging ? "#f4f4f4" : "white")};
`;

export default function Task({ task, index }) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          aria-roledescription="Press space bar to lift the task"
        >
          {task.content}
        </Container>
      )}
    </Draggable>
  );
}
