<template>
  <v-text-field
    v-bind="$attrs"
    :model-value="formattedValue"
    @update:model-value="onInput"
    @blur="formatOnBlur"
    prefix="R$"
  />
</template>

<script setup>
import { computed, defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: Number, // Valor puro (ex: 1000)
})

const emit = defineEmits(['update:modelValue'])

// Exibir valor formatado no campo (sem centavos)
const formattedValue = computed(() =>
  props.modelValue ? props.modelValue.toLocaleString('pt-BR', { minimumFractionDigits: 0 }) : '',
)

// Manipular entrada do usuário
const onInput = (value) => {
  let numericValue = parseInt(value.replace(/\D/g, ''), 10) || 0 // Sem divisão por 100
  emit('update:modelValue', numericValue) // Atualiza o valor real
}

// Formatar ao sair do campo (opcional)
const formatOnBlur = () => {
  emit('update:modelValue', props.modelValue)
}
</script>
