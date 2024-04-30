const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people: [],
			planets: [],
			vehicles: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getPeople: async () => {
				const store = getStore();

				for (let i = 1; i < 11; i++){ //capped at first 10 characters for the purpose of this excercise
					let url = `https://www.swapi.tech/api/people/${i}`
					fetch(url)
					.then(res => res.json())
					.then(data => {
						setStore({...store, people: store.people.concat(data)})
					})
					.catch(err => console.error(err))
				}
			},
			getPlanets: async () => {
				fetch("https://www.swapi.tech/api/planets")
				.then(res => res.json())
				.then(data => setStore({planets: data}))
				.catch(err => console.error(err))
			},
			getVehicles: async () => {
				fetch("https://www.swapi.tech/api/vehicles")
				.then(res => res.json())
				.then(data => setStore({vehicles: data}))
				.catch(err => console.error(err))
			}
		}
	};
};

export default getState;
