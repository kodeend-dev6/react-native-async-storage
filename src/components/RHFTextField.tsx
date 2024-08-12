import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  Path,
} from 'react-hook-form';
import {StyleSheet, Text, TextInput, TextInputProps} from 'react-native';

interface FormInputControllerProps<T extends FieldValues> {
  control: Control<T>;
  errors: FieldErrors<T>;
  name: Path<T>;
  placeholder: string;
  other?: TextInputProps;
}

const RHFTextField = <T extends FieldValues>({
  control,
  name,
  placeholder,
  errors,
  other,
}: FormInputControllerProps<T>) => {
  const errorMessage = errors[name]?.message;
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor="#00453"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            {...other}
          />
        )}
      />

      {errorMessage && typeof errorMessage === 'string' && (
        <Text style={styles.errorText}>{errorMessage}</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    marginTop: 2,
  },
});

export default RHFTextField;
