import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

export const selectCategory = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const categoriesSelector = createSelector(
  [selectCategory],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);

// const selectCategoryReducer = (state) => state.categories;

// export const selectCategory = createSelector(
//   [selectCategoryReducer],
//   (categoriesSlice) => categoriesSlice.categories
// );

// export const categoriesSelector = createSelector(
//   [selectCategory],
//   (categories) =>
//     categories.reduce((acc, category) => {
//       const { title, items } = category;
//       acc[title.toLowerCase()] = items;
//       return acc;
//     }, {})
// );
