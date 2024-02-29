export const shopApi = createApi({
  reducerPath : 'shopApi',
  baseQuery : fetchBaseQuery({baseUrl : 'http://localhost:5000'}),
  endpoints : (builder) => ({
    getProducts : builder.query({
      query : () => '/products'
    })
  })
})