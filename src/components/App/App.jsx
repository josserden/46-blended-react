import { nanoid } from 'nanoid';

import {
  Container,
  Grid,
  GridItem,
  Header,
  SearchForm,
  Section,
  Text,
  Todo,
  ToDoList,
} from 'components';
import { useLocalStorage } from 'hooks';

export const App = () => {
  // const [todos, setTodos] = useLocalStorage('todos', []);

  // const deleteTodo = id => {
  //   setTodos(todos.filter(todo => todo.id !== id));
  // };

  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />
          <ToDoList />
        </Container>
      </Section>
    </>
  );
};
