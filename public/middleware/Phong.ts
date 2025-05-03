import axios from 'axios'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const res = await axios.get(`${config.apiBase}/PhongWithTienNghi`)
  return res.data
})
