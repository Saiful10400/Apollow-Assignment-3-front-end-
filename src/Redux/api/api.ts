import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi=createApi(
    {
        reducerPath:"baseApi",
        baseQuery:fetchBaseQuery({baseUrl:"http://localhost:8000/api/"}),
        tagTypes:["room"],
        endpoints:(builder)=>{
            return{
                createProduct:builder.mutation({
                    query:(payload)=>{
                        return{
                            url:"/product",
                            method:"POST",
                            body:payload
                        }
                    }
                }),
                
            }
        }
    }
)

export const{useCreateProductMutation}=baseApi