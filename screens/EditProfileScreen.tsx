// Copyright FitBook

import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useSelector, useDispatch } from 'react-redux';
import { ProfileStackRouteParams, ProfileStackScreens } from '../navigation/Navigator';
import { styles } from './ProfileScreen.style';
import { CreateProfileModel, ProfileModel } from '../commonlib/models/ProfileModel';
import { RootState } from '../store/actionHelpers';
import { updateMyProfile, fetchMyProfile } from '../store/profiles';

interface EditProfileReduxState {
  myProfile?: ProfileModel;
}

type EditProfileNavigationProps = StackNavigationProp<ProfileStackRouteParams, ProfileStackScreens.EditProfileScreen>;

interface EditProfileProps {
  navigation: EditProfileNavigationProps;
}

const EditProfile: React.FC<EditProfileProps> = props => {
  const mode = useSelector<RootState>(state => state.fitlogReducer.theme);
  const dispatch = useDispatch();

  const themeContainerStyle = mode === 'light' ? styles.lightContainer : styles.darkContainer;

  const [firstName, setFirstName] = React.useState<string>('');
  const [lastName, setLastName] = React.useState<string>('');
  const [weight, setWeight] = React.useState<Number>(0);
  const [height, setHeight] = React.useState<Number>(0);

  const profileReduxState = useSelector<RootState, EditProfileReduxState>(state => {
    const profile = state.profiles.myProfile;
    return { myProfile: profile };
  });

  React.useEffect(() => {
    dispatch(fetchMyProfile());
  }, [dispatch]);

  const { myProfile } = profileReduxState;

  React.useEffect(() => {
    if (myProfile) {
      setFirstName(myProfile.firstName);
      setLastName(myProfile.lastName);
      setWeight(myProfile.weight);
      setHeight(myProfile.height);
    }
  }, [myProfile]);

  const onSuccess = () => {
    props.navigation.navigate('Profile');
  };

  const onSaveClick = () => {
    const profile: CreateProfileModel = {
      id: '',
      firstName,
      lastName,
      weight,
      height,
    };

    dispatch(updateMyProfile(profile, onSuccess));
  };

  return (
    <View style={[styles.container, styles.editProfileContainer, themeContainerStyle]}>
      <View>
        <View style={styles.dataView}>
          <Text style={styles.labelText}>First name</Text>
          <TextInput
            placeholder="First name"
            style={styles.valueText}
            defaultValue={firstName}
            onChangeText={(value: string) => setFirstName(value)}
          />
        </View>
        <View style={styles.dataView}>
          <Text style={styles.labelText}>Last name</Text>
          <TextInput
            placeholder="Last name"
            style={styles.valueText}
            defaultValue={lastName}
            onChangeText={(value: string) => setLastName(value)}
          />
        </View>
        <View style={styles.dataView}>
          <Text style={styles.labelText}>Weight (in kg)</Text>
          <TextInput
            placeholder="Weight (in kgs)"
            style={styles.valueText}
            defaultValue={weight > 0 ? weight.toString() : undefined}
            onChangeText={(value: string) => setWeight(Number(value))}
          />
        </View>
        <View style={styles.dataView}>
          <Text style={styles.labelText}>Height (in cms)</Text>
          <TextInput
            placeholder="Height (in cms)"
            style={styles.valueText}
            defaultValue={height > 0 ? height.toString() : undefined}
            onChangeText={(value: string) => setHeight(Number(value))}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={onSaveClick}>
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditProfile;
