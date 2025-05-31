<template>
  <VaList>
    <VaListLabel> Contacts </VaListLabel>

    <VaListItem
      v-for="(contact, index) in contacts"
      :key="index"
      class="list__item"
    >
      <VaListItemSection avatar>
        <VaAvatar>
          <img :src="contact.img" :alt="contact.name" />
        </VaAvatar>
      </VaListItemSection>

      <VaListItemSection>
        <VaListItemLabel>
          {{ contact.name }}
        </VaListItemLabel>

        <VaListItemLabel caption>
          {{ contact.address }}
        </VaListItemLabel>
      </VaListItemSection>

      <VaListItemSection icon>
        <VaIcon
          name="remove_red_eye"
          color="background-element"
        />
      </VaListItemSection>
    </VaListItem>
  </VaList>
</template>

<script>
export default {
  name: 'ContactList',
  props: {
    contacts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.list__item + .list__item {
  margin-top: 20px;
}
</style>
