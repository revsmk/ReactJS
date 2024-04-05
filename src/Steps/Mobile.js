import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useAppState } from "../state";
import { Button, Field, Form, Input } from "../Forms";

export const Mobile = () => {
    const [state, setState] = useAppState();
    const { handleSubmit, register, formState: { errors } } = useForm({defaultValues: state, mode: "onsubmit"});
    const navigate = useNavigate();

    const saveData = (data) => {
        setState({...state, ...data});
        navigate('/whatsapp');
    }

    return(
        <Form onSubmit={handleSubmit(saveData)}>
            <fieldset>
                <Field label="Enter the contact number" error={errors?.whatsapp}>
                    <Input {...register("mobile", {required: "Mobile number is required"})} type="number" id="mobile"></Input>
                </Field>
                <div className="button-row">
                    <Link className={`btn btn-secondary`} to="/">
                        {"<"} Previous
                    </Link>
                    <Button>Next {">"}</Button>
                </div>
            </fieldset>
        </Form>
    )
}

