<template>
  <VaForm ref="formRef" class="flex flex-col items-baseline gap-6">
    <VaInput
      v-model="form.firstName"
      :rules="[(value) => (value && value.length > 0) || 'First name is required']"
      label="firstName"
    />
  
    <VaInput
      v-model="form.lastName"
      :rules="[(value) => (value && value.length > 0) || 'Last name is required']"
      label="Last Name"
    />
  
    <VaDateInput 
      v-model="form.birthDate"
      :rules="[(v) => validateBirthday(v)]"
      label="Birth Date"
      manual-input
      clearable
    />

    <VaTimeInput 
      v-model="form.time"
      :rules="[(v) => v || 'We need to now pick-up time!']"
      label="Pick-up time"
      manual-input
      clearable
    />

    <VaCounter 
      v-model="form.count"
      label="Amount"
      :rules="[(v) => v || 'Field is required', (v) => v < 10 || 'You can not buy less than 10 items']"
      manual-input
    />

    <VaSelect
      v-model="form.country"
      :options="countries"
      :rules="[(v) => v || 'Field is required', (v) => v === 'ua' ? 'Delivery currently unavailable in your country' : undefined]"
      label="Country"
    />

    <VaSlider 
      v-model="form.amount"
      :min="1"
      :max="100"
      :rules="[
        (v: number) => v || 'Field is required',
        (v: number) => form.country === 'us' && v > 20 ? 'Package to US can not be more than 20kg' : true
      ]"
      label="Weight, kg"
      style="width: 100%"
    />
  
    <VaSwitch 
      v-model="form.notifications"
      label="Notifications"
      size="small"
      :rules="[(v) => v || 'You must agree on notifications']"
    />
  
    <div>
      <span class="va-title">Payment method</span>
      <VaOptionList
        v-model="form.paymentMethod"
        :options="['Visa', 'MasterCard', 'PayPal']"
        :rules="[(v) => v === 'PayPal' || 'Only PayPal is currently available']"
        type="radio"
      />      
    </div>

    <VaCheckbox 
      v-model="form.acknowledgement"
      :rules="[(v) => v || 'You must agree with terms and conditions']"
      label="I'm okay if you lose my package"
    />

    <VaButton :disabled="!isValid" @click="validate() && submit()">
      Submit
    </VaButton>
  </VaForm>

  <div class="mt-8 flex w-full gap-3 background-element">
    <VaButton @click="validate() && submit()">
      Validate
    </VaButton>
    <VaButton @click="resetValidation">
      Reset validation
    </VaButton>
    <VaButton @click="reset">
      Reset
    </VaButton>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useForm } from 'vuestic-ui'
import { VaForm, VaInput, VaDateInput, VaTimeInput, VaCounter, VaSelect, VaSlider, VaSwitch, VaOptionList, VaCheckbox, VaButton } from 'vuestic-ui'

const formRef = ref()
const { isValid, validate, reset, resetValidation } = useForm(formRef)

const form = reactive({
  firstName: '',
  lastName: '',
  country: '',
  birthDate: null as Date | null,
  time: undefined as Date | undefined,
  acknowledgement: false,
  notifications: true,
  paymentMethod: '',
  amount: 1,
  count: 1,
})

const countries = [
  { value: 'ua', text: 'Ukraine' },
  { value: 'us', text: 'USA' },
  { value: 'uk', text: 'United Kingdom' },
]
const validateBirthday = (value: any) => {
  if (!value || (Array.isArray(value) && value.length === 0)) {
    return 'Field is required'
  }

  let dateValue: Date | null = null
  if (Array.isArray(value)) {
    value = value[0]
  }
  if (value instanceof Date) {
    dateValue = value
  } else if (typeof value === 'string' || typeof value === 'number') {
    const parsed = new Date(value)
    if (!isNaN(parsed.getTime())) {
      dateValue = parsed
    }
  } else if (value && typeof value === 'object' && 'start' in value && value.start) {
    if (value.start instanceof Date) {
      dateValue = value.start
    } else if (typeof value.start === 'string' || typeof value.start === 'number') {
      const parsed = new Date(value.start)
      if (!isNaN(parsed.getTime())) {
        dateValue = parsed
      }
    }
  }

  if (!dateValue) {
    return 'Invalid date'
  }

  const today = new Date()
  let yearDiff = today.getFullYear() - dateValue.getFullYear()
  const monthDiff = today.getMonth() - dateValue.getMonth()

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dateValue.getDate())) {
    yearDiff--
  }

  return yearDiff >= 18 || 'You must be at least 18 years old'
}

const submit = () => alert('Form submitted!')
</script>
