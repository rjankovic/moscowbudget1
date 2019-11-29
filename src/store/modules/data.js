
const state = {
  currentUser: {title: "The government of Moscow", code: "Government"},
  
  users: [
    {title: "The government of Moscow", code: "Government"},
    {title: "Moscow Department of Finance", code: "Finance"},
    {title: "Department of Economic Policy and Development of Moscow", code: "Policy"},
    {title: "Moscow Department of Health", code: "Health"},
    {title: "The main administrators of the budget revenues of the city of Moscow", code: "Revenues"},
    {title: "Chief administrators of sources of financing the budget deficit in Moscow", code: "Administrators"},
    {title: "Coordinators of government programs in Moscow", code: "Coordinators"},
    {title: "The main managers of the budget funds of the city of Moscow", code: "Managers"},
    {title: "Moscow City Compulsory Health Insurance Fund", code: "Fund"}
    
  ]
};

const getters = {
  allUsers: state => state.users,
  currentUser: state => state.currentUser
};

const actions = {
  // async fetchTodos({ commit }) {
  //   const response = await axios.get(
  //     'https://jsonplaceholder.typicode.com/todos'
  //   );

  //   commit('setTodos', response.data);
  // },
  async setCurrentUser({ commit }, user) {
    
    window.console.log('new current user 1'); window.console.log(user);

    commit('setCurrentUser', user.newCurrentUser);
  },
//   async deleteTodo({ commit }, id) {
//     await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

//     commit('removeTodo', id);
//   },
//   async filterTodos({ commit }, e) {
//     // Get selected number
//     const limit = parseInt(
//       e.target.options[e.target.options.selectedIndex].innerText
//     );

//     const response = await axios.get(
//       `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
//     );

//     commit('setTodos', response.data);
//   },
//   async updateTodo({ commit }, updTodo) {
//     const response = await axios.put(
//       `https://jsonplaceholder.typicode.com/todos/${updTodo.id}`,
//       updTodo
//     );

//     console.log(response.data);

//     commit('updateTodo', response.data);
//   }
};

const mutations = {
  setCurrentUser: (state, newCurrentUser) => {window.console.log('new current user'); window.console.log(newCurrentUser); 
  state.currentUser = newCurrentUser},
  // newTodo: (state, todo) => state.todos.unshift(todo),
  // removeTodo: (state, id) =>
  //   (state.todos = state.todos.filter(todo => todo.id !== id)),
  // updateTodo: (state, updTodo) => {
  //   const index = state.todos.findIndex(todo => todo.id === updTodo.id);
  //   if (index !== -1) {
  //     state.todos.splice(index, 1, updTodo);
  //   }
  // }
};

export default {
  state,
  getters,
  actions,
  mutations
};