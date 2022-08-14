import { Grid, GridItem, Text, Todo } from 'components';
import { useSelector } from 'react-redux';

export const ToDoList = () => {
  const todos = useSelector(state => state.todos);
  console.log(todos);

  return (
    <>
      {todos.length === 0 && (
        <Text textAlign="center">There are no any todos ... </Text>
      )}

      <Grid>
        {todos.length > 0 &&
          todos.map(({ id, text }, index) => (
            <GridItem key={id}>
              <Todo id={id} text={text} counter={index + 1} />
            </GridItem>
          ))}
      </Grid>
    </>
  );
};
