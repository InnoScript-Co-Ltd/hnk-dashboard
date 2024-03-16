import { Grid, InputLabel, OutlinedInput, Stack, Paper } from "@mui/material";
import { paths } from "../../../constants/paths";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { outletService } from "../outletService";
import { payloadHandler } from "../../../helpers/handler";
import { ValidationMessage } from "../../../shares/ValidationMessage";
import { Breadcrumb } from "../../../shares/Breadcrumbs";
import { outletPayload } from "../outletPayload";
import { formBuilder } from "../../../helpers/formBuilder";
import FormMainAction from "../../../shares/FormMainAction";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export const OutletCreate = () => {
    const [loading, setLoading] = useState(false);
    const [payload, setPayload] = useState(outletPayload.store);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submitOutlet = async () => {
        setLoading(true);
        const formData = formBuilder(payload, outletPayload.store);

        await outletService.store(formData, dispatch);

        setLoading(false);
    };

    return (
        <>
            <div className=" grid">
                <div className="col-12">
                    <Breadcrumb />
                </div>

                <Paper elevation={3} style={{ padding: 20, margin: 10 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={4}>
                            <Stack spacing={1}>
                                <InputLabel htmlFor="table-name">
                                    Name (required)
                                </InputLabel>
                                <OutlinedInput
                                    id="table-name"
                                    type="text"
                                    onChange={(e) =>
                                        payloadHandler(
                                            payload,
                                            e.target.value,
                                            "name",
                                            (updateValue) => {
                                                setPayload(updateValue);
                                            }
                                        )
                                    }
                                    name="name"
                                    placeholder="Enter Your Name"
                                />
                                <ValidationMessage field={"name"} />
                            </Stack>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Stack spacing={1}>
                                <InputLabel htmlFor="table-name">
                                    Phone (required)
                                </InputLabel>
                                <OutlinedInput
                                    id="table-name"
                                    type="number"
                                    onChange={(e) =>
                                        payloadHandler(
                                            payload,
                                            e.target.value,
                                            "phone",
                                            (updateValue) => {
                                                setPayload(updateValue);
                                            }
                                        )
                                    }
                                    name="phone"
                                    placeholder="Enter Phone Number"
                                />
                                <ValidationMessage field={"rate"} />
                            </Stack>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Stack spacing={1}>
                                <InputLabel htmlFor="table-name">
                                    Address (required)
                                </InputLabel>

                                <OutlinedInput
                                    id="table-name"
                                    type="text"
                                    onChange={(e) =>
                                        payloadHandler(
                                            payload,
                                            e.target.value,
                                            "address",
                                            (updateValue) => {
                                                setPayload(updateValue);
                                            }
                                        )
                                    }
                                    name="address"
                                    placeholder="Enter Address"
                                />
                                <ValidationMessage field={"address"} />
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Stack spacing={1}>
                                <InputLabel htmlFor="table-name">
                                    Date (required)
                                </InputLabel>

                                <OutlinedInput
                                    id="table-name"
                                    type="date"
                                    onChange={(e) =>
                                        payloadHandler(
                                            payload,
                                            e.target.value,
                                            "date",
                                            (updateValue) => {
                                                setPayload(updateValue);
                                            }
                                        )
                                    }
                                    name="rate"
                                    placeholder="Enter Rate"
                                />
                                <ValidationMessage field={"date"} />
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Stack spacing={1}>
                                <InputLabel htmlFor="table-name">
                                    Time (required)
                                </InputLabel>

                                <OutlinedInput
                                    id="table-name"
                                    type="time"
                                    onChange={(e) =>
                                        payloadHandler(
                                            payload,
                                            e.target.value,
                                            "time",
                                            (updateValue) => {
                                                setPayload(updateValue);
                                            }
                                        )
                                    }
                                    name="time"
                                    placeholder="Enter Time"
                                />
                                <ValidationMessage field={"time"} />
                            </Stack>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Stack spacing={1}>
                                <InputLabel htmlFor="table-name">
                                Promotion (required)
                                </InputLabel>

                                <OutlinedInput
                                    id="table-name"
                                    type="text"
                                    onChange={(e) =>
                                        payloadHandler(
                                            payload,
                                            e.target.value,
                                            "promotion",
                                            (updateValue) => {
                                                setPayload(updateValue);
                                            }
                                        )
                                    }
                                    name="promotion"
                                    placeholder="Enter Promotion"
                                />
                                <ValidationMessage field={"promotion"} />
                            </Stack>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Stack spacing={1}>
                                <InputLabel htmlFor="table-name">
                                Promo Description
                                </InputLabel>

                                <OutlinedInput
                                    id="table-name"
                                    type="text"
                                    onChange={(e) =>
                                        payloadHandler(
                                            payload,
                                            e.target.value,
                                            "promo_description",
                                            (updateValue) => {
                                                setPayload(updateValue);
                                            }
                                        )
                                    }
                                    name="promo_description"
                                    placeholder="Enter Description"
                                />
                                <ValidationMessage field={"promo_description"} />
                            </Stack>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Stack spacing={1}>
                                <InputLabel htmlFor="table-name">
                                Latitude (required)
                                </InputLabel>

                                <OutlinedInput
                                    id="table-name"
                                    type="text"
                                    onChange={(e) =>
                                        payloadHandler(
                                            payload,
                                            e.target.value,
                                            "latitude",
                                            (updateValue) => {
                                                setPayload(updateValue);
                                            }
                                        )
                                    }
                                    name="latitude"
                                    placeholder="Enter Latitude"
                                />
                                <ValidationMessage field={"latitude"} />
                            </Stack>
                        </Grid>

                        <FormMainAction
                            cancel="Cancle"
                            cancelClick={() => navigate(paths.admin)}
                            submit="Create"
                            submitClick={submitOutlet}
                            loading={loading}
                        />
                    </Grid>
                </Paper>
            </div>
        </>
    );
};
