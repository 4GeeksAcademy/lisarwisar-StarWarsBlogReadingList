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

				for (let i = 1; i < 11; i++){ //capped at first 10 items for the purpose of this excercise
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
				const store = getStore();

				for (let i = 1; i < 11; i++){ //capped at first 10 items for the purpose of this excercise
					let url = `https://www.swapi.tech/api/planets/${i}`
					fetch(url)
					.then(res => res.json())
					.then(data => {setStore({...store, planets: store.planets.concat(data)})})
					.catch(err => console.error(err))
				}
			},
			getVehicles: async () => {
				const store = getStore();
				let all_vehicles = []
				await fetch("https://www.swapi.tech/api/vehicles")
				.then(res => res.json())
				.then(data => {all_vehicles = data?.results})
				.catch(err => console.error(err))

				for (let i = 0; i < 10; i++){ //capped at first 10 items for the purpose of this excercise
					let url = `https://www.swapi.tech/api/vehicles/${all_vehicles[i].uid}`
					fetch(url)
					.then(res => res.json())
					.then(data => {setStore({...store, vehicles: store.vehicles.concat(data)})})
					.catch(err => console.error(err))
				}
				console.log("vehicles: ", store.vehicles)
			}
		}
	};
};

export default getState;
