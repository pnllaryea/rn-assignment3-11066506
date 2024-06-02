import React from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';

const categories = [
  { id: '1', name: 'Exercise', tasks: 12, image: require('./assets/exercise.png') },
  { id: '2', name: 'Study', tasks: 12, image: require('./assets/study.png') },
  { id: '3', name: 'Code', tasks: 8, image: require('./assets/code.png') },
  { id: '4', name: 'Cook', tasks: 5, image: require('./assets/cook.png') },
  { id: '5', name: 'Read', tasks: 7, image: require('./assets/read.png') },
  { id: '6', name: 'Shop', tasks: 4, image: require('./assets/shop.png') },
  { id: '7', name: 'Clean', tasks: 6, image: require('./assets/clean.png') },
  { id: '8', name: 'Meditate', tasks: 3, image: require('./assets/meditate.png') },
];

const ongoingTasks = [
  'Mobile App Development',
  'Web Development',
  'Push Ups',
  'Read Book',
  'Grocery Shopping',
  'Yoga',
  'Write Blog Post',
  'Learn Piano',
  'Cook Dinner',
  'Clean Room',
  'Meditate',
  'Watch Tutorial',
  'Respond to Emails',
  'Create Presentation',
  'Plan Vacation',
];

const CategoryItem = ({ category }) => (
  <View style={styles.categoryItem}>
    <Image source={category.image} style={styles.categoryImage} />
    <Text>{category.name}</Text>
    <Text>{category.tasks} Tasks</Text>
  </View>
);

const TaskItem = ({ task }) => (
  <View style={styles.taskItem}>
    <Text>{task}</Text>
  </View>
);

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello, Devs</Text>
          <Text style={styles.taskCount}>14 tasks today</Text>
        </View>
        <TouchableOpacity style={styles.profileIconContainer}>
          <Image source={require('./assets/profile.png')} style={styles.profileIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchBar} placeholder="Search" />
        <TouchableOpacity style={styles.filterButton}>
          <Image source={require('./assets/filter.png')} style={styles.filterIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.categories}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <FlatList
          data={categories}
          renderItem={({ item }) => <CategoryItem category={item} />}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={styles.ongoingTasks}>
        <Text style={styles.sectionTitle}>Ongoing Task</Text>
        {ongoingTasks.map((task, index) => (
          <TaskItem key={index} task={task} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  taskCount: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
  },
  profileIconContainer: {
    borderRadius: 15,
    overflow: 'hidden',
  },
  profileIcon: {
    width: 30,
    height: 30,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  searchBar: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
  },
  filterButton: {
    marginLeft: 10,
  },
  filterIcon: {
    width: 30,
    height: 30,
  },
  categories: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 20,
  },
  categoryItem: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 15,
  },
  categoryImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  ongoingTasks: {
    marginVertical: 20,
  },
  taskItem: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    marginHorizontal: 20,
  },
});

export default App;
