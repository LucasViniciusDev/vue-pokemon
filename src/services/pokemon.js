import Services from './services'

export default class Pokemon extends Services
{
  constructor()
  {
    super()
  }

  async getAll(page = 1)
  {
    try
    {
      let response = await this._http.get(`pokemons?page=${page}`)
      return Promise.resolve(response)
    }
    catch(error)
    {
      return Promise.reject(error)
    }
	}
	
	async getByName(name)
	{
		try
		{
			let response = await this._http.get(`pokemons/${name}`)
			return Promise.resolve(response)
		}
		catch(error)
		{
			return Promise.reject(error)
		}
	}
}
