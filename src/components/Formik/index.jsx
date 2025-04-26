//import liraries
import {Formik} from 'formik';
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/native';
import UserPage from '../UserPage';

// create a component
const FormikYup = () => {
  const navigation = useNavigation();
  const validation = Yup.object().shape({
    email: Yup.string()
      .email('Bu kısım Email formatında olmalıdır.')
      .required('Email Zorunludur'),
    password: Yup.string()
      .required('Şifre Zorunludur')
      .min(6, 'Şifre en az 6 karakterden oluşmalıdır.')
      .max(10, 'Şifre alanı en fazla 10 karakterden oluşmalıdır.')
      .matches(
        '^(?=.*[a-z])(?=.*[A-Z]).+$',
        'Şifre bir büyük harf bir küçük harften oluşmalıdır.',
      ),
  });

  return (
    <View style={styles.container}>
      {/* Formlarda verileri herbir form  için state kullanarak yönetebiliriz.Fakat Formik bunu arkaplanda yapar.Çalışması ise içerisinde yer alan values ve handleChange metotları ile bunu başlangıçta tanımladığımız initialValues a set eder. */}
      {/* Yup Formikten ayrı bir kütüphane olmasına karşılık Formik ile birlikte kullanıldığında çok efektif bir form yönetimi sağlar.Yup içerisinde bulunan metotlar[required,min,max] ve bu metotlara bağlı olarak verdiği hata mesajları sayesinde kullanıcı deneyimini arttırır.  */}
      <Formik
        validationSchema={validation}
        onSubmit={(values, {resetForm}) => {
          resetForm();
          console.log(values);
          navigation.navigate('UserPage');
        }}
        initialValues={{
          email: '',
          password: '',
        }}>
        {({handleSubmit, values, handleChange, errors}) => (
          <View>
            <Text style={styles.label}>Giriş Formu</Text>
            <TextInput
              value={values.email}
              onChangeText={handleChange('email')}
              placeholder="Email"
              inputMode="email"
              style={styles.input}
            />
            {errors.email && <Text style={styles.error}>{errors.email} </Text>}
            <TextInput
              value={values.password}
              onChangeText={handleChange('password')}
              placeholder="Şifre"
              secureTextEntry
              style={styles.input}
            />
            {errors.password && (
              <Text style={styles.error}>{errors.password} </Text>
            )}

            {/* secureTextEntry özelliği ile TextInputa girilen değerler gizli karakter olarak gözükür.  */}

            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                handleSubmit();
              }}>
              <Text style={styles.btnText}>Giriş Yap</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    margin: 5,
    width: 300,
    height: 50,
    backgroundColor: '#eaeaeaea',
    borderRadius: 25,
    paddingLeft: 10,
    fontSize: 20,
  },
  btn: {
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
    borderRadius: 25,
    marginTop: 20,
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  error: {
    fontWeight: 'bold',
    color: 'red',
    fontSize: 15,
  },
});

//make this component available to the app
export default FormikYup;
