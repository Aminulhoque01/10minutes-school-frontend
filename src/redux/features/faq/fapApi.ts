// import { baseApi } from "../api/baseApi";
 

// interface Faq {
//   id: number;
//   question: string;
//   answer: string;
//   // Add other fields as per your API response
// }

// const FaqApi = baseApi.injectEndpoints({
//   endpoints: (builder) => ({
//     faq: builder.query<Faq[], void>({
//       query: () => ({
//         url: `/sections`,
//         method: "GET",
//       }),
//       providesTags: ["faq"],  
//     }),
//   }),
// });

// export const { useFaqQuery } = FaqApi;