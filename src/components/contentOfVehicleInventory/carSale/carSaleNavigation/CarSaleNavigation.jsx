const PaginationItem = ({ page, onPageChange, currentPage }) => {
  return (
    <li
      onClick={() => {
        onPageChange(page)
        window.scrollTo(0, 0)
      }}
    >
      <span
        style={{
          background: page === currentPage ? '#b90000' : '#fff',
          padding: '5px 12px',
          border:
            page === currentPage ? '1px sold #b90000' : '1px solid #cccccc',
          color: page === currentPage ? '#fff' : '#b90000',
          cursor: 'pointer',
        }}
      >
        {page}
      </span>
    </li>
  )
}

const range = (start, end) => {
  return [...Array(end).keys()].map((el) => el + start)
}

const CarSaleNavigation = ({
  currentPage,
  total,
  limit,
  onPageChange,
  vehiclePageCars,
}) => {
  const pagesCount = Math.ceil(total / limit)
  const pages = range(1, pagesCount)

  const startPage = Math.max(1, currentPage - 2)
  const endPage = Math.min(pagesCount, currentPage + 2)

  const visiblePages = pages.slice(startPage - 1, endPage)

  const stylesForBtn = {
    background: '#b90000',
    padding: '6px 10px',
    borderRadius: '5px',
    fontWeight: '600',
    color: '#fff',
  }
  return (
    <>
      <ul
        style={{
          marginTop: '40px',
          display: 'flex',
          justifyContent: 'center',
          gap: '0.5rem',
          alignItems: 'center',
        }}
      >
        <li>
          <button
            onClick={() => {
              onPageChange(currentPage - 1)
              window.scrollTo(0, 0)
            }}
            disabled={currentPage === 1}
            style={{
              cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
              ...stylesForBtn,
            }}
          >
            Previous
          </button>
        </li>
        {4 <= currentPage && (
          <>
            <PaginationItem
              page={1}
              onPageChange={onPageChange}
              currentPage={currentPage}
            />
            <li>...</li>
          </>
        )}
        {visiblePages.map((page) => (
          <PaginationItem
            page={page}
            key={page}
            onPageChange={onPageChange}
            currentPage={currentPage}
          />
        ))}
        {endPage < pagesCount && (
          <>
            <li>...</li>
            <PaginationItem
              page={pagesCount}
              onPageChange={onPageChange}
              currentPage={currentPage}
            />
          </>
        )}
        <li>
          <button
            onClick={() => {
              onPageChange(currentPage + 1)
              window.scrollTo(0, 0)
            }}
            disabled={currentPage === pagesCount}
            style={{
              cursor: currentPage === pagesCount ? 'not-allowed' : 'pointer',
              ...stylesForBtn,
            }}
          >
            Next
          </button>
        </li>
      </ul>
      <div
        style={{
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <span>
          Showing {(currentPage - 1) * limit + 1} -{' '}
          {Math.min(currentPage * limit, vehiclePageCars.length)} of{' '}
          {vehiclePageCars.length} items
        </span>
      </div>
    </>
  )
}

export default CarSaleNavigation
