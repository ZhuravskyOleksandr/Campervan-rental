import css from './BookingForm.module.css';
import clsx from 'clsx';
import { ErrorMessage, Field, Form, Formik, useField } from 'formik';
import { bookingFormInitValues, BookingSchema } from '../../constants.js';
import Button from '../../shared/Button/Button.jsx';
import toast from 'react-hot-toast';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function MyDatePicker({ name = '', classes }) {
  const [field, meta, helpers] = useField(name);

  const { value } = meta;
  const { setValue } = helpers;

  return (
    <DatePicker
      {...field}
      className={classes}
      selected={value}
      onChange={date => setValue(date)}
      name="date"
      minDate={new Date(new Date().setDate(new Date().getDate()))}
      dateFormat="dd/MM/yyyy"
      placeholderText="Booking date"
    />
  );
}

export default function BookingForm() {
  function handleSubmit(_, actions) {
    toast.success('We will contact you shortly');
    window.location.reload();
    actions.resetForm();
  }

  return (
    <div className={css.container}>
      <h2 className={css.formTitle}>Book your campervan now</h2>
      <strong className={css.formSubtitle}>
        Stay connected! We are always ready to help you.
      </strong>

      <Formik
        initialValues={bookingFormInitValues}
        onSubmit={handleSubmit}
        validationSchema={BookingSchema}
      >
        {formikValid => {
          return (
            <Form className={css.form}>
              <div>
                <label>
                  <Field
                    className={clsx(css.formField, {
                      [css.formFieldWarning]:
                        formikValid.touched.name && formikValid.errors.name,
                    })}
                    type="text"
                    name="name"
                    placeholder="Name"
                  />
                  <ErrorMessage
                    className={css.warning}
                    name="name"
                    component="span"
                  />
                </label>
              </div>

              <div>
                <label>
                  <Field
                    className={clsx(css.formField, {
                      [css.formFieldWarning]:
                        formikValid.touched.email && formikValid.errors.email,
                    })}
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                  <ErrorMessage
                    className={css.warning}
                    name="email"
                    component="span"
                  />
                </label>
              </div>

              <div>
                <label className={css.dateLabel}>
                  <MyDatePicker
                    classes={clsx(css.formField, {
                      [css.formFieldWarning]:
                        formikValid.touched.date && formikValid.errors.date,
                    })}
                    name="date"
                  />
                  <ErrorMessage
                    className={css.warning}
                    name="date"
                    component="span"
                  />
                </label>
              </div>

              <div>
                <label>
                  <Field
                    className={clsx(css.formField, {
                      [css.formFieldWarning]:
                        formikValid.touched.comment &&
                        formikValid.errors.comment,
                    })}
                    as="textarea"
                    rows={4}
                    type="textarea"
                    name="comment"
                    placeholder="Comment"
                  />
                  <ErrorMessage
                    className={css.warning}
                    name="comment"
                    component="span"
                  />
                </label>
              </div>

              <Button
                className={css.formBtn}
                type="submit"
                disabled={!formikValid.dirty}
              >
                Send
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
