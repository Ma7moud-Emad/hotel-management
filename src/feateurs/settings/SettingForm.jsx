import { useMutation, useQuery } from "@tanstack/react-query";
import {
  Button,
  ErrorMsg,
  Input,
  InputContainer,
  Label,
} from "../cabins/CreateCabin";
import getSettings, { changeSetting } from "../../servies/settingsActions";
import { useForm, useWatch } from "react-hook-form";
import styled from "styled-components";
import { useCallback, useEffect, useState } from "react";
import Loading from "../../ui/Loading";
import toastAlert from "../../servies/alerts";
import Spinner from "../../ui/Spinner";
import FormHeader from "./FormHeader";
import InputForm from "../cabins/Input";

const Container = styled.div`
  padding: 1rem;
`;
const Form = styled.form`
  /* md screen */
  @media (min-width: 640px) {
    width: 60%;
  }
  /* xl screen */
  @media (min-width: 1200px) {
    width: 50%;
  }
`;

export default function SettingForm() {
  // Control the display of the save-changes button
  const [isChangeSettings, setIsChangeSettings] = useState(false);

  // fetch settings
  const { data, isLoading: isFetching } = useQuery({
    queryKey: ["settings"],
    queryFn: () => getSettings(),
  });

  // Get the cleaned default values
  const getDefaultValues = useCallback(() => {
    if (!data?.[0]) return {};
    // eslint-disable-next-line no-unused-vars
    const { id, created_at, ...rest } = data[0];
    return rest;
  }, [data]);

  //   using react hook form to form mangement
  const {
    register: setting,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: getDefaultValues(),
  });

  // Watch the value of maxBookingLength
  const maxBookingLength = useWatch({
    control,
    name: "maxBookingLength",
  });

  // using react query to add cabin
  const { isPending: isChanging, mutate } = useMutation({
    mutationFn: (newSetting) => changeSetting(newSetting),

    onSuccess: () => {
      // msg confirm success change
      toastAlert("success", "Save change successfully");
      setIsChangeSettings(false);
    },

    onError: (error) => {
      // Msg confirm faild change
      toastAlert("error", error.message || "Failed to save change");
    },
  });

  // when form submit
  function onSubmit(values) {
    mutate(values);
  }

  // Reset form with new values when data loads or changes
  useEffect(() => {
    if (data?.[0]) {
      reset(getDefaultValues());
    }
  }, [data, reset, getDefaultValues]);

  return (
    <Container>
      <FormHeader>Update hotel settings</FormHeader>
      {isFetching ? (
        <Loading />
      ) : (
        <Form
          onSubmit={handleSubmit(onSubmit)}
          onChange={() => setIsChangeSettings(true)}
        >
          <InputForm
            register={setting}
            errors={errors}
            type="number"
            autoComplete="minBookingLength"
            name="minBookingLength"
            id="minBookingLength"
            validates={{
              required: "This field is required",
              min: { value: 3, message: "Minimum 3 nights/booking" },
              max: {
                value: maxBookingLength,
                message: `Minimum ${maxBookingLength} nights/booking`,
              },
            }}
            label="Minimum nights/booking"
          />

          <InputForm
            register={setting}
            errors={errors}
            type="number"
            autoComplete="maxBookingLength"
            name="maxBookingLength"
            id="maxBookingLength"
            validates={{
              required: "This field is required",
              min: { value: 10, message: "Minimum 10 nights/booking" },
            }}
            label="Maximum nights/booking"
          />

          <InputForm
            register={setting}
            errors={errors}
            type="number"
            autoComplete="maxGuestsPreBookings"
            name="maxGuestsPreBookings"
            id="maxGuestsPreBookings"
            validates={{
              required: "This field is required",
              min: { value: 8, message: "Minimum 8 nights/booking" },
            }}
            label="Maximum guests/booking"
          />

          <InputForm
            register={setting}
            errors={errors}
            type="number"
            autoComplete="breakfastPrice"
            name="breakfastPrice"
            id="breakfastPrice"
            validates={{
              required: "This field is required",
              min: { value: 10, message: "Minimum 10 nights/booking" },
            }}
            label="Breakfast price"
          />

          {isChangeSettings && (
            <Button type="submit" disabled={isChanging}>
              {isChanging ? (
                <>
                  <Spinner />
                  <span> Processing</span>
                </>
              ) : (
                "save change"
              )}
            </Button>
          )}
        </Form>
      )}
    </Container>
  );
}
