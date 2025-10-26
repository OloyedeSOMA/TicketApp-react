import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function AuthFormFormik({ mode = "login", onSubmit }) {
  const isSignup = mode === "signup";

  const validationSchema = Yup.object({
    name: isSignup
      ? Yup.string().min(2, "Name is too short").required("Full name is required")
      : Yup.string(),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(6, "Minimum 6 characters").required("Password is required"),
  });

  const initialValues = isSignup
    ? { name: "", email: "", password: "" }
    : { email: "", password: "" };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnChange={true}
      validateOnBlur={true}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {({ isSubmitting, touched, errors }) => (
        <Form className="flex flex-col space-y-4 p-2">
          <h2 className="text-2xl font-bold text-center mb-4">
            {isSignup ? "Create Account" : "Login"}
          </h2>

          {/* Full Name */}
          {isSignup && (
            <RealtimeField
              name="name"
              label="Full Name"
              type="text"
              placeholder="Enter your full name"
              touched={touched}
              errors={errors}
            />
          )}

          {/* Email */}
          <RealtimeField
            name="email"
            label="Email Address"
            type="email"
            placeholder="e.g. johndoe@example.com"
            touched={touched}
            errors={errors}
          />

          {/* Password */}
          <RealtimeField
            name="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
            touched={touched}
            errors={errors}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
          >
            {isSubmitting ? "Please wait..." : isSignup ? "Sign Up" : "Login"}
          </button>
        </Form>
      )}
    </Formik>
  );
}

// REUSABLE FIELD — NO HOOKS, 100% SAFE
function RealtimeField({ name, label, type, placeholder, touched, errors }) {
  return (
    <fieldset className="flex flex-col">
      <label htmlFor={name} className="font-medium text-gray-700 mb-1">
        {label}
      </label>
      <Field name={name}>
        {({ field, form }) => (
          <input
            {...field}
            id={name}
            type={type}
            placeholder={placeholder}
            className={`border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              touched[name] && errors[name] ? "border-red-500" : "border-gray-300"
            }`}
            aria-required="true"
            aria-invalid={touched[name] && !!errors[name]}
            aria-describedby={touched[name] && errors[name] ? `error-${name}` : undefined}
            // ON CHANGE: Mark as touched immediately
            onChange={(e) => {
              form.setFieldValue(name, e.target.value);
              if (!touched[name]) {
                form.setFieldTouched(name, true, false); // false = don't revalidate
              }
            }}
          />
        )}
      </Field>
      {touched[name] && errors[name] && (
        <ErrorMessage
          name={name}
          component="p"
          id={`error-${name}`}
          className="text-red-600 text-sm mt-1"
        />
      )}
    </fieldset>
  );
}