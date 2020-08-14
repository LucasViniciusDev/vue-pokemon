<template>
	<div>
		<v-row v-if="loading" dense>
			<v-col cols="12" align="center">
				<div>Carregando...</div>
				<v-skeleton-loader
          :loading="loading"
          :transition="'fade-transition'"
          type="article"
					tile
					class="mx-auto"
        />
			</v-col>
		</v-row>
		<template v-else>
			<v-row justify="center" dense>
				<v-col cols="12" align="center">
					<v-img :src="pokemon.sprites.front_default" alt="Pokemon" width="200" />
					<v-chip
						class="ma-2"
						color="success"
						text-color="white"
					>
						<v-avatar left>
							<v-icon>mdi-pokemon-go</v-icon>
						</v-avatar>
						<h2>{{ pokemon.name }}</h2>
					</v-chip>
				</v-col>
			</v-row>

			<v-row justify="center" dense>
				<v-col cols="12" sm="12" md="6" lg="4" align="center">
					<v-divider />
					<v-simple-table>
						<template v-slot:default>
							<tbody>
								<tr>
									<td style="font-weight: bold;">Experiência</td>
									<td>{{ pokemon.base_experience }}</td>
								</tr>
							</tbody>
						</template>
					</v-simple-table>
				</v-col>
			</v-row>

			<v-row justify="center" dense>
				<v-col cols="12" sm="12" md="6" lg="4" align="center">
					<v-divider />
					<v-chip
						class="ma-2"
						color="success"
						text-color="white"
					>
						<v-icon left>mdi-folder-open</v-icon>
						<h3>Habilidades</h3>
					</v-chip>
					<v-simple-table>
						<template v-slot:default>
							<thead>
								<tr>
									<th class="text-left">Nome</th>
									<th class="text-left">Escondido?</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="item in pokemon.abilities" :key="item.ability.name">
									<td>{{ item.ability.name }}</td>
									<td v-if="item.is_hidden"><v-btn icon color="success" small><v-icon>mdi-check</v-icon></v-btn></td>
									<td v-if="!item.is_hidden"><v-btn icon color="error" small><v-icon>mdi-close</v-icon></v-btn></td>
								</tr>
							</tbody>
						</template>
					</v-simple-table>
				</v-col>
			</v-row>

			<v-row justify="center" dense>
				<v-col cols="12" sm="12" md="6" lg="4" align="center">
					<v-divider />
					<v-chip
						class="ma-2"
						color="success"
						text-color="white"
					>
						<v-icon left>mdi-folder-open</v-icon>
						<h3>Estatísticas</h3>
					</v-chip>
          <v-simple-table>
						<template v-slot:default>
							<thead>
								<tr>
									<th class="text-left">Nome</th>
									<th class="text-left">Base</th>
                  <th class="text-left">Esforço</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="item in pokemon.stats" :key="item.stat.name">
									<td>{{ item.stat.name }}</td>
                  <td>{{ item.base_stat }}</td>
                  <td>{{ item.effort }}</td>
								</tr>
							</tbody>
						</template>
					</v-simple-table>
				</v-col>
			</v-row>

      <v-row justify="center" dense>
				<v-col cols="12" sm="12" md="6" lg="4" align="center">
					<v-divider />
					<v-chip
						class="ma-2"
						color="success"
						text-color="white"
					>
						<v-icon left>mdi-folder-open</v-icon>
						<h3>Tipos</h3>
					</v-chip>
          <v-simple-table>
						<template v-slot:default>
							<thead>
								<tr>
									<th class="text-left">Nome</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="item in pokemon.types" :key="item.type.name">
									<td>{{ item.type.name }}</td>
								</tr>
							</tbody>
						</template>
					</v-simple-table>
				</v-col>
			</v-row>

      <v-row justify="center" dense>
				<v-col cols="12" sm="12" md="6" lg="4" align="center">
					<v-divider />
					<v-chip
						class="ma-2"
						color="success"
						text-color="white"
					>
						<v-icon left>mdi-folder-open</v-icon>
						<h3>Formas</h3>
					</v-chip>
          <v-simple-table>
						<template v-slot:default>
							<thead>
								<tr>
									<th class="text-left">Nome</th>
                  <th class="text-left">Pokemon</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="item in pokemon.forms" :key="item.name">
									<td>{{ item.name }}</td>
                  <td>
                    <v-img :src="item.sprites.front_default" alt="Pokemon" width="96" />
                  </td>
								</tr>
							</tbody>
						</template>
					</v-simple-table>
				</v-col>
			</v-row>

      <v-row justify="center" class="mt-5 mb-2" dense>
        <v-col cols="12" sm="12" md="6" lg="4" align="center">
          <v-btn color="success" tile :to="'/pokemons'">
            <v-icon left>mdi-arrow-left</v-icon>
            Voltar
          </v-btn>
        </v-col>
      </v-row>

		</template>
	</div>
</template>

<script>
import PokemonService from '@/services/pokemon'

export default {
	name: 'Pokemon',

	data() {
		return {
			loading: true,
			pokemon: new Object()
		}
	},

	methods: {
		async getPokemon()
		{
			try
			{
				this.loading = true
				let response = await new PokemonService().getByName(this.$route.params.name)
				this.pokemon = response.data.pokemon
			}
			catch(error)
			{
				console.error(error)
				this.$swal('', error.response.data.message, 'danger')
			}
			finally
			{
				this.loading = false
			}
		}
	},

	mounted() {
		this.getPokemon()
	}
}
</script>

<style>

</style>
