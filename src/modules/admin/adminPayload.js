export const adminPayload = {
    update: {
        id: "",
        name: "",
        profile: "",
        email: "",
        phone: "",
        status: ""
    },
    store: {
        name: "",
        profile: '',
        email: "",
        phone: "",
        password: "",
        confirm_password: "",
    },
    columns: [
        { id: "name", label: "Full Name", minWidth : 170 },
        { id: "email", label: "Email", minWidth : 170 },
        { id: "phone", label: "Phone", minWidth : 170 },
    ],
    paginateParams: {
        page: 1,
        per_page: 10,
        columns: "id,name,email,phone,status",
        search: "",
        order: "id",
        sort: "DESC",
        value: "",
        start_date: '',
        end_date: ''
    }
}