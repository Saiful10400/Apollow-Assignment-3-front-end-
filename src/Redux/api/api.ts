import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/" }),
  tagTypes: ["Products"],
  endpoints: (builder) => {
    return {
      createProduct: builder.mutation({
        query: (payload) => {
          return {
            url: "/product",
            method: "POST",
            body: payload,
          };
        },
        invalidatesTags: ["Products"]
      }),
      getProducts: builder.query({
        query: () => {
          return {
            url: "/product",
            method: "GET",
          };
        },
        providesTags:["Products"]
      }),
      getAProduct: builder.query({
        query: (payload) => {
         
          return {
            url: `/product/${payload}`,
            method: "GET",
          };
        },
        providesTags:["Products"]
      }),
      updateProduct: builder.mutation({
        query: ({_id,...rest}) => {
     
          return {
            url: `/product/${_id}`,
            method: "PUT",
            body:rest
          };
        },
        invalidatesTags: ["Products"]
      }),
      deleteProduct: builder.mutation({
        query: ({_id}) => {
      
          return {
            url: `/product/${_id}`,
            method: "DELETE",
           
          };
        },
        invalidatesTags: ["Products"]
      }),
    };
  },
});

export const { useGetAProductQuery,useCreateProductMutation, useGetProductsQuery,useUpdateProductMutation,useDeleteProductMutation } = baseApi;
