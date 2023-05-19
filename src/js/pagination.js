import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import ref from './ref';
// import { getByKeyword, getTrending } from './api';
const TUI_VISIBLE_PAGES = 5;

export function createPagination(totalItems, visiblePages) {
  const options = {
    itemsPerPage: 20,
    totalItems: totalItems,
    visiblePages: visiblePages < 5 ? visiblePages : TUI_VISIBLE_PAGES,
  };
//  Creacion de una nueva instancia con referencia al modulo y un parametro de opciones. 
  const pagination = new Pagination(ref.pagination, options);

  if (visiblePages > 1) {
    ref.pagination.style.display = 'block';
  } else {
    ref.pagination.style.display = 'none';
  }

  return pagination;
}
