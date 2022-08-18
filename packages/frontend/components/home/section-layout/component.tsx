import { Container } from '@primitives';
import { useAppDispatch } from '@hooks';
import type { SectionLayotProps } from './types';
import { wrapper, title as titleStyled, loadMore } from './styles';

const SectionLayout = ({
  title,
  loadMoreTitle,
  children,
  withOutTitle,
  loadMoreAction,
}: SectionLayotProps) => {
  const dispatch = useAppDispatch();
  const loadMoreHandler = () => {
    dispatch(loadMoreAction(10));
  };

  return (
    <section css={wrapper}>
      <Container>
        <div data-with-out-title={!!withOutTitle} css={titleStyled}>
          <h2>{title}</h2>
          <div
            onKeyPress={loadMoreHandler}
            tabIndex={0}
            role="button"
            onClick={loadMoreHandler}
            css={loadMore}
          >
            {loadMoreTitle}
          </div>
        </div>
        {children}
      </Container>
    </section>
  );
};

export { SectionLayout };
