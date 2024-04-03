import { useForm } from "react-hook-form";
import { useNavigate} from "react-router-dom";
import { useAppState } from "../state";
import { Button, Field, Form, Input } from "../Forms";

export const BasicDetails = () => {
    const [state, setState] = useAppState();
    const { handleSubmit, register, watch, formState: { errors } } = useForm({defaultValues: state, mode: "onsubmit"});
    const watchPassword = watch("password");
    const navigate = useNavigate();

    const saveData = (data) => {
        setState({...state, ...data});
        navigate('/education');
    }

    return(
        <Form onSubmit={handleSubmit(saveData)}>
            <fieldset>
                <legend>Contact</legend>
                <Field label="First Name" error={errors?.firstName}>
                    <Input {...register("firstName", {required: "First name is required"})} id="first-name"></Input>
                </Field>
                <Field label="Last Name" error={errors?.lastName}>
                    <Input {...register("lastName", {required: "Last name is required"})} id="last-name"></Input>
                </Field>
                <Field label="Email" error={errors?.email}>
                    <Input {...register("email", {required: "Email is required"})} type="email" id="email"></Input>
                </Field>
                <Field label="Password" error={errors?.password}>
                    <Input {...register("password", {required: "Password is required"})} type="password" id="password"></Input>
                </Field>
                <Field label="Confirm Password" error={errors?.confirmPassword}>
                    <Input 
                        {...register("confirmPassword", {
                            required: "Confirm the password", 
                            validate: (value)=> 
                                value === watchPassword || "The password do not match"
                            })} 
                        type="password" id="password-confirm"></Input>
                </Field>
                <Button>Next {">"}</Button>
            </fieldset>
        </Form>
    )
}

