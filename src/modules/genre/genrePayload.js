export const genrePayload = {
    update: {
        name: "",
        rate: "",
    },
    store: {
        name: "",
        rate: "",
    },
    columns: [
        { id: "name", label: "Name", minWidth: 250 },
        { id: "rate", label: "Rate", minWidth: 150 },
    ],
    paginateParams: {
        page: 1,
        per_page: 10,
        columns: "name",
        search: "",
        order: "id",
        sort: "DESC",
        value: "",
        start_date: "",
        end_date: "",
    },
};
