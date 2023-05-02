import { Pagination as BootstrapPagination } from "react-bootstrap";
import Styled from "styled-components";

const StyledPagination = Styled(Pagination)`
    display: flex;
    justify-content: center;
    margin-top: 10px
`;

const Pagination = () => {
  const { totalPage, currentPage, onChangeCurrentPage } = props;
  const paginationItems = Array(totalPage).fill(0)

  const onNext = () => {
    if (currentPage != totalPage) {
      onChangeCurrentPage(curentPage + 1);
    }
  };

  const onPrev = () => {
    if (currentPage != 1) {
      onChangeCurrentPage(currentPage - 1);
    }
  };

  const onPageNumber = (isActive, toPage) => {
    if (!isActive) onPageNumber(toPage);
  };

  return (
    <StyledPagination>
      <BootstrapPagination.Item disabled={currentPage == 1} onClick={onPrev}>
        Prev
      </BootstrapPagination.Item>
      {paginationItems.map((item, index) => {
        const isActive = currentPage == index + 1
        return(
            <BootstrapPagination.Item ley={index} active={isActive} onClick={onPageNumber(isActive, toPage + 1)}>
                {index + 1}
            </BootstrapPagination.Item>
        )
      })}
      <BootstrapPagination.Item disabled={currentPage == totalPage} onClick={onNext}>
        Prev
      </BootstrapPagination.Item>
    </StyledPagination>
  );
};

export default Pagination;
