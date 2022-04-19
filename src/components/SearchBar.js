export default function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange
}) {
  return (
    <form>
      <input
        type="text"
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
        placeholder="Search..."
      />
      <br />
      <label>
        <input
          type="checkbox"
          onChange={() => onInStockOnlyChange(!inStockOnly)}
          checked={inStockOnly}
        />
        Only show products in stock
      </label>
    </form>
  );
}
