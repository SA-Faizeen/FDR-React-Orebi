const pages = [1, 2, 3, 4, "...", 10];

/**
 * Layout-only pagination bar: page numbers on the left, a results summary
 * on the right. Nothing here is interactive yet.
 */
const ShopPagination = () => {
  return (
    <div className="flex items-center justify-between pt-16">
      <ul className="flex items-center gap-x-2">
        {pages.map((page) => (
          <li key={page}>
            {page === "..." ? (
              <span className="px-2 text-muted">...</span>
            ) : (
              <button
                type="button"
                className={`flex size-10 items-center justify-center border text-sm ${
                  page === 1
                    ? "border-ink bg-ink text-white"
                    : "border-line text-muted"
                }`}
              >
                {page}
              </button>
            )}
          </li>
        ))}
      </ul>
      <p className="text-sm text-muted">Products from 1 to 12 of 100</p>
    </div>
  );
};

export default ShopPagination;