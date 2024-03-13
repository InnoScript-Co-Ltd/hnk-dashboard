export const userPayload = {
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
        { id : "id", label: "ID", minWidth: 170},
        { id: "name", label: "Full Name", minWidth : 170 },
        { id: "email", label: "Email", minWidth : 170 },
        { id: "phone", label: "Phone", minWidth : 170 },
        { id: "email_verified_at", label: "Email Verified", minWidth : 170 },
        { id: "phone_verfified_at", label: "Phone Verified", minWidth : 170 },
        { id: "status", label: "Status", minWidth :170 }
    ],
    paginateParams: {
        page: 1,
        per_page: 10,
        columns: "id,name,email,phone,status",
        search: "",
        order: "id",
        sort: "DESC",
        filter: "status",
        value: "",
        start_date: '',
        end_date: ''
    }
}