import React, { useCallback, useEffect, useRef, useState } from "react";
import { Breadcrumb } from "../../../shares/Breadcrumbs";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TablePaginationActions, emptyRows } from "../../../constants/config";
import { Box, TableHead, TableSortLabel } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setPaginate } from "../songSlice";
import { TableSearch } from "../../../shares/TableSearch";
import { songService } from "../songService";
import { songPayload } from "../songPayload";

export const SongList = () => {
    const { songs, paginateParams } = useSelector((state) => state.song);
    const dispatch = useDispatch();

    const [total, setTotal] = useState(0);
    const [columnIds, setColumnIds] = useState("");
    const [sort, setSort] = useState(true);
    const songColumns = useRef(songPayload.columns);

    /**
     * Event - Paginate Page Change
     * @param {*} event
     */
    const onPageChange = (event, newPage) => {
        dispatch(
            setPaginate({
                ...paginateParams,
                page: newPage,
            })
        );
    };

    /**
     * Event - Paginate Row Per Page Change
     * @param {*} event
     */
    const onRowPerPageChange = (event) => {
        dispatch(
            setPaginate({
                ...paginateParams,
                page: 1,
                per_page: parseInt(event.target.value, 10),
            })
        );
    };

    /**
     * Event - Sorting
     * @param {*} event
     */
    const onHandleSort = (event, label) => {
        setSort(!sort);
        dispatch(
            setPaginate({
                ...paginateParams,
                sort: sort ? "ASC" : "DESC",
                order: label?.toLowerCase(),
            })
        );
    };

    const ColumnSortHandle = (id) => {
        if (columnIds === id) {
            return sort ? "asc" : "desc";
        }
    };

    /**
     * Event - Search
     * @param {*} event
     */
    const onSearchChange = (event) => {
        dispatch(
            setPaginate({
                ...paginateParams,
                search: event,
            })
        );
    };

    const loadingData = useCallback(async () => {
        const result = await songService.index(dispatch, paginateParams);
        if (result.status === 200) {
            setTotal(
                result?.data?.total ? result.data.total : result.data.length
            );
        }
    }, [dispatch, paginateParams]);

    useEffect(() => {
        loadingData();
    }, [loadingData]);

    // console.log(songService);

    return (
        <div>
            <Breadcrumb />

            <Paper
                sx={{ width: "100%", overflow: "hidden", marginTop: "10px" }}
            >
                <TableContainer sx={{ maxHeight: 540 }}>
                    <Table sx={{ minWidth: 500 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell colSpan={12}>
                                    <Box
                                        display={"flex"}
                                        alignItems={"center"}
                                        justifyContent={"space-between"}
                                        marginTop={1}
                                    >
                                        <Box
                                            display={"flex"}
                                            alignItems={"center"}
                                            justifyContent={"space-between"}
                                            gap={2}
                                        ></Box>

                                        <TableSearch
                                            paginateParams={paginateParams}
                                            onSearchChange={onSearchChange}
                                        />
                                    </Box>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                {songColumns.current.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        <TableSortLabel
                                            active={true}
                                            direction={ColumnSortHandle(
                                                column.id
                                            )}
                                            onClick={(e) => {
                                                onHandleSort(e, column.id);
                                                setColumnIds(column.id);
                                            }}
                                        >
                                            {column.label}
                                        </TableSortLabel>
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {songs.map((row) => {
                                return (
                                    <TableRow
                                        hover
                                        role="checkbox"
                                        tabIndex={-1}
                                        key={row.id}
                                    >
                                        {songColumns.current.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell
                                                    key={column.id}
                                                    align={column.align}
                                                >
                                                    {column.id === "name" ? (
                                                        <label
                                                            style={{
                                                                textDecoration:
                                                                    "underline",
                                                                cursor: "pointer",
                                                            }}
                                                        >
                                                            {value}
                                                        </label>
                                                    ) : column.format &&
                                                      typeof value ===
                                                          "number" ? (
                                                        column.format(value)
                                                    ) : (
                                                        value
                                                    )}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                            {emptyRows(
                                paginateParams.page,
                                paginateParams.rowsPerPage,
                                songs
                            ) > 0 && (
                                <TableRow style={{ height: 53 * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"right"}
                    sx={{
                        width: "100%",
                    }}
                >
                    <TableRow>
                        <TableCell>
                            <TablePagination
                                sx={{
                                    width: "100%",
                                }}
                                rowsPerPageOptions={[5, 10, 25]}
                                colSpan={3}
                                count={total}
                                rowsPerPage={paginateParams.per_page}
                                page={paginateParams ? paginateParams.page : 0}
                                SelectProps={{
                                    inputProps: {
                                        "aria-label": "rows per page",
                                    },
                                    native: true,
                                }}
                                onPageChange={onPageChange}
                                onRowsPerPageChange={onRowPerPageChange}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableCell>
                    </TableRow>
                </Box>
            </Paper>
        </div>
    );
};
