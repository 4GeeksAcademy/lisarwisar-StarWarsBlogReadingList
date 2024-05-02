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
			vehicles: [],
			characterDisplay: [],
			planetDisplay: [],
			vehicleDisplay: [],
			favorites: []
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
					await fetch(url)
					.then(res => res.json())
					.then(data => {
						setStore({...store, people: store.people.concat(data)})
					})
					.catch(err => console.error(err))
				}
			},
			getSingleCharacter: async (uid) => {
				const store = getStore();
				let url = `https://www.swapi.tech/api/people/${uid}`
				setStore({...store, characterDisplay: []})
				let emptyArray = []

				fetch(url)
				.then(res => res.json())
				.then(data => {
					setStore({...store, characterDisplay: emptyArray.concat(data)})
					console.log("store: ", store)
				})
				.catch(err => console.error(err))
			},

			getPlanets: async () => {
				const store = getStore();

				for (let i = 1; i < 11; i++){ //capped at first 10 items for the purpose of this excercise
					let url = `https://www.swapi.tech/api/planets/${i}`
					await fetch(url)
					.then(res => res.json())
					.then(data => {setStore({...store, planets: store.planets.concat(data)})})
					.catch(err => console.error(err))
				}
			},

			getSinglePlanet: async (uid) => {
				const store = getStore();
				let url = `https://www.swapi.tech/api/planets/${uid}`
				setStore({...store, planetDisplay: []})
				let emptyArray = []

				fetch(url)
				.then(res => res.json())
				.then(data => {
					setStore({...store, planetDisplay: emptyArray.concat(data)})
					console.log("store: ", store)
				})
				.catch(err => console.error(err))
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
			},

			getSingleVehicle: async (uid) => {
				const store = getStore();
				let url = `https://www.swapi.tech/api/vehicles/${uid}`
				setStore({...store, vehicleDisplay: []})
				let emptyArray = []

				fetch(url)
				.then(res => res.json())
				.then(data => {
					setStore({...store, vehicleDisplay: emptyArray.concat(data)})
					console.log("store: ", store)
				})
				.catch(err => console.error(err))
			},

			addFavorite: (name) => {
				const store = getStore();
				if (store.favorites.includes(name) != true){
					setStore({...store, favorites: store.favorites.concat(name)});
				}
			},
			
			deleteFavorite: (position) => {
				const store = getStore();
				var removed = store.favorites.splice(position, 1);
				setStore({...store, favorites: store.favorites});
			}
		}
	};
};

export default getState;
