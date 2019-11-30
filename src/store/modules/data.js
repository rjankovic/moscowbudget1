
const state = {
  currentUser: {title: "The government of Moscow", code: "Government"},
  currentDate: "2020-01-01",

  users: [
    {id: 1, title: "The government of Moscow", code: "Government"},
    {id: 2, title: "Moscow Department of Finance", code: "Finance"},
    {id: 3, title: "Department of Economic Policy and Development of Moscow", code: "Policy"},
    {id: 4, title: "Moscow Department of Health", code: "Health"},
    {id: 5, title: "The main administrators of the budget revenues of the city of Moscow", code: "Revenues"},
    {id: 6, title: "Chief administrators of sources of financing the budget deficit in Moscow", code: "Administrators"},
    {id: 7, title: "Coordinators of government programs in Moscow", code: "Coordinators"},
    {id: 8, title: "The main managers of the budget funds of the city of Moscow", code: "Managers"},
    {id: 9, title: "Moscow City Compulsory Health Insurance Fund", code: "Fund"}
  ],

  processes:
  [
    {id: 1, title: "Prediction of the main parameters of the draft budget", fromMonth: 1, fromDay: 1, toMonth: 6, toDay: 15},
    {id: 2, title: "Preparation of the draft budget", fromMonth: 6, fromDay: 15, toMonth: 9, toDay: 20},
    {id: 3, title: "Consideration and approval of the draft budget", fromMonth: 9, fromDay: 20, toMonth: 10, toDay: 1},
  ],

  processPeriods:
  [
    {id: 1, process_id: 1, fromMonth: 1, fromDay: 1, toMonth: 5, toDay: 15},
    {id: 2, process_id: 1, fromMonth: 5, fromDay: 15, toMonth: 6, toDay: 1},
    {id: 3, process_id: 1, fromMonth: 6, fromDay: 1, toMonth: 6, toDay: 5},
    {id: 4, process_id: 1, fromMonth: 6, fromDay: 5, toMnth: 6, toDay: 15},
  ],

  tasks:
  [
    // 1a
    // originator, recipient
    {id: 1, name: "Task 1", 
    description: "Provides a list of indicators of the socio-economic development of the city of Moscow used by the chief administrators of the budget revenues of the city of Moscow and the chief administrators of the sources of financing the budget deficit of the city of Moscow when forecasting revenues in accordance with their approved methods for forecasting the revenue of the budget of the city of Moscow and the sources of financing the budget deficit of the city of Moscow", 
    status: 1, procesPeriodId: 1, year: 2019, authority: 3, assignedTo: 2},

    // 1b
    {id: 2, name: "Task 1", 
    description: "It presents the scenario conditions for the functioning of the Moscow city economy, the main parameters of the forecast of the socio-economic development of the city of Moscow for the next financial year and the planning period for making the forecast of the socio-economic development of the city of Moscow for the next financial year and the planning period, including, including the forecast of indicators of social and economic development of the city of Moscow, used by the chief administrators of budget revenues of the city of Moscow and the chief administrators of sources of financing for Moscow budget surplus when forecasting revenues in accordance with their approved methods for forecasting the revenue of the Moscow city budget and sources of financing the Moscow city budget deficit", 
    status: 1, procesPeriodId: 2, year: 2019, authority: 2, assignedTo: 3},

    {id: 3, name: "Task 2", 
    description: "It provides information on the number of insured persons under compulsory medical insurance as of January 1 of the current financial year, including the unemployed population, and the projected volumes of inter-budget transfers from the budget of the Federal Fund for Compulsory Medical Insurance for the next financial year and planning period for financial support of the organization of compulsory medical insurance in the city of Moscow", 
    status: 1, procesPeriodId: 2, year: 2019, authority: 2, assignedTo: 9},

    {id: 4, name: "Task 2", 
    description: "It provides information on the number of insured persons under compulsory medical insurance as of January 1 of the current financial year, including the unemployed population, and the projected volumes of inter-budget transfers from the budget of the Federal Fund for Compulsory Medical Insurance for the next financial year and planning period for financial support of the organization of compulsory medical insurance in the city of Moscow", 
    status: 1, procesPeriodId: 2, year: 2019, authority: 3, assignedTo: 9},

    {id: 5, name: "Task 2", 
    description: "It provides information on the number of insured persons under compulsory medical insurance as of January 1 of the current financial year, including the unemployed population, and the projected volumes of inter-budget transfers from the budget of the Federal Fund for Compulsory Medical Insurance for the next financial year and planning period for financial support of the organization of compulsory medical insurance in the city of Moscow", 
    status: 1, procesPeriodId: 2, year: 2019, authority: 4, assignedTo: 9},

    // 1c
  ]

/*
id int identity (1, 1),
	name nvarchar(100) not null,
	description nvarchar(max) not null,
	status int not null,
	process_period_id int not null,
	year int not null,
	authority int not null,
	assigned_to int not null,
*/

/*
Process 1a
Task 1
Description:
Provides a list of indicators of the socio-economic development of the city of Moscow used by the chief administrators of the budget revenues of the city of Moscow and the chief administrators of the sources of financing the budget deficit of the city of Moscow when forecasting revenues in accordance with their approved methods for forecasting the revenue of the budget of the city of Moscow and the sources of financing the budget deficit of the city of Moscow
From: Moscow Department of Finance
To: Department of Economic Policy and Development of Moscow

Process 1b
Task 1
Description:
It presents the scenario conditions for the functioning of the Moscow city economy, the main parameters of the forecast of the socio-economic development of the city of Moscow for the next financial year and the planning period for making the forecast of the socio-economic development of the city of Moscow for the next financial year and the planning period, including, including the forecast of indicators of social and economic development of the city of Moscow, used by the chief administrators of budget revenues of the city of Moscow and the chief administrators of sources of financing for Moscow budget surplus when forecasting revenues in accordance with their approved methods for forecasting the revenue of the Moscow city budget and sources of financing the Moscow city budget deficit
From: Department of Economic Policy and Development of Moscow
To: Moscow Department of Finance

Task 2
Description:
It provides information on the number of insured persons under compulsory medical insurance as of January 1 of the current financial year, including the unemployed population, and the projected volumes of inter-budget transfers from the budget of the Federal Fund for Compulsory Medical Insurance for the next financial year and planning period for financial support of the organization of compulsory medical insurance in the city of Moscow
From: Moscow City Compulsory Health Insurance Fund
To: Moscow Department of Finance; Department of Economic Policy and Development of Moscow; Moscow Department of Health


Process 1c
Task 1
Description:
Submits proposals on the volume of budget allocations for the implementation of the targeted investment program of the city of Moscow in the context of state programs of the city of Moscow, non-programmed areas of activity of state authorities of the city of Moscow and the main managers of budget funds
From: Department of Economic Policy and Development of Moscow
To: Moscow Department of Finance

Task 2
Description:
Presents a draft tax policy guidelines for the next fiscal year and planning period
From: Department of Economic Policy and Development of Moscow
To: Moscow Department of Finance

Task 3
Description:
Using the automated information system for managing city finances, sends the scenario conditions for the functioning of the Moscow city economy and the main forecast parameters for the social and economic development of Moscow for the next financial year and planning period, developed by the Department of Economic Policy and Development of Moscow
From: Moscow Department of Finance
To: The main administrators of the budget revenues of the city of Moscow; Chief administrators of sources of financing the budget deficit in Moscow

Process 1d
Task 1
Description:
They present forecast indicators for tax and non-tax revenues of the Moscow city budget for the next financial year and planning period, and revenues from sources of financing the budget deficit of Moscow with the necessary calculations in accordance with the approved methods for forecasting revenues to the budget of the city of Moscow and revenues from sources of financing the budget deficit of the city of Moscow and the justifications for the preparation of an explanatory note to the draft law of the city of Moscow on the budget of the city of Moscow on och fiscal year and planning period
From: The main administrators of the budget revenues of the city of Moscow; Chief administrators of sources of financing the budget deficit in Moscow
To: Moscow Department of Finance

*/

/*
Processes

1.	Prediction of the main parameters of the draft budget
a.	From January 1 to May 15 of the current financial year
b.	From May 15 to June 1 of the current financial year
c.	From June 1 to June 5 of the current financial year
d.	From June 5 to June 15 of the current financial year

2.	Preparation of the draft budget
a.	From June 15 to June 20 of the current financial year
b.	From June 20 to June 25 of the current financial year
c.	From June 25 to July 1 of the current financial year
d.	From July 1 to July 10 of the current financial year
e.	From July 10 to August 1 of the current financial year
f.	From August 1 to August 5 of the current financial year
g.	From August 5 to August 10 of the current financial year
h.	From August 10 to August 15 of the current financial year
i.	From August 15 to August 20 of the current financial year
j.	From August 20 to September 5 of the current financial year
k.	From September 5 to September 20 of the current financial year

3.	Consideration and approval of the draft budget
a.	From September 20 to September 25 of the current financial year
b.	From September 25 to October 1 of the current financial year
*/



};

const getters = {
  allUsers: state => state.users,
  currentUser: state => state.currentUser,
  currentDate: state => state.currentDate
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
  async setCurrentDate({ commit }, date) {
    
    commit('setCurrentDate', date.newCurrentDate);
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
  setCurrentDate: (state, newCurrentDate) => {state.currentDate = newCurrentDate},
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