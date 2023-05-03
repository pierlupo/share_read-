import { StyleSheet, Text, View, Animated, Button } from 'react-native';
import React from 'react';
import AnimatedTyping from '../components/AnimatedTyping';
import { useState } from 'react';
import SignForm from '../store/redux/auth/SignForm';
import { removeUser, signIn, signUp } from '../store/redux/auth/AuthSlice';
import { useSelector, useDispatch} from "react-redux";

export default function NotifPage() {

  const user = useSelector(state => state.auth.user)
  const [signFormMode, setSignFormMode] = useState("")
  const dispatch = useDispatch()

  const onSigningHandler = async (credentials) => {
    if (signFormMode === "Sign In") {
      await dispatch(signIn(credentials))
    } else if (signFormMode === "Sign Up") {
      await dispatch(signUp(credentials))
    }

    setSignFormMode("")
  }
  return (
    <SignForm mode={signFormMode} onSubmit={onSigningHandler} />
    
  )
}

const styles = StyleSheet.create({

 
})