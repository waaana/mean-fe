export class IPaginator {
    length: number;
    pageSize: number;
    pageSizeOptions: Array<number>;
    pageIndex: number;
    filter: Object;
    sort: ISort;
    queryIndex: string;
    exactFilter: IPaginatorFilter;

    constructor(
        length: number,
        pageSize: number,
        pageSizeOptions: Array<number>,
        pageIndex: number,
        filter: Object,
        sort: ISort,
        exactFilter: Object
    ) {
        this.length = length;
        this.pageSize = pageSize;
        this.pageSizeOptions = pageSizeOptions;
        this.pageIndex = pageIndex;
        this.filter = filter;
        this.sort = sort;
        this.exactFilter = exactFilter;
        this.setQueryIndex();
    }

    setQueryIndex = () => {
        const min: number = Math.ceil(0);
        const max: number = Math.floor(1000000);
        this.queryIndex = (Math.floor(Math.random() * (max - min + 1)) + min).toString();
    }

}

export class ISort {
    field: string;
    way: string;
}

export class IPaginatorFilter {
    project?: String;
}