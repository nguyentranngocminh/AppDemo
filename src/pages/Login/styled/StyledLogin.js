import { StyleSheet } from 'react-native';

const StyledLogin = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bgImage: require('../../../../assets/img/img_wrapper.jpg'),
  bgLogin: {
    flex: 1,
    backgroundColor: '#fdf5f2',
  },
  red: {
    color: 'red',
  },
  placeholder: {
    color: '#DDD',
  },
  ttlInput: {
    fontSize: 16,
    color: '#de9076',
  },
  cusInput: {
    fontSize: 16,
    color: 'back',
    paddingBottom: 0,
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
  },
});

export default StyledLogin;
