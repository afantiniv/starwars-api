const getState =({
	getStore,
	getActions,
	setStore
}) => {
	return{
		store:{
			people: [], 
			character: [], 
			planets: [], 
			planet: [], 
			starShips: [], 
			starShip: [], 
			favorites: []
		},
		/*actions:{
			getPlanets: async () => {
				let resp = await fetch("https://www.swapi.tech/api/planets")
				let data = await resp.json()
				setStore({
					...getStore(),
					planets: data.results
				})
			}
		}*/
		actions: {

			addFav: item => {
				const store = getStore()
				setStore({ favorites: [...store.favorites, { item }] })
			},

			removeFav: id => {
				let value = document.getElementById(id).title
				const store = getStore()
				setStore({ favorites: store.favorites.filter(fav => fav.item !== value) })
			},

			getPeople: async () => {
				const settings = {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				}

				const request = await fetch(`https://www.swapi.tech/api/people?page=1&limit=0`, settings)
				const json = await request.json()
				const data = json
				setStore({ people: data.results })
			},

			getCharacterDescription: async url => {
				const store = getStore()
				const settings = {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				}

				const request = await fetch(url, settings)
				const json = await request.json()
				const data = json
				setStore({ character: [...store.character, data.result.properties] })
			},

			charDescription: url => {
				getActions().getCharacterDescription(url)
			},

			getPlanets: async () => {
				const settings = {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				}

				const request = await fetch(`https://www.swapi.tech/api/planets?page=1&limit=0`, settings)
				const json = await request.json()
				const data = json
				setStore({
					...getStore(),
					planets: data.results
				})
			},

			getPlanetDescription: async url => {
				const store = getStore()
				const settings = {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				}

				const request = await fetch(url, settings)
				const json = await request.json()
				const data = json
				setStore({ planet: [...store.planet, data.result.properties] })
			},

			planetDescription: url => {
				getActions().getPlanetDescription(url)
			}
		}
	}
}

export default getState
