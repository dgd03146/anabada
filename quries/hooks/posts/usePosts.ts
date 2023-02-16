import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import { postApi } from '../../../api/api';
import { QueryKeys } from '../../key';

const fetchPosts = async (
  pageParam: number,
  areaSelected: string,
  search: string | null
) => {
  if (search) {
    try {
      const res = await postApi.getSearchPosts(pageParam, areaSelected, search);

      const data = res.data.content;
      const last = res.data.last;
      return { data, nextPage: pageParam + 1, last };
    } catch (err) {
      console.log(err);
    }
  } else {
    try {
      const res = await postApi.getPosts(pageParam, areaSelected);
      const data = res.data.content;
      const last = res.data.last;
      return { data, nextPage: pageParam + 1, last };
    } catch (err) {
      console.log(err);
      alert(err);
    }
  }
};

export function usePosts() {
  const [areaSelected, setAreaSelected] = useState('ALL');
  const [search, setSearch] = useState(null);

  const { data, fetchNextPage, isFetchingNextPage, isFetching, isLoading } =
    useInfiniteQuery(
      [QueryKeys.posts, areaSelected, search],
      ({ pageParam = 0 }) => fetchPosts(pageParam, areaSelected, search),
      {
        getNextPageParam: (lastPage) =>
          !lastPage?.last ? lastPage?.nextPage : undefined,
        refetchOnWindowFocus: false,
        staleTime: 600000
      }
    );

  return {
    data,
    isFetchingNextPage,
    fetchNextPage,
    isFetching,
    isLoading,
    setSearch,
    areaSelected,
    setAreaSelected
  };
}

export function usePreFetchPosts() {
  const queryClient = useQueryClient();
  const [areaSelected, setAreaSelected] = useState('ALL');
  const [search, setSearch] = useState(null);

  queryClient.prefetchInfiniteQuery(
    [QueryKeys.posts, areaSelected, search],
    ({ pageParam = 0 }) => fetchPosts(pageParam, areaSelected, search),
    {
      staleTime: 600000
    }
  );
}
