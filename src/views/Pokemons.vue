<template>
  <div>
    <h3>Pokemons</h3>
    <v-card>
      <v-card-text>
        <v-data-table
          :headers="table.headers"
          :items="table.data"
          :loading="loading"
          loading-text="Carregando..."
          :items-per-page="20"
          :search="table.search"
        >
          <template v-slot:top>
            <v-row dense>
              <v-col cols="12" sm="12" md="6">
                <v-text-field v-model="table.search" placeholder="Procurar..." />
              </v-col>
            </v-row>
          </template>
          <template v-slot:[`item.sprites.front_default`]="{ item }">
            <v-img :src="item.sprites.front_default" alt="Pokemon" width="96" />
          </template>
          <template v-slot:[`item.name`]="{ item }">
            <span style="font-weight: bold;">{{ item.name }}</span>
          </template>
					<template v-slot:[`item.actions`]="{ item }">
						<v-btn icon fab small title="Visualizar" :to="`/pokemon/${item.name}`">
							<v-icon>mdi-eye</v-icon>
						</v-btn>
					</template>
        </v-data-table>
      </v-card-text>
      <v-card-actions>
        <v-pagination
          v-model="page"
          class="my-4"
          :length="totalPages"
          :total-visible="7"
          :disabled="loading"
          @input="loadPokemons()"
        />
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import PokemonService from '@/services/pokemon'

export default {
  name: 'Pokemons',

  data() {
    return {
      loading: false,
      page: parseInt(localStorage.getItem('current_page')) || 1,
      totalPages: 0,

      table: {
        search: '',
				data: [],

        headers: [
					{
            text: 'Pokemon',
            value: 'sprites.front_default'
          },{
            text: 'Nome',
            value: 'name'
          },{
            text: '',
            value: 'actions'
          }
        ]
      }
    }
  },

  methods: {
    async loadPokemons() 
    {
      try
      {
        this.loading = true
				this.table.data = []
        let response = await new PokemonService().getAll(this.page)
        this.table.data = response.data.pokemons
        this.totalPages = response.data.total_pages
        localStorage.setItem('current_page', this.page)
      }
      catch(error)
      {
        console.error(error)
        this.$swal('', error.response.data.message, 'error')
      }
      finally
      {
        this.loading = false
      }
    }
  },

  mounted()
  {
    this.loadPokemons()
  }
}
</script>

<style>

</style>
