<template>
  <v-text-field
    v-bind="$attrs"
    :model-value="formattedValue"
    @update:model-value="onInput"
    @blur="formatOnBlur"
    prefix="R$"
  >
  </v-text-field>
</template>

<script setup>
import { computed, defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: Number, // Valor puro (ex: 1000.50)
})

const emit = defineEmits(['update:modelValue'])

// Exibir valor formatado no campo
const formattedValue = computed(
  () =>
    props.modelValue
      ?.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      })
      .replace('R$', '') || '',
)

// Manipular entrada do usuário
const onInput = (value) => {
  let numericValue = parseFloat(value.replace(/\D/g, '')) / 100 || 0
  emit('update:modelValue', numericValue) // Atualiza o valor real
}

// Formatar ao sair do campo
const formatOnBlur = () => {
  emit('update:modelValue', props.modelValue) // Mantém a formatação correta
}
</script>
