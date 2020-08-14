export default [
  {
    path: '*',
    redirect: '/pokemons'
  },{
    path: '/pokemons',
    name: 'Pokemons',
    component: () => import('@/views/Pokemons')
  },{
		path: '/pokemon/:name',
		name: 'Pokemon',
		component: () => import('@/views/Pokemon')
	}
]
