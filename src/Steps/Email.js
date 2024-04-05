import { useForm } from "react-hook-form";
import { useNavigate} from "react-router-dom";
import { useAppState } from "../state";
import { Button, Field, Form, Input } from "../Forms";

export const Email = () => {
    const [state, setState] = useAppState();
    const { handleSubmit, register, formState: { errors } } = useForm({defaultValues: state, mode: "onsubmit"});
    const navigate = useNavigate();

    const saveData = (data) => {
        setState({...state, ...data});
        navigate('/mobile');
    }

    return(
        <Form onSubmit={handleSubmit(saveData)}>
            <fieldset>
                <Field label="Enter the Email" error={errors?.email}>
                    <Input {...register("email", {required: "Email is required"})} type="email" id="email"></Input>
                </Field>                              
                <Button>Next {">"}</Button>
            </fieldset>
        </Form>
    )
}

