import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { HydrateAction } from '@types';
import type { ProductDto, DeleteProduct } from '@vse-bude/shared';
import { HYDRATE } from 'next-redux-wrapper';
import {
  fetchMyListSSR,
  addItemToArchive,
  addItemToPosted,
  deleteItem,
} from './actions';

interface MyListState {
  itemsList: ProductDto[] | null;
  filterType: null | string;
  filterStatus: {
    all: boolean;
    purchased: boolean;
    sold: boolean;
    posted: boolean;
    draft: boolean;
    archived: boolean;
  };
  badges: Badges[];
  showCancelModal: boolean;
  showDeleteModal: boolean;
  itemId: string;
  loading: boolean;
  error: string;
}

interface Badges {
  type?: 'status' | 'type';
  value?: string;
}

interface Status {
  statusName: string;
  statusValue: string;
}

interface Type {
  typeName: string;
  typeValue: string;
}

const initialState: MyListState = {
  itemsList: null,
  filterType: null,
  filterStatus: {
    all: true,
    purchased: false,
    sold: false,
    posted: false,
    draft: false,
    archived: false,
  },
  badges: [],
  showCancelModal: false,
  showDeleteModal: false,
  itemId: null,
  loading: false,
  error: null,
};

const myListSlice = createSlice({
  name: 'mylist',
  initialState,
  reducers: {
    filterByType: (state, action: PayloadAction<Type>) => {
      state.filterType = action.payload.typeName;

      state.badges.splice(1, 1, {
        type: 'type',
        value: action.payload.typeValue,
      });
    },

    filterByStatus: (state, action: PayloadAction<Status>) => {
      for (const key in state.filterStatus) {
        if (key !== action.payload.statusName) {
          state.filterStatus[key] = false;
        }
      }
      state.filterStatus[action.payload.statusName] =
        !state.filterStatus[action.payload.statusName];

      state.badges.splice(0, 1, {
        type: 'status',
        value: action.payload.statusValue,
      });
    },

    resetStatuses: (state, action: PayloadAction<string>) => {
      for (const key in state.filterStatus) {
        if (key !== 'all') {
          state.filterStatus[key] = false;
        }
      }
      state.filterStatus.all = true;

      state.badges.splice(0, 1, {
        type: 'status',
        value: action.payload,
      });
    },

    setDefaultBadges: (state, action: PayloadAction<Badges[]>) => {
      state.badges = action.payload;
    },

    resetBadges: (state, action: PayloadAction<Badges>) => {
      if (action.payload.type === 'status') {
        for (const key in state.filterStatus) {
          if (key !== 'all') {
            state.filterStatus[key] = false;
          }
        }
        state.filterStatus.all = true;
        state.badges.splice(0, 1, null);
      }

      if (action.payload.type === 'type') {
        state.filterType = '';
        state.badges.splice(1, 1, null);
      }
    },

    resetFilter(state) {
      state.filterType = '';
      for (const key in state.filterStatus) {
        if (key !== 'all') {
          state.filterStatus[key] = false;
        }
      }
      state.filterStatus.all = true;
    },

    setVisabilityCancelModal: (state) => {
      state.showCancelModal = !state.showCancelModal;
    },

    setVisabilityDeleteModal: (state) => {
      state.showDeleteModal = !state.showDeleteModal;
    },

    setItemId: (state, action: PayloadAction<string | null>) => {
      state.itemId = action.payload;
    },
  },
  extraReducers: {
    [fetchMyListSSR.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchMyListSSR.fulfilled.type]: (state, { payload }) => {
      state.loading = false;
      state.itemsList = payload;
    },
    [fetchMyListSSR.rejected.type]: (state, { payload }) => {
      state.loading = false;
      state.itemsList = null;
      state.error = payload;
    },

    [addItemToArchive.pending.type]: (state) => {
      state.loading = true;
    },
    [addItemToArchive.fulfilled.type]: (
      state,
      { payload }: { payload: ProductDto },
    ) => {
      state.loading = false;
      const index = state.itemsList.findIndex((item) => item.id === payload.id);
      state.itemsList = [
        ...state.itemsList.slice(0, index),
        ...state.itemsList.slice(index + 1),
      ];
      state.itemsList.push(payload);
      state.itemsList = state.itemsList.sort((itemA, itemB) => {
        if (itemB.updatedAt > itemA.updatedAt) {
          return 1;
        }
        if (itemB.updatedAt < itemA.updatedAt) {
          return -1;
        }

        return 0;
      });
    },
    [addItemToArchive.rejected.type]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    [addItemToPosted.pending.type]: (state) => {
      state.loading = true;
    },
    [addItemToPosted.fulfilled.type]: (
      state,
      { payload }: { payload: ProductDto },
    ) => {
      state.loading = false;
      const index = state.itemsList.findIndex((item) => item.id === payload.id);
      state.itemsList = [
        ...state.itemsList.slice(0, index),
        ...state.itemsList.slice(index + 1),
      ];
      state.itemsList.push(payload);
      state.itemsList = state.itemsList.sort((itemA, itemB) => {
        if (itemB.postDate > itemA.postDate) {
          return 1;
        }
        if (itemB.postDate < itemA.postDate) {
          return -1;
        }

        return 0;
      });
    },
    [addItemToPosted.rejected.type]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    [deleteItem.pending.type]: (state) => {
      state.loading = true;
    },
    [deleteItem.fulfilled.type]: (
      state,
      { payload }: { payload: DeleteProduct },
    ) => {
      state.loading = false;
      const index = state.itemsList.findIndex(
        (item) => item.id === payload.productId,
      );
      state.itemsList = [
        ...state.itemsList.slice(0, index),
        ...state.itemsList.slice(index + 1),
      ];
    },
    [deleteItem.rejected.type]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    [HYDRATE](state, { payload }: HydrateAction) {
      if (payload.myList.itemsList) {
        state.itemsList = payload.myList.itemsList;
      }
    },
  },
});

export const myListReducer = myListSlice.reducer;

export const {
  filterByType,
  filterByStatus,
  resetStatuses,
  setDefaultBadges,
  resetBadges,
  resetFilter,
  setVisabilityCancelModal,
  setVisabilityDeleteModal,
  setItemId,
} = myListSlice.actions;

export type { MyListState };
