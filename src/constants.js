import * as Yup from 'yup';

export const advertsInitialState = Object.freeze({
  campers: [],
  favorites: [],
  isLoading: false,
  error: null,
  page: 2,
});

export const bookingFormInitValues = Object.freeze({
  name: '',
  email: '',
  date: '',
  comment: '',
});

export const BookingSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too short!')
    .max(50, 'Too long!')
    .required('Name is required!'),
  email: Yup.string()
    .email('Enter a valid email address')
    .required('Email is required!'),
  date: Yup.date()
    .min(
      new Date(new Date().setDate(new Date().getDate() - 1)),
      'Please select a date in the future'
    )
    .required('Booking date is required!'),
  comment: Yup.string(),
});
