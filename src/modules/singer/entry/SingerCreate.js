// import { Card } from "primereact/card";
// import { InputText } from "primereact/inputtext";
// import { Password } from "primereact/password";
import {
    Button,
    FormHelperText,
    Grid,
    InputLabel,
    OutlinedInput,
    Stack,
    Paper,
    TextField,
} from "@mui/material";
import { paths } from "../../../constants/paths";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { singerService } from "../singerService";
import { ValidationMessage } from "../../../shares/ValidationMessage";
import { payloadHandler } from "../../../helpers/handler";
import { tooltipOptions } from "../../../constants/config";
import { Breadcrumb } from "../../../shares/Breadcrumbs";
import { singerPayload } from "../singerPayload";
import { Profile } from "../../../shares/Profile";
import { formBuilder } from "../../../helpers/formBuilder";
import FormMainAction from "../../../shares/FormMainAction";

export const SingerCreate = () => {
    const [loading, setLoading] = useState(false);
    const [payload, setPayload] = useState(singerPayload.store);

    // const { translate } = useSelector(state => state.setting);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submitSinger = async () => {
        setLoading(true);
        const formData = formBuilder(payload, singerPayload.store);

        await singerService.store(formData, dispatch);

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
                        <Grid item xs={12} md={12}>
                            <Stack
                                spacing={1}
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Profile
                                    payload={payload}
                                    setPayload={setPayload}
                                    field={"profile"}
                                />
                            </Stack>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Stack spacing={1}>
                                <InputLabel htmlFor="table-name">
                                    Name (required)
                                </InputLabel>
                                <OutlinedInput
                                    id="table-name"
                                    type="text"
                                    // value={formValues.name}
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
                            </Stack>
                        </Grid>

                        <FormMainAction
                            cancel="Cancle"
                            cancelClick={() => navigate(paths.admin)}
                            submit="Create"
                            submitClick={submitSinger}
                            loading={loading}
                        />
                    </Grid>
                </Paper>
            </div>
        </>
    );
};
