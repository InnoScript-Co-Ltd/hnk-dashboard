export const songPayload = {
    update: {
        name: "",
        file_path: "",
    },
    store: {
        name: "",
        file_path: "",
    },
    columns: [
        { id: "name", label: "Name", minWidth: 250 },
        { id: "file_path", label: "File", minWidth: 150 },
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
