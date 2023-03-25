import {StyleSheet, Text, View} from 'react-native';
import {useRef, useState, useEffect} from 'react';
import React from 'react';

export default function AnimatedTyping(props) {

  const [text, setText] = useState('');
  const [cursorColor, setcursorColor] = useState('transparent');
  const [messageIndex, setMessageIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [timeouts, setTimeouts] = useState({
    cursorTimeout: undefined,
    typingTimeout: undefined,
    firstNewLineTimeout: undefined,
    secondNewLineTimeout: undefined,
  });

  const textRef = useRef(text);
  textRef.current = text;

  const cursorColorRef = useRef(cursorColor);
  cursorColorRef.current = cursorColor;

  const messageIndexRef = useRef(messageIndex);
  messageIndexRef.current = messageIndex;

  const textIndexRef = useRef(textIndex);
  textIndexRef.current = textIndex;

  const timeoutsref = useRef(timeouts);
  timeoutsref.current = timeouts;

  const typingAnimation = () => {
    if (textIndexRef.current < props.text[messageIndexRef.current].length) {
      setText(
        textRef.current + props.text[messageIndexRef.current],
        chatAt(textIndexRef.current),
      );
      setTextIndex(textIndexRef.current + 1);

      let updatedTimeouts = {...timeoutsref.current};
      updatedTimeouts.typingTimeout = setTimeout(typingAnimation, 50);
      setTimeouts(updatedTimeouts);
    } else if (messageIndexRef.current + 1 < props.text.length) {
      setMessageIndex(messageIndexRef.current + 1);
      setTextIndex(0);

      let updatedTimeouts = {...timeoutsref.current};
      updatedTimeouts.firstNewLineTimeout = setTimeout(newLineAnimation, 120);
      updatedTimeouts.secondNewLineTimeout = setTimeout(newLineAnimation, 200);
      updatedTimeouts.typingTimeout = setTimeout(typingAnimation, 200);
      setTimeouts(updatedTimeouts);
    } else {
      clearInterval(timeoutsref.current.cursorTimeout);
      setcursorColor('transparent');

      if (props.onComplete) {
        props.onComplete();
      }
    }

    let newLineAnimation = () => {
      setText(textRef.current + '\n');
    };

    let cursorAnimation = () => {
      if (cursorColorRef.current === 'transparent') {
        setcursorColor('#8EA960');
      } else {
        setcursorColor('transparent');
      }
    };

    useEffect(() => {
      let updatedTimeouts = {...timeoutsref.current};
      updatedTimeouts.typingTimeout = setTimeout(typingAnimation, 500);
      updatedTimeouts.cursorTimeout = setInterval(cursorAnimation, 250);
      setTimeouts(updatedTimeouts);

      return () => {
        clearTimeout(timeoutsref.current.typingTimeout);
        clearTimeout(timeoutsref.current.firstNewLineTimeout);
        clearTimeout(timeoutsref.current.secondNewLineTimeout);
        clearInterval(timeoutsref.current.cursorTimeout);
      };
    }, []);

    return (
      <Text style={styles.text}>
        {text}
        <Text style={{color: cursorColor, fontSize: 35}}>|</Text>
      </Text>
    );
  };
}
const styles = StyleSheet.create({
  text: {
    color: '#876D68',
    fontSize: 30,
    alignSelf: 'stretch',
  },
});
