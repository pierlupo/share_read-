import { useForm } from "react-hook-form";
import { connect } from "react-redux";
// import updateAction from "./actions";
import { removeUser, signIn, signUp } from "./AuthSlice";

export default function SignForm(props) {
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      pseudo: '',
      email: '',
    }
  });
  // Submit your data into Redux store
  const onSubmit = data => props.signIn(data);
  
  return (
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <input {...register("pseudo")} />
    //   <input {...register("email")} />
    //   <input type="submit" />
    // </form>
    <></>
  );
}

// Connect your component with redux
connect(({ pseudo, email }) => ({ pseudo, email }), signIn)(SignForm); 