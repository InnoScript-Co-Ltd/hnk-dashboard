import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

export const FilterByDate = (props) => {

    const { onFilter } = props;

    const { startFilterDate, endFilterDate } = useSelector(
        (state) => state.share
    );

    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();


    const onFilterByDate = () => {
        onFilter({
            startDate: startDate ? startDate : startFilterDate,
            endDate: endDate ? endDate : endFilterDate,
        });
    };

    return (
        <LocalizationProvider
            dateAdapter={AdapterDayjs}>
            <DemoContainer
                components={['DatePicker', 'DatePicker']}>
                <DatePicker
                    label="Start Date"
                    value={startDate}
                    timezone='UTC'
                    onChange={(newValue) => setStartDate(newValue)}
                    slotProps={{
                        textField: {
                            size: 'small',
                        },
                    }}
                    inputFormat="yyyy-MM-dd"
                />
                <DatePicker
                    label="End Date"
                    value={endDate}
                    timezone='UTC'
                    onChange={(newValue) => setEndDate(newValue)}
                    slotProps={{
                        textField: {
                            size: 'small',
                        },
                    }}
                    onAccept={() => {
                        onFilterByDate()
                    }}
                />
            </DemoContainer>
        </LocalizationProvider>
    )


}