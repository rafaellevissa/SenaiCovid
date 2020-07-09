import {StyleSheet} from 'react-native';
import Constant from 'expo-constants';
import styled from "styled-components/native";

export default StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constant.statusBarHeight+20,
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    map: {
        flex: 1
    },
});

export const StatusBar = styled.StatusBar``;
export const CalloutContent = styled.View`
  width: 250px;
  justify-content: center;
`;
export const CalloutText = styled.Text`
  color: #666;
  font-weight: bold;
`;
export const ImageMarker = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 8px;
`;