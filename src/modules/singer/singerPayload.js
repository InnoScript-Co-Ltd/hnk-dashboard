export const singerPayload = {
    update: {
        name: "",
        profile: "",
    },
    store: {
        name: "",
        profile: '',
    },
    columns: [
        { id: "profile", label: "Profile", minWidth : 150 },
        { id: "name", label: "Name", minWidth : 250 },
    ],
    paginateParams: {
        page: 1,
        per_page: 10,
        columns: "name",
        search: "",
        order: "id",
        sort: "DESC",
        value: "",
        start_date: '',
        end_date: ''
    }
}