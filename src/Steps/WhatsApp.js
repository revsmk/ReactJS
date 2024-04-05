import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useAppState } from "../state";
import { Button, Field, Form, Input } from "../Forms";

export const WhatsApp = () => {
    const [state, setState] = useAppState();
    const { handleSubmit, register, formState: { errors } } = useForm({defaultValues: state, mode: "onsubmit"});
    const navigate = useNavigate();

    const saveData = (data) => {
        setState({...state, ...data});
        navigate('/language');
    }

    return(
        <Form onSubmit={handleSubmit(saveData)}>
            <fieldset>
                <Field label="Enter the Whats App number" error={errors?.whatsapp}>
                    <Input {...register("whatsapp", {required: "Whats App number is required"})} type="number" id="whatsapp"></Input>
                </Field>
                <div className="button-row">
                    <Link className={`btn btn-secondary`} to="/mobile">
                        {"<"} Previous
                    </Link>
                    <Button>Next {">"}</Button>
                </div>
            </fieldset>
        </Form>
    )
}

