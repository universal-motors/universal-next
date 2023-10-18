export interface PaginationHeader {
  CurrentPage: number;
  TotalCount: number;
  TotalPages: number;
  PageSize: number;
  HasNextPage: boolean;
  HasPreviousPage: boolean;
}
