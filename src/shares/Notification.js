
import { useSnackbar } from 'notistack';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const Notification = () => {
    const { enqueueSnackbar } = useSnackbar();

    const state = useSelector(state => state.share);
    const { notification } = state;

    useEffect(() => {
        if(notification.variant && notification.message){
            const variant = notification.variant
            enqueueSnackbar(notification.message,{ variant })
        }

    }, [notification.variant,notification.message,enqueueSnackbar])
}