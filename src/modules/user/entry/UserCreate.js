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
  TextField
} from '@mui/material';
import { paths } from "../../../constants/paths";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userService } from "../userService";
import { ValidationMessage } from "../../../shares/ValidationMessage";
import { payloadHandler } from "../../../helpers/handler";
import { tooltipOptions } from "../../../constants/config";
import { Breadcrumb } from '../../../shares/Breadcrumbs'
import { userPayload } from "../userPayload";
import { Profile } from "../../../shares/Profile";
import { formBuilder } from "../../../helpers/formBuilder";
import FormMainAction from "../../../shares/FormMainAction";

export const UserCreate = () => {
  const [loading, setLoading] = useState(false);
  const [payload, setPayload] = useState(userPayload.store);

  // const { translate } = useSelector(state => state.setting);

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const submitUser = async () => {
    setLoading(true);
    const formData = formBuilder(payload, userPayload.store);

    await userService.store(formData, dispatch);

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
                <Stack spacing={1} justifyContent="center" alignItems="center" >
                  <Profile
                    payload={payload}
                    setPayload={setPayload}
                    field={'profile'}
                  />
                </Stack>
              </Grid>

              <Grid item xs={12} md={4}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="table-name">Name (required)</InputLabel>
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
                  <ValidationMessage field={"name"} />
                </Stack>
              </Grid>

              <Grid item xs={12} md={4}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="table-email">Email (required)</InputLabel>
                  <OutlinedInput
                    id="email"
                    type="email"
                    // value={formValues.email}
                    onChange={(e) =>
                      payloadHandler(
                        payload,
                        e.target.value,
                        "email",
                        (updateValue) => {
                          setPayload(updateValue);
                        }
                      )
                    }
                    name="email"
                    placeholder="Enter Your Email"
                  />
                  <ValidationMessage field={"email"} />
                </Stack>
              </Grid>

              <Grid item xs={12} md={4}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="table-phone">Phone (required)</InputLabel>
                  <OutlinedInput
                    id="phone"
                    type="text"
                    // value={formValues.phone}
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
                    placeholder="Enter Your Phone"
                  />
                  <ValidationMessage field={"phone"} />
                </Stack>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="table-password">Password (required)</InputLabel>
                  <OutlinedInput
                    id="password"
                    type="password"
                    // value={formValues.password}
                    onChange={(e) =>
                      payloadHandler(
                        payload,
                        e.target.value,
                        "password",
                        (updateValue) => {
                          setPayload(updateValue);
                        }
                      )
                    }
                    name="password"
                    placeholder="Enter Your Password"
                  />
                  <ValidationMessage field={"password"} />
                </Stack>
              </Grid>

              <Grid item xs={12} md={4}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="table-con-password">Con Password (required)</InputLabel>
                  <OutlinedInput
                    id="con-password"
                    type="password"
                    // value={formValues.password}
                    onChange={(e) =>
                      payloadHandler(
                        payload,
                        e.target.value,
                        "confirm_password",
                        (updateValue) => {
                          setPayload(updateValue);
                        }
                      )
                    }
                    name="con-password"
                    placeholder="Enter Your Con Password"
                  />
                  <ValidationMessage field={"con-password"} />
                </Stack>
              </Grid>

              <FormMainAction
                cancel="Cancle"
                cancelClick={() => navigate(paths.user)}
                submit="Create"
                submitClick={submitUser}
                loading={loading}
              />

            </Grid>

        </Paper>

      </div>
    </>
  );
};
