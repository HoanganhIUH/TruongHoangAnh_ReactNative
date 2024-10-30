// TodoApp.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from './store/todoSlice';
import { Text, TextInput, View, FlatList, Pressable, StyleSheet } from 'react-native';

export default function TodoApp() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.list);

  useEffect(() => {
    dispatch({ type: 'FETCH_TODOS' });
  }, [dispatch]);

  const handleAddTodo = () => {
    if (text) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo App</Text>
      <TextInput
        placeholder="Add new todo"
        value={text}
        onChangeText={setText}
        style={styles.input}
      />
      <Pressable onPress={handleAddTodo} style={styles.addButton}>
        <Text style={styles.addButtonText}>Add Todo</Text>
      </Pressable>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.todoContainer}>
            <Pressable onPress={() => dispatch(toggleTodo(item.id))}>
              <Text style={[styles.todoText, item.completed && styles.completed]}>
                {item.text}
              </Text>
            </Pressable>
            <Pressable onPress={() => dispatch(removeTodo(item.id))} style={styles.removeButton}>
              <Text style={styles.removeButtonText}>Remove</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    width: '100%',
    maxWidth: 500,
    borderRadius: 4,
    backgroundColor: 'white',
  },
  addButton: {
    padding: 10,
    backgroundColor: '#28a745',
    borderRadius: 4,
    marginBottom: 20,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  todoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 500,
    padding: 10,
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 4,
  },
  todoText: {
    fontSize: 16,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  removeButton: {
    padding: 5,
    backgroundColor: '#dc3545',
    borderRadius: 4,
  },
  removeButtonText: {
    color: 'white',
  },
});
