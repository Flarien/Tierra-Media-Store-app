import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_url } from "../firebase/database";

export const shopApi = createApi({
  reducerPath: "shopApi",

  baseQuery: fetchBaseQuery({ baseUrl: base_url }),

  endpoints: (builder) => ({

    getProductsByCategory: builder.query({
      query: (category) =>
        `products.json?orderBy="category"&equalTo="${category}"`,
    }),
    getCategories: builder.query({
      query: () => "categories.json",
    }),
    postOrder: builder.mutation({
      query: ({ ...order }) => ({
        url: "orders.json",
        method: "POST",
        body: order,
      }),
      onError: (error) => {
        console.error("Error al enviar la orden:", error);
        // Aquí puedes agregar la lógica para mostrar un mensaje de error al usuario
      },
    }),
    getOrders: builder.query({
      query: () => "orders.json",
    }),
    postProfileImage: builder.mutation({
      query: ({ localId, image }) => ({
        url: `profileImages/${localId}.json`,
        method: "PUT",
        body: { image: image },
      }),
    }),
    getProfileImage: builder.query({
      query: (localId) => `profileImages/${localId}.json`,
    }),
    postUserLocation: builder.mutation({
      query: ({ localId, location }) => ({
        url: `locations/${localId}.json`,
        method: "PUT",
        body: {
          latitude: location.latitude,
          longitude: location.longitude,
          address: location.address,
        },
      }),
    }),
    getUserLocation: builder.query({
      query: (localId) => `locations/${localId}.json`,
    }),
  }),
});

export const {
  useGetProductsByCategoryQuery,
  useGetCategoriesQuery,
  usePostOrderMutation,
  useGetOrdersQuery,
  usePostProfileImageMutation,
  useGetProfileImageQuery,
  usePostUserLocationMutation,
  useGetUserLocationQuery,
} = shopApi;
