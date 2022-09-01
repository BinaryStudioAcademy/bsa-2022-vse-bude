import type { ProductType } from '@vse-bude/shared';
import { useRouter } from 'next/router';
import { useAppDispatch, useTypedSelector } from '@hooks';
import { fetchProducts } from 'store/product';
import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { Button } from '@primitives';
import { PostTypeModal } from '@components/make-a-post/type-of-post';
import { ProductGrid } from './product-grid/component';

interface RequestOptions {
  limit?: number;
  type?: ProductType;
}

export const Filter = () => {
  const [isOpenTypeOfPost, setIsOpenTypeOfPost] = useState(false);
  const { query } = useRouter();
  const { list } = useTypedSelector((store) => store.product);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const filter: RequestOptions = Object.fromEntries(
      new URLSearchParams(query as unknown as string),
    );

    dispatch(fetchProducts({ limit: filter.limit, type: filter.type }));
  }, [dispatch, query]);

  return (
    <div>
      <PostTypeModal
        isOpen={isOpenTypeOfPost}
        setIsOpen={setIsOpenTypeOfPost}
      />
      <div
        css={css`
          margin: 35px auto 0;
        `}
      >
        <Button onClick={() => setIsOpenTypeOfPost(true)}>Create a Post</Button>
      </div>
      <ProductGrid lots={list}></ProductGrid>
    </div>
  );
};
