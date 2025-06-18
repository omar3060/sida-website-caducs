"use client";

import React, { useMemo } from "react";
import SVG from "react-inlinesvg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import countryList from "react-select-country-list";
import { Formik, Form, Field, useField } from "formik";
import * as Yup from "yup";
import { useLocale } from "next-intl";

// Custom field component to show validation messages only after interaction
const FormikField = ({ name, ...props }) => {
  const [field, meta] = useField(name);
  return (
    <>
      <Field name={name} {...props} />
      <div className="h-5 mt-1">
        {field.value && meta.error ? (
          <p className="text-red-500 text-xs">{meta.error}</p>
        ) : null}
      </div>
    </>
  );
};

// Custom Select component for Formik
const CountrySelect = ({ field, form, options, isRtl, ...props }) => {
  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: '0.75rem',
      borderColor: form.errors[field.name] && field.value ? '#f56565' : '#e5e7eb',
      boxShadow: 'none',
      '&:hover': {
        borderColor: '#e5e7eb',
      },
      minHeight: '42px',
      backgroundColor: 'var(--color-textWhite)',
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: '0.5rem',
      zIndex: 100,
      backgroundColor: 'var(--color-textWhite)',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? 'var(--color-mainColor)' : state.isFocused ? '#f3f4f6' : null,
      color: state.isSelected ? 'white' : 'var(--color-secondaryColor)',
      cursor: 'pointer',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'var(--color-secondaryColor)',
    }),
    input: (provided) => ({
      ...provided,
      color: 'var(--color-secondaryColor)',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: 'var(--color-secondaryColor)',
    }),
  };

  // Find Saudi Arabia in options
  const saudiArabia = options.find(option => option.value === 'SA');

  return (
    <Select
      styles={customStyles}
      options={options}
      name={field.name}
      value={options.find(option => option.value === field.value)}
      defaultValue={saudiArabia}
      onChange={(option) => form.setFieldValue(field.name, option.value)}
      onBlur={field.onBlur}
      isRtl={isRtl}
      placeholder="Select a country"
      isClearable={false}
      isSearchable={true}
      classNamePrefix="country-select"
      {...props}
    />
  );
};

const SubscriptionForm = () => {
  const locale = useLocale();
  const isArabic = locale === "ar";
  
  // Format country list for react-select
  const countryOptions = useMemo(() => {
    return countryList().getData().map(country => ({
      label: country.label,
      value: country.value.toUpperCase(),
    }));
  }, []);

  // Initial form values
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    businessName: "",
    numberOfBranches: "",
    cdsCount: "",
    kdsCount: "",
    country: "SA",
    termsAccepted: false,
    privacyAccepted: false,
  };

  // Validation schema using Yup
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required("First name is required")
      .min(2, "First name must be at least 2 characters"),
    lastName: Yup.string()
      .required("Last name is required")
      .min(2, "Last name must be at least 2 characters"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    businessName: Yup.string().required("Business name is required"),
    numberOfBranches: Yup.number()
      .required("Number of branches is required")
      .positive("Must be a positive number")
      .integer("Must be a whole number"),
    cdsCount: Yup.number()
      .required("Number of CDS is required")
      .positive("Must be a positive number")
      .integer("Must be a whole number"),
    kdsCount: Yup.number()
      .required("Number of KDS is required")
      .positive("Must be a positive number")
      .integer("Must be a whole number"),
    country: Yup.string().required("Country is required"),
    termsAccepted: Yup.boolean().oneOf(
      [true],
      "You must accept the terms and conditions"
    ),
    privacyAccepted: Yup.boolean().oneOf(
      [true],
      "You must accept the privacy policy"
    ),
  });

  // Form submission handler
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    // Redirect to verification page
    window.location.href = "/pricing/subscription/verification";
    setSubmitting(false);
  };

  return (
    <section className="section-style x-spacing xl:px-40 mx-auto">
      <h2 className="main-heading text-center text-secondaryColor mb-15">
        {"Subscription Form".split(' ').map((word, index) => (
          index % 2 === 0 ? (
            <span key={index} className="text-mainColor">{word} </span>
          ) : (
            <span key={index}>{word} </span>
          )
        ))}
      </h2>
      <div className="flex justify-center items-center">
        <div className="w-full md:w-[50%] relative z-10 pb-10">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            validateOnChange={true}
            validateOnBlur={false}
          >
            {({ errors, values, setFieldValue, isValid }) => (
              <Form className="flex flex-col gap-4 p-6 md:p-8 bg-textWhite text-secondaryColor rounded-[24px] shadow-xl relative">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-secondaryColor mb-1">
                      First Name *
                    </label>
                    <FormikField
                      name="firstName"
                      type="text"
                      className={`w-full px-4 py-2 rounded-xl border focus:outline-none ${
                        errors.firstName && values.firstName
                          ? "border-red-500"
                          : "border-gray-200 focus:border-mainColor"
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-secondaryColor mb-1">
                      Last Name *
                    </label>
                    <FormikField
                      name="lastName"
                      type="text"
                      className={`w-full px-4 py-2 rounded-xl border focus:outline-none ${
                        errors.lastName && values.lastName
                          ? "border-red-500"
                          : "border-gray-200 focus:border-mainColor"
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondaryColor mb-1">
                    Email *
                  </label>
                  <FormikField
                    name="email"
                    type="email"
                    className={`w-full px-4 py-2 rounded-xl border focus:outline-none ${
                      errors.email && values.email
                        ? "border-red-500"
                        : "border-gray-200 focus:border-mainColor"
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondaryColor mb-1">
                    Phone Number *
                  </label>
                  <PhoneInput
                    country={"sa"}
                    enableSearch={true}
                    value={values.phoneNumber}
                    onChange={(phone) => {
                      setFieldValue("phoneNumber", phone, true);
                    }}
                    inputProps={{
                      required: true,
                      dir: isArabic ? "rtl" : "ltr",
                    }}
                    containerClass={`phone-input-container ${
                      isArabic ? "rtl" : "ltr"
                    } ${errors.phoneNumber && values.phoneNumber ? "phone-error" : ""}`}
                    inputClass={`w-full px-4 py-2 rounded-xl border text-secondaryColor ${
                      errors.phoneNumber && values.phoneNumber
                        ? "border-red-500"
                        : "border-gray-200 focus:outline-none focus:border-mainColor"
                    }`}
                    buttonClass="phone-dropdown-button"
                    dropdownClass="phone-dropdown"
                  />
                  <div className="h-5 mt-1">
                    {values.phoneNumber && errors.phoneNumber ? (
                      <p className="text-red-500 text-xs">{errors.phoneNumber}</p>
                    ) : null}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondaryColor mb-1">
                    Business Name *
                  </label>
                  <FormikField
                    name="businessName"
                    type="text"
                    className={`w-full px-4 py-2 rounded-xl border focus:outline-none ${
                      errors.businessName && values.businessName
                        ? "border-red-500"
                        : "border-gray-200 focus:border-mainColor"
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondaryColor mb-1">
                    Number of Branches *
                  </label>
                  <FormikField
                      name="cdsCount"
                      type="number"
                      min="1"
                      className={`w-full px-4 py-2 rounded-xl border focus:outline-none ${
                        errors.cdsCount && values.cdsCount
                          ? "border-red-500"
                          : "border-gray-200 focus:border-mainColor"
                      }`}
                    />
                </div>
                
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-secondaryColor mb-1">
                      Number of CDS *
                    </label>
                    <FormikField
                      name="cdsCount"
                      type="number"
                      min="1"
                      className={`w-full px-4 py-2 rounded-xl border focus:outline-none ${
                        errors.cdsCount && values.cdsCount
                          ? "border-red-500"
                          : "border-gray-200 focus:border-mainColor"
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-secondaryColor mb-1 whitespace-nowrap">
                      Number of KDS *
                    </label>
                    <FormikField
                      name="kdsCount"
                      type="number"
                      min="1"
                      className={`w-full px-4 py-2 rounded-xl border focus:outline-none ${
                        errors.kdsCount && values.kdsCount
                          ? "border-red-500"
                          : "border-gray-200 focus:border-mainColor"
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondaryColor mb-1">
                    Country Name *
                  </label>
                  <Field
                    name="country"
                    component={CountrySelect}
                    options={countryOptions}
                    isRtl={isArabic}
                    className="country-select"
                  />
                  <div className="h-5 mt-1">
                    {values.country && errors.country ? (
                      <p className="text-red-500 text-xs">{errors.country}</p>
                    ) : null}
                  </div>
                </div>

                <div className="flex items-start gap-2 mt-2">
                  <Field
                    type="checkbox"
                    name="termsAccepted"
                    className={`mt-1 ${
                      errors.termsAccepted && values.termsAccepted === false
                        ? "border-red-500"
                        : ""
                    }`}
                  />
                  <label className="text-xs text-secondaryColor">
                    By checking this box, I confirm that I have read, understood and
                    agree to the Terms and Conditions. *
                  </label>
                </div>
                <div className="h-5 -mt-2">
                  {values.termsAccepted === false && errors.termsAccepted ? (
                    <p className="text-red-500 text-xs">{errors.termsAccepted}</p>
                  ) : null}
                </div>

                <div className="flex items-start gap-2">
                  <Field
                    type="checkbox"
                    name="privacyAccepted"
                    className={`mt-1 ${
                      errors.privacyAccepted && values.privacyAccepted === false
                        ? "border-red-500"
                        : ""
                    }`}
                  />
                  <label className="text-xs text-secondaryColor">
                    By using this form you agree with the storage and handling of
                    your data by this website in accordance with our Privacy Policy
                    *
                  </label>
                </div>
                <div className="h-5 -mt-2">
                  {values.privacyAccepted === false && errors.privacyAccepted ? (
                    <p className="text-red-500 text-xs">{errors.privacyAccepted}</p>
                  ) : null}
                </div>

                <button
                  type="submit"
                  disabled={!isValid}
                  className={`w-[120px] mt-4 px-6 py-2 text-textWhite rounded-xl transition-colors ${
                    isValid
                      ? "bg-mainColor hover:bg-lightBlue"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                >
                  Submit
                </button>
                <SVG
                  src="/assets/images/home/svgs/featuresTables/firstTableVector.svg"
                  alt="Contact Vector"
                  className="absolute top-[-35px] -left-[20px] md:top-[-55px] md:-left-[54px] w-[100] md:w-[132px] -z-10 svg-main-color"
                  width={100}
                  height={100}
                />
              </Form>
            )}
          </Formik>
        </div>
      </div>

      <style jsx global>{`
        .phone-input-container {
          width: 100%;
        }
        .phone-input-container .form-control {
          width: 100%;
          height: 42px;
          border-radius: 0.75rem;
          border: 1px solid #e5e7eb;
        }
        .phone-input-container .form-control:focus {
          border-color: var(--color-mainColor);
          box-shadow: none;
          outline: none;
        }
        .phone-dropdown-button {
          border-top-left-radius: 0.75rem;
          border-bottom-left-radius: 0.75rem;
          border: 1px solid #e5e7eb;
          border-right: none;
        }
        .phone-dropdown {
          width: 300px;
        }

        /* Phone input validation styles */
        .phone-input-container.phone-error .form-control {
          border-color: #f56565;
        }

        /* RTL Support */
        .phone-input-container.rtl .form-control {
          padding-right: 48px;
          padding-left: 12px;
          text-align: right;
        }
        .phone-input-container.rtl .flag-dropdown {
          right: 0;
          left: auto;
        }
        .phone-input-container.rtl .selected-flag {
          border-radius: 0 0.75rem 0.75rem 0;
          border-left: 1px solid #e5e7eb;
          border-right: none;
        }
        .phone-dropdown.rtl {
          text-align: right;
        }
        .phone-dropdown.rtl .country-list {
          text-align: right;
        }
        .phone-dropdown.rtl .search-box {
          padding-right: 10px;
          padding-left: 30px;
        }
        .phone-dropdown.rtl .search-box::placeholder {
          text-align: right;
        }

        /* Country select styles */
        .country-select__control {
          border-radius: 0.75rem !important;
          border: 1px solid #e5e7eb !important;
          min-height: 42px !important;
        }
        
        .country-select__control:hover {
          border-color: var(--color-mainColor) !important;
        }
        
        .country-select__control--is-focused {
          border-color: var(--color-mainColor) !important;
          box-shadow: none !important;
        }
        
        .country-select__menu {
          border-radius: 0.5rem !important;
          overflow: hidden;
        }
        
        .country-select__option--is-selected {
          background-color: var(--color-mainColor) !important;
        }
        
        .country-select__option--is-focused:not(.country-select__option--is-selected) {
          background-color: #f3f4f6 !important;
        }
        
        .country-select__placeholder {
          color: #6b7280 !important;
        }

        /* Dark mode styles for react-select */
        .dark .country-select__control {
          background-color: var(--color-textWhite) !important;
          border-color: #374151 !important;
        }
        
        .dark .country-select__control:hover {
          border-color: var(--color-mainColor) !important;
        }
        
        .dark .country-select__menu {
          background-color: var(--color-textWhite) !important;
        }
        
        .dark .country-select__option {
          color: var(--color-secondaryColor) !important;
        }
        
        .dark .country-select__option--is-focused:not(.country-select__option--is-selected) {
          background-color: rgba(55, 65, 81, 0.2) !important;
        }
        
        .dark .country-select__single-value {
          color: var(--color-secondaryColor) !important;
        }
        
        .dark .country-select__input-container {
          color: var(--color-secondaryColor) !important;
        }
        
        .dark .country-select__placeholder {
          color: #6b7280 !important;
        }

        /* Phone Input Dark Mode Styles */
        .dark .react-tel-input .form-control {
          background-color: var(--color-textWhite);
        }

        .dark .react-tel-input .selected-flag,
        .dark .react-tel-input .country-list {
          background-color: var(--color-textWhite);
        }

        .dark .react-tel-input .country-list .country {
          color: var(--color-secondaryColor);
        }

        .dark .react-tel-input .country-list .country.highlight,
        .dark .react-tel-input .country-list .country:hover {
          background-color: #374151;
        }

        .dark .react-tel-input .selected-flag:hover,
        .dark .react-tel-input .selected-flag:focus {
          background-color: #374151;
        }

        .dark .react-tel-input .country-list .search {
          background-color: var(--color-textWhite);
        }

        .dark .react-tel-input .country-list .search-box {
          background-color: var(--color-textWhite);
        }
      `}</style>
    </section>
  );
};

export default SubscriptionForm;
